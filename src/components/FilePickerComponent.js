import * as DocumentPicker from "expo-document-picker";
import { Button, View } from "react-native";

const FilePickerComponent = ({ onFileSelected }) => {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "image/*", // Allow only image files
    });
    console.log("File picker result:", result); // Debug log
    if (result.type === "success") {
      onFileSelected(result); // Send the file data back to the parent
    } else {
      console.error("File selection failed");
    }
  };

  return (
    <View>
      <Button title="Select File" onPress={pickFile} />
    </View>
  );
};

export default FilePickerComponent;
