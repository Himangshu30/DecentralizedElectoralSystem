
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

def extract_features(normalized_iris):
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
        filtered = cv2.filter2D(normalized_iris, cv2.CV_8UC3, kernel)
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

# Process the segmented iris
normalized_iris = normalize_iris(segmented_iris)
denoised_iris = remove_noise(normalized_iris)
feature_vector = extract_features(denoised_iris)
template = generate_template(feature_vector)

# Visualize the results
plt.figure(figsize=(12, 6))
plt.subplot(1, 3, 1)
plt.imshow(normalized_iris, cmap='gray')
plt.title('Normalized Iris')
plt.axis('off')

plt.subplot(1, 3, 2)
plt.imshow(denoised_iris, cmap='gray')
plt.title('Denoised Iris')
plt.axis('off')

plt.subplot(1, 3, 3)
plt.plot(template)
plt.title('Generated Template')
plt.xlabel('Feature Index')
plt.ylabel('Binary Value')
plt.grid()
plt.show()