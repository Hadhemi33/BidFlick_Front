import axios from "axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", {
    uri: file.uri,
    name: file.name,
    type: file.mimeType || "application/octet-stream", // Default MIME type
  });

  const response = await axios.post("http://localhost:3001/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status === 200) {
    return response.data.url; // Return the uploaded image URL
  }

  throw new Error("File upload failed");
};
