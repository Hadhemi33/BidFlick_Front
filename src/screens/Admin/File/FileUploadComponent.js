import * as DocumentPicker from "expo-document-picker";
import { gql, useMutation } from "@apollo/client";
import { Button } from "react-native";

const UPLOAD_IMAGE = gql`
  mutation UploadImage($image: Upload!, $createFileInDirectory: Boolean!) {
    uploadImage(image: $image, createFileInDirectory: $createFileInDirectory)
  }
`;

const FileUploadComponent = () => {
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "image/*", // Adjust based on your use case
    });

    if (result.type === "success") {
      const file = {
        uri: result.uri,
        name: result.name,
        type: "image/jpeg", // Adjust based on your use case
      };

      await uploadImage({
        variables: {
          image: file,
          createFileInDirectory: true,
        },
      });
    }
  };

  return <Button title="Upload File" onPress={handleFileUpload} />;
};

export default FileUploadComponent;
