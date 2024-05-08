import React, { useState } from "react";
import { Button, Image, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const FilePickerComponent = ({ onFileSelected }) => {
  const [image, setImage] = useState(null);

  const uploadImageToCloudinary = async (photo) => {
    const formData = new FormData();
    formData.append("file", {
      uri: photo.uri,
      type: "image/jpeg",
      name: "image.jpg",
    });
    formData.append("upload_preset", "_BidFlick");
    formData.append("cloud_name", "dy5gov7fj");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dy5gov7fj/image/upload",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = await response.json();
      if (responseData.secure_url) {
        // Important: ensure you get the correct URL field
        setImage(responseData.secure_url); // Save URL locally
        onFileSelected(responseData.secure_url); // Pass the URL to the parent component
        Alert.alert("Success", "Image uploaded successfully!");
      } else {
        throw new Error("URL not received");
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      Alert.alert("Error", "Failed to upload image. Please try again.");
    }
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const source = { uri };

      try {
        await uploadImageToCloudinary(source);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={handleImagePick} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default FilePickerComponent;
