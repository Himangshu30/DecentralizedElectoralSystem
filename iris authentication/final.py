import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.applications import InceptionV3
from tensorflow.keras.applications.inception_v3 import preprocess_input
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image
from sklearn.metrics.pairwise import cosine_similarity
from scipy.spatial.distance import euclidean
from collections import Counter
# Segment the iris using Hough Circle Transform
def segment_iris(image):
    # Apply a median blur to reduce noise
    blurred = cv2.medianBlur(image, 5)
    # Use Hough Circle Transform to detect circular regions (likely iris)
    circles = cv2.HoughCircles(
        blurred, 
        cv2.HOUGH_GRADIENT, 
        dp=1, 
        minDist=50, 
        param1=100, 
        param2=30, 
        minRadius=20, 
        maxRadius=80
    )
    # Create a mask for the detected iris
    mask = np.zeros_like(image)
    if circles is not None:
        circles = np.uint16(np.around(circles))
        for circle in circles[0, :]:
            center = (circle[0], circle[1])  # Circle center
            radius = circle[2]  # Circle radius
            cv2.circle(mask, center, radius, 255, -1)  # Draw filled circle on the mask
    # Use thresholding to create a binary mask for the pupil
    _, binary_mask = cv2.threshold(image, 40, 255, cv2.THRESH_BINARY_INV)  # Tune threshold if needed
    # Detect contours to isolate the pupil
    contours, _ = cv2.findContours(binary_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    # Assume the largest external contour is the pupil
    pupil_contour = max(contours, key=cv2.contourArea)
    # Create a mask for the pupil
    pupil_mask = np.zeros_like(image)
    cv2.drawContours(pupil_mask, [pupil_contour], -1, 255, thickness=cv2.FILLED)
    # Create the concentric mask
    mask = mask - pupil_mask
    # Apply the mask to isolate the iris
    segmented_iris = cv2.bitwise_and(image, image, mask=mask)
    return segmented_iris, mask

# Preprocess the image (resize and normalize)
def preprocess_image(image):
    # Resize the image to 224x224 (required by InceptionV3)
    resized_image = cv2.resize(image, (224, 224))
    rgb_image = cv2.cvtColor(resized_image, cv2.COLOR_GRAY2RGB)  # Convert grayscale to RGB
    preprocessed_image = preprocess_input(np.expand_dims(rgb_image, axis=0))
    return preprocessed_image

# Load Pre-trained MobileNetV2 Model (smaller model)
def build_pretrained_model(input_shape=(224, 224, 3)):
    # Load the InceptionV3 model pre-trained on ImageNet
    base_model = InceptionV3(weights='imagenet', include_top=False, input_shape=input_shape)
    return base_model

# Feature Extraction using Pretrained Model
def extract_features(model, preprocessed_image):
    # Extract features using the pre-trained model
    features = model.predict(preprocessed_image)
    return features.flatten()

# Compare features using Cosine Similarity
def compare_features(features_1, features_2, threshold=0.85):
    # Compute cosine similarity
    similarity = cosine_similarity([features_1], [features_2])[0][0]
    if(similarity >= threshold):
        return True, similarity
    else:
        return False, similarity

def plot_segmentation(directory_path):
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist.")
        return    
    image = cv2.imread(directory_path, cv2.IMREAD_GRAYSCALE)
    segmented_iris, mask = segment_iris(image)
    plt.figure(figsize=(12, 6))
    plt.subplot(1, 3, 1)
    plt.imshow(image, cmap='gray')
    plt.title('Original Image')
    plt.axis('off')
    plt.subplot(1, 3, 2)
    plt.imshow(segmented_iris, cmap='gray')
    plt.title('Segmented Iris')
    plt.axis('off')
    plt.subplot(1, 3, 3)
    plt.imshow(mask, cmap='gray')
    plt.title('Mask')
    plt.axis('off')
    plt.show()

def register_irises(directory_path, size):
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist.")
        return
    pretrained_model_array = []
    i = size
    while(i > 0):
        # Load the pretrained MobileNetV2 model (smaller model)
        pretrained_model_array.append(build_pretrained_model(input_shape=(224, 224, 3)))
        i -= 1 
    feature_name_array = []
    outerfiles = os.listdir(directory_path)
    for outerfile in outerfiles:
        outerfilepath = os.path.join(directory_path, outerfile)
        innerfiles = os.listdir(outerfilepath)
        for innerfile in innerfiles:
            innerfilepath = os.path.join(outerfilepath, innerfile)
            rootfiles = os.listdir(innerfilepath)
            imagefiles = [f for f in rootfiles if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff'))]
            if not imagefiles:
                print(f"No image files found in '{innerfilepath}'.")
                break
            for imagefile in imagefiles:
                if((str(imagefile).find("1") != -1) or (str(imagefile).find("2") != -1) or (str(imagefile).find("3") != -1)):
                    # read the image1 and segment the iris                    
                    imagefilepath = os.path.join(innerfilepath, imagefile)                    
                    image = cv2.imread(imagefilepath, cv2.IMREAD_GRAYSCALE)
                    if image is None:
                        print(f"Unable to read '{imagefile}'. Skipping.")
                        continue
                    segmented_iris, mask = segment_iris(image)
                    # Preprocess image1
                    processed = preprocess_image(segmented_iris)
                    i = 0
                    while(i <= size - 1):
                        # Extract features from image1 using MobileNetV2
                        features = extract_features(pretrained_model_array[i], processed)
                        # Store the name and features together
                        feature_name_array.append([str(imagefile)[:len(str(imagefile)) - 5], features])
                        i += 1
    #Convert it to a NumPy object array
    feature_name_array = np.array(feature_name_array, dtype=object)    
    return feature_name_array, pretrained_model_array

def find_most_frequent_element(arr):
    if not arr:
        return None, 0  # Return None if the array is empty
    counter = Counter(arr)
    most_common = counter.most_common(1)[0]  # Get the most common element and its count
    return most_common[0], most_common[1]

def authenticate_iris(feature_name_array, pretrained_model_array, imagepath):
    image = cv2.imread(imagepath, cv2.IMREAD_GRAYSCALE)
    if(image is not None):    
        segmented_iris, mask = segment_iris(image)
        processed = preprocess_image(segmented_iris)
        size = len(pretrained_model_array)
        i = 0
        maxname_array = []
        max
        while(i <= size - 1):
            features = extract_features(pretrained_model_array[i], processed)
            maxsimilarity = 0
            maxname = "NOT FOUND"
            for feature_name in feature_name_array:
                currentflag, currentsimilarity = compare_features(features, feature_name[1])
                #print(currentflag, currentsimilarity)
                if(currentflag == True):
                    if(currentsimilarity > maxsimilarity):
                        maxsimilarity = currentsimilarity
                        maxname = feature_name[0]
                        #print(maxsimilarity, maxname)
            maxname_array.append(maxname)    
            i += 1
        
        mostfrquentname, frequency = find_most_frequent_element(maxname_array)
        print(maxname_array, mostfrquentname, frequency)
        if(frequency >= size / 3):
            return mostfrquentname
        else:
            return "NOT FOUND"
    else:
        print(f"Unable to read. Exiting.")



def check_performance(feature_name_array, pretrained_model_array, directory_path):
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist.")
        return
    outerfiles = os.listdir(directory_path)
    correctcount = 0
    incorrectcount = 0
    notfoundcount = 0
    totalcount = 0
    incorrectarray = []
    notfoundarray = []
    i = 1
    for outerfile in outerfiles:
        outerfilepath = os.path.join(directory_path, outerfile)
        innerfiles = os.listdir(outerfilepath)
        for innerfile in innerfiles:
            innerfilepath = os.path.join(outerfilepath, innerfile)
            rootfiles = os.listdir(innerfilepath)
            imagefiles = [f for f in rootfiles if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff'))]
            if not imagefiles:
                print(f"No image files found in '{innerfilepath}'.")
                break
            for imagefile in imagefiles:
                # read the image1 and segment the iris                    
                imagefilepath = os.path.join(innerfilepath, imagefile) 
                currentname = authenticate_iris(feature_name_array, pretrained_model_array, imagefilepath)                   
                print("scanning(", i, "/ 450 ) ->", imagefile)      
                if(currentname == "NOT FOUND"):
                    notfoundcount += 1
                    notfoundarray.append(imagefile)
                elif(str(imagefile).find(currentname) != -1):
                    correctcount += 1
                else:
                    incorrectcount += 1
                    incorrectarray.append(imagefile)
                totalcount += 1
                i+=1
    print("Total count : ", totalcount)
    print("Correct count : ", correctcount)
    print("Incorrect count : ", incorrectcount)
    print("Not Found count : ", notfoundcount)
    #print("Incorrect images : ", incorrectarray)
    #print("Not Found images : ", notfoundarray)

# Main function
if __name__ == "__main__":
        
    #plot_segmentation(os.getcwd() + "\iris dataset\MMU-Iris-Database\\1\left\\aeval1.bmp")    
    feature_name_array, pretrained_model_array = register_irises(os.getcwd() + "\iris dataset\MMU-Iris-Database", 1)
    check_performance(feature_name_array, pretrained_model_array, os.getcwd() + "\iris dataset\MMU-Iris-Database")
    print(len(feature_name_array))
    #print(authenticate_iris(feature_name_array, pretrained_model_array, "D:\decentralized electoral system\DecentralizedElectoralSystem\iris authentication\iris dataset\MMU-Iris-Database\\2\left\\bryanl5.bmp"))
   