import cv2
import numpy as np
import matplotlib.pyplot as plt

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

def normalize_iris(segmented_iris, radius=64):
    """
    Normalize the segmented iris into a fixed dimension using polar transformation.
    """
    rows, cols = segmented_iris.shape
    center_x, center_y = cols // 2, rows // 2  # Assuming iris is centered
        
    # Generate a polar grid
    theta, r = np.meshgrid(
        np.linspace(0, 2 * np.pi, 256), 
        np.linspace(0, radius, radius)
    )
        
    # Map to Cartesian coordinates
    x = (center_x + r * np.cos(theta)).astype(np.float32)
    y = (center_y + r * np.sin(theta)).astype(np.float32)
        
    # Perform remapping
    normalized_iris = cv2.remap(segmented_iris, x, y, interpolation=cv2.INTER_LINEAR)
    return normalized_iris

def remove_noise(normalized_iris):
    """
    Remove noise using a Gaussian filter.
    """
    return cv2.GaussianBlur(normalized_iris, (5, 5), 0)

def extract_features(image_after_noise_removal):
    """
    Extract features using Gabor filters.
    """
    # Parameters for Gabor filter
    kernels = []
    for theta in range(4):
        theta_val = theta / 4.0 * np.pi
        kernel = cv2.getGaborKernel((21, 21), 8.0, theta_val, 10.0, 0.5, 0, ktype=cv2.CV_32F)
        kernels.append(kernel)
    
    features = []
    for kernel in kernels:
        filtered = cv2.filter2D(image_after_noise_removal, cv2.CV_8UC3, kernel)
        features.append(filtered)
    
    # Combine feature maps
    feature_vector = np.array(features).reshape(-1)
    return feature_vector

def generate_template(feature_vector):
    """
    Generate a binary template from the feature vector.
    """
    threshold = np.mean(feature_vector)  # Use mean as threshold
    template = (feature_vector > threshold).astype(np.uint8)
    return template

def generate_unique_binary_template(image):
    segmented_iris, mask = segment_iris(image)
    normalized_iris = normalize_iris(segmented_iris)
    image_after_noise_removal = remove_noise(normalized_iris)
    feature_vector = extract_features(image_after_noise_removal)
    template = generate_template(feature_vector)

    plt.figure(figsize=(12, 6))
    plt.subplot(1, 5, 1)
    plt.imshow(image, cmap='gray')
    plt.title('Original Image')
    plt.axis('off')

    plt.subplot(1, 5, 2)
    plt.imshow(segmented_iris, cmap='gray')
    plt.title('Segmented Iris')
    plt.axis('off')

    plt.subplot(1, 5, 3)
    plt.imshow(mask, cmap='gray')
    plt.title('Mask')
    plt.axis('off')

    plt.subplot(1, 5, 4)
    plt.imshow(normalized_iris, cmap='gray')
    plt.title('Normalized Iris')
    plt.axis('off')

    plt.subplot(1, 5, 5)
    plt.imshow(image_after_noise_removal, cmap='gray')
    plt.title('Image after noise removal')
    plt.axis('off')

    plt.show()
    return template

# Display the result
# Load the image using OpenCV
image1 = cv2.imread("aeval1.bmp", cv2.IMREAD_GRAYSCALE)
template1 = generate_unique_binary_template(image1)
image2 = cv2.imread("aeval2.bmp", cv2.IMREAD_GRAYSCALE)
template2 = generate_unique_binary_template(image2)
image3 = cv2.imread("aeval3.bmp", cv2.IMREAD_GRAYSCALE)
template3 = generate_unique_binary_template(image3)
image4 = cv2.imread("aeval4.bmp", cv2.IMREAD_GRAYSCALE)
template4 = generate_unique_binary_template(image4)
image5 = cv2.imread("bryanl1.bmp", cv2.IMREAD_GRAYSCALE)
template5 = generate_unique_binary_template(image5)

count1 = 0
for i in range(template1.size):
    if(template1[i] != template2[i]):
        count1 += 1
print("count1", count1)
count2 = 0
for i in range(template1.size):
    if(template1[i] != template3[i]):
        count2 += 1
print("count2", count2)
count3 = 0
for i in range(template1.size):
    if(template1[i] != template4[i]):
        count3 += 1
print("count3", count3)
count4 = 0
for i in range(template1.size):
    if(template1[i] != template5[i]):
        count4 += 1
print("count4", count4)

print(template1.size, template2.size, template3.size)


