import * as DocumentPicker from "expo-document-picker";
import { Button, View } from "react-native";
import GradianButton from "./Buttons/GradianButton";

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
      <GradianButton
        onPress={pickFile}
        T="18"
        F="semiBold"
        I={require("../../assets/importFile.png")}
      >
        Select File
      </GradianButton>
      {/* <Button title="Select File" onPress={pickFile} /> */}
    </View>
  );
};

export default FilePickerComponent;
