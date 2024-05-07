import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";

import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

const FileUploadComponent = () => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Represents all files
      });

      console.log(DocumentPicker.types);
      console.log("rtttt", result);

      const formData = new FormData();
      formData.append(
        "operations",
        JSON.stringify({
          query:
            "mutation UploadFile($file: Upload!) { uploadFile(file: $file) }",
          variables: { file: null },
        })
      );
      formData.append("map", JSON.stringify({ 1: ["variables.file"] }));
      formData.append("1", {
        uri: result.uri,
        type: result.type,
        name: result.name,
      });

      const response = await fetch("http://localhost:3001/graphql", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();
      setUploadedFile(json.data.uploadFile);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <View>
      <Button title="Upload File" onPress={handleUpload} />
      {uploadedFile && <Text>File uploaded: {uploadedFile}</Text>}
    </View>
  );
};

export default FileUploadComponent;
