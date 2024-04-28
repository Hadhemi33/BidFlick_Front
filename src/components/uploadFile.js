import axios from "axios";

export const uploadFile = async (file) => {
  const cleanUri = (uri) =>
    uri.startsWith("file://") ? uri.replace("file://", "") : uri; // Remove 'file://' if present

  const formData = new FormData();
  formData.append("file", {
    uri: cleanUri(file.uri),
    name: file.name,
    type: file.mimeType || "application/octet-stream",
  });

  try {
    const response = await axios.post(
      "http://localhost:3001/uploaded-files", // Change to your actual endpoint
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      return response.data.url; // Return the uploaded file's URL
    } else {
      throw new Error(`Upload failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("File upload failed:", error);
    throw error; // Rethrow to handle in the calling function
  }
};
