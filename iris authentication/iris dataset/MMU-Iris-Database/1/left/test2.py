import cv2
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Dropout, Input, BatchNormalization
from tensorflow.keras.applications import InceptionV3
from tensorflow.keras.preprocessing.image import img_to_array
from sklearn.metrics.pairwise import cosine_similarity
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

def build_pretrained_model(input_shape=(224, 224, 3)):
    base_model = InceptionV3(weights='imagenet', include_top=False, input_shape=input_shape)

    # Add BatchNormalization layer for stability
    x = base_model.output
    x = GlobalAveragePooling2D()(x)
    x = BatchNormalization()(x)

    # Add Dense layers to fine-tune the model for iris recognition
    x = Dense(512, activation='relu')(x)
    x = Dropout(0.5)(x)  # Dropout layer for regularization
    x = Dense(256, activation='relu')(x)
    x = Dropout(0.5)(x)
    x = Dense(128, activation='relu')(x)  # Output feature vector of size 128

    model = Model(inputs=base_model.input, outputs=x)
    return model

def extract_features(model, image):
    features = model.predict(image)
    return features.flatten()

def compare_features(features_1, features_2, threshold=0.85):
    similarity = cosine_similarity([features_1], [features_2])[0][0]
    if similarity >= threshold:
        print(f"Images are the same (Similarity: {similarity:.2f})")
    else:
        print(f"Images are different (Similarity: {similarity:.2f})")
    return similarity


image1 = cv2.imread("aeval1.bmp", cv2.IMREAD_GRAYSCALE)
segmented_iris1, mask1 = segment_iris(image1)

plt.figure(figsize=(12, 6))
plt.subplot(1, 3, 1)
plt.imshow(image1, cmap='gray')
plt.title('Original Image')
plt.axis('off')

plt.subplot(1, 3, 2)
plt.imshow(segmented_iris1, cmap='gray')
plt.title('Segmented Iris')
plt.axis('off')

plt.subplot(1, 3, 3)
plt.imshow(mask1, cmap='gray')
plt.title('Mask')
plt.axis('off')

plt.show()

image2 = cv2.imread("aeval1.bmp", cv2.IMREAD_GRAYSCALE)
segmented_iris2, mask2 = segment_iris(image2)

plt.figure(figsize=(12, 6))
plt.subplot(1, 3, 1)
plt.imshow(image2, cmap='gray')
plt.title('Original Image')
plt.axis('off')

plt.subplot(1, 3, 2)
plt.imshow(segmented_iris2, cmap='gray')
plt.title('Segmented Iris')
plt.axis('off')

plt.subplot(1, 3, 3)
plt.imshow(mask2, cmap='gray')
plt.title('Mask')
plt.axis('off')

plt.show()
# Load the pretrained model
pretrained_model = build_pretrained_model(input_shape=(224, 224, 3))

# Extract features from both images
features_1 = extract_features(pretrained_model, segmented_iris1)
features_2 = extract_features(pretrained_model, segmented_iris2)

# Compare the extracted features
compare_features(features_1, features_2)