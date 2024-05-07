// import axios from "axios";

// const uploadImage = async (imageUri) => {
//   const formData = new FormData();
//   const fileName = imageUri.split("/").pop();
//   console.log(imageUri);
//   formData.append("file", {
//     uri: imageUri,
//     name: fileName,
//     type: "image/jpeg",
//   });
//   console.log('uri',uri)

//   try {
//     const response = await axios.post(
//       "http://192.168.137.1:3001/graphql",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Image upload failed:", error);
//   }
// };
// export default uploadImage;
////this
import axios from "axios";


const uploadImage = async (imageUri) => {
  console.log("Image URI:", imageUri);

  const formData = new FormData();

  // Sample GraphQL query for uploading an image
  const operations = JSON.stringify({
    query: `
      mutation ($file: Upload!) {
        uploadFile(file: $file) {
          success
        }
      }
    `,
    variables: {
      file: null,
    },
  });
  console.log("FormData conteeent:", formData);

  const map = JSON.stringify({
    0: ["variables.file"], // Ensure this key matches the form data's file part
  });

  formData.append("operations", operations); // Adding 'operations' first
  formData.append("map", map); // Adding 'map' second

  const fileObject = {
    uri: imageUri, // Ensure this is a valid URI
    name: "uploaded-image.jpg", // Check if this name is valid
    type: "image/jpeg", // Correct MIME type
  };
  formData.append("0", fileObject);

  console.log("File object being added to FormData:", fileObject);
  const response = await axios.post(
    "http://192.168.137.1:3001/graphql",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export default uploadImage;
