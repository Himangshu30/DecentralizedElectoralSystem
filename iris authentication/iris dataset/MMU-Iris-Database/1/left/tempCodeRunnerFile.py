import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load the image using OpenCV
image_cv = cv2.imread("aeval1.bmp", cv2.IMREAD_GRAYSCALE)

# Apply a median blur to reduce noise
blurred = cv2.medianBlur(image_cv, 5)

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
mask = np.zeros_like(image_cv)
if circles is not None:
    circles = np.uint16(np.around(circles))
    for circle in circles[0, :]:
        center = (circle[0], circle[1])  # Circle center
        radius = circle[2]  # Circle radius
        cv2.circle(mask, center, radius, 255, -1)  # Draw filled circle on the mask

# Use thresholding to create a binary mask for the pupil
_, binary_mask = cv2.threshold(image_cv, 40, 255, cv2.THRESH_BINARY_INV)  # Tune threshold if needed

# Detect contours to isolate the pupil
contours, _ = cv2.findContours(binary_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Assume the largest external contour is the pupil
pupil_contour = max(contours, key=cv2.contourArea)

# Create a mask for the pupil
pupil_mask = np.zeros_like(image_cv)
cv2.drawContours(pupil_mask, [pupil_contour], -1, 255, thickness=cv2.FILLED)

# Create the concentric mask
mask = mask - pupil_mask

# Apply the mask to isolate the iris
segmented_iris = cv2.bitwise_and(image_cv, image_cv, mask=mask)

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

# Display the result
plt.figure(figsize=(12, 6))
plt.subplot(1, 4, 1)
plt.imshow(image_cv, cmap='gray')
plt.title('Original Image')
plt.axis('off')

