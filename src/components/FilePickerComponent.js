import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FilePickerComponent = ({ onFileSelected }) => {
  const [file, setFile] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*", // Accepts all image types
      });

      if (result.type === "success") {
        setFile(result);
        if (onFileSelected) {
          onFileSelected(result);
        }
      }
    } catch (error) {
      console.error("Error selecting file:", error);
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={pickFile} />
      {file && <Text>Selected: {file.name}</Text>}
    </View>
  );
};

export default FilePickerComponent;
