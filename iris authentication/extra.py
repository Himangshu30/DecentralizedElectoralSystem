
# Compare features using Cosine Similarity
def match_features(features_1, features_2):
    return cosine_similarity([features_1], [features_2])[0][0]


def train_for_similar_irises(directory_path):
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist.")
        return
    minsimilarity = 101.00
    count = 0.00
    totalsimilarity = 0.00
    # Load the pretrained MobileNetV2 model (smaller model)
    pretrained_model = build_pretrained_model(input_shape=(224, 224, 3))
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
            for imagefile1 in imagefiles:
                # read the image1 and segment the iris                    
                imagefilepath1 = os.path.join(innerfilepath, imagefile1)                    
                image1 = cv2.imread(imagefilepath1, cv2.IMREAD_GRAYSCALE)
                if image1 is None:
                    print(f"Unable to read '{imagefile1}'. Skipping.")
                    continue
                segmented_iris1, mask1 = segment_iris(image1)
                # Preprocess image1
                processed_1 = preprocess_image(segmented_iris1)
                # Extract features from image1 using MobileNetV2
                features_1 = extract_features(pretrained_model, processed_1)
                for imagefile2 in imagefiles:
                    if(imagefile1 == imagefile2):
                        continue
                    # read the image2 and segment the iris
                    imagefilepath2 = os.path.join(innerfilepath, imagefile2)
                    image2 = cv2.imread(imagefilepath2, cv2.IMREAD_GRAYSCALE)
                    if image2 is None:
                        print(f"Unable to read '{imagefile2}'. Skipping.")
                        continue
                    segmented_iris2, mask2 = segment_iris(image2)
                    # Preprocess image2
                    processed_2 = preprocess_image(segmented_iris2)
                    # Extract features from image2 using MobileNetV2
                    features_2 = extract_features(pretrained_model, processed_2)
                    # Compare the features of both images
                    currentsimilarity = match_features(features_1, features_2)
                    if(currentsimilarity < minsimilarity):
                        minsimilarity = currentsimilarity
                    totalsimilarity = totalsimilarity + currentsimilarity
                    count = count + 1
                    print(count , "/ 1800.0")
    averagesimilarity = totalsimilarity/count
    return count, minsimilarity, averagesimilarity


def train_for_different_irises(directory_path):
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist.")
        return
    maxsimilarity = 0.00
    count = 0.00
    totalsimilarity = 0.00
    # Load the pretrained MobileNetV2 model (smaller model)
    pretrained_model = build_pretrained_model(input_shape=(224, 224, 3))
    outerfiles1 = os.listdir(directory_path)
    for outerfile1 in outerfiles1:
        outerfilepath1 = os.path.join(directory_path, outerfile1)
        innerfiles1 = os.listdir(outerfilepath1)
        for innerfile1 in innerfiles1:
            innerfilepath1 = os.path.join(outerfilepath1, innerfile1)
            rootfiles1 = os.listdir(innerfilepath1)
            imagefiles1 = [f for f in rootfiles1 if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff'))]
            if not imagefiles1:
                print(f"No image files found in '{innerfilepath1}'.")
                break
            for imagefile1 in imagefiles1:
                # read the image1 and segment the iris                    
                imagefilepath1 = os.path.join(innerfilepath1, imagefile1)                    
                image1 = cv2.imread(imagefilepath1, cv2.IMREAD_GRAYSCALE)
                if image1 is None:
                    print(f"Unable to read '{imagefile1}'. Skipping.")
                    continue
                segmented_iris1, mask1 = segment_iris(image1)
                # Preprocess image1
                processed_1 = preprocess_image(segmented_iris1)
                # Extract features from image1 using MobileNetV2
                features_1 = extract_features(pretrained_model, processed_1)
                outerfiles2 = os.listdir(directory_path)
                for outerfile2 in outerfiles2:
                    outerfilepath2 = os.path.join(directory_path, outerfile2)
                    innerfiles2 = os.listdir(outerfilepath2)
                    for innerfile2 in innerfiles2:
                        innerfilepath2 = os.path.join(outerfilepath2, innerfile2)
                        if(innerfilepath1 == innerfilepath2):
                            continue
                        rootfiles2 = os.listdir(innerfilepath2)
                        imagefiles2 = [f for f in rootfiles2 if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff'))]
                        if not imagefiles2:
                            print(f"No image files found in '{innerfilepath2}'.")
                            break
                        for imagefile2 in imagefiles2:
                            # read the image2 and segment the iris                    
                            imagefilepath2 = os.path.join(innerfilepath2, imagefile2)                    
                            image2 = cv2.imread(imagefilepath2, cv2.IMREAD_GRAYSCALE)
                            if image2 is None:
                                print(f"Unable to read '{imagefile2}'. Skipping.")
                                continue
                            segmented_iris2, mask2 = segment_iris(image2)
                            # Preprocess image2
                            processed_2 = preprocess_image(segmented_iris2)
                            # Extract features from image2 using MobileNetV2
                            features_2 = extract_features(pretrained_model, processed_2)
                            # Compare the features of both images
                            currentsimilarity = match_features(features_1, features_2)
                            if(currentsimilarity > maxsimilarity):
                                maxsimilarity = currentsimilarity
                            totalsimilarity = totalsimilarity + currentsimilarity
                            count = count + 1
                            print(count , "/ 40050.0") #200250.0
                            break
    averagesimilarity = totalsimilarity/count
    return count, maxsimilarity, averagesimilarity
