import React, { useState } from "react";
import { Button, Image, View, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo, Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const FilePickerComponent = ({ onFileSelected, I, styleImage, styleCont }) => {
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
        setImage(responseData.secure_url);
        onFileSelected(responseData.secure_url);
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
      <TouchableOpacity style={styleCont} onPress={handleImagePick}>
        {I && <Image style={styleImage} source={I} />}
      </TouchableOpacity>
    </View>
  );
};

export default FilePickerComponent;
const styles = {
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 70,
    top: 10,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  cont: {
    width: 40,
    top: 70,

    height: 30,
    borderRadius: 10,
    marginLeft: 70,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
};
