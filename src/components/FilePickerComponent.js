import React, { useState } from "react";
import { Button, Image, View, Alert, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import uploadImage from "./uploadImage";
import * as FileSystem from "expo-file-system";
// Import the upload function
const uploadBlobToServer = async (blob) => {
  const formData = new FormData();
  formData.append("file", blob, "image.jpg"); // You can change the filename or use the actual filename

  const response = await fetch("YOUR_SERVER_ENDPOINT", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  return response.json(); // or response.text() based on server response
};


const FilePickerComponent = () => {
  const [image, setImage] = useState(null);
  
  const [uploading, setUploading] = useState(false);

 

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);

      console.log("Image selected:", imageUri);

      try {
        const response = await uploadImage(imageUri); // Call the upload function
        console.log("Image upload response:", response);
        Alert.alert("Success", "Image uploaded successfully!");
      } catch (error) {
        console.error("Image upload failed:", error);
        Alert.alert("Error", "Failed to upload image. Please try again.");
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
