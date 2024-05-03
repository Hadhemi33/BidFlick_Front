import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { View, Text, TextInput, Button } from "react-native";
import { CREATE_PRODUCT_MUTATION } from "../../Graphql/mutations"; // Your mutation query
import FilePickerComponent from "../../components/FilePickerComponent";
import { uploadFile } from "../../components/uploadFile";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );

  const handleFileSelected = async (file) => {
    try {
      const uploadedImageUrl = await uploadFile(file); // Get the uploaded image URL
      setImageUrl(uploadedImageUrl); // Set the URL for use in creating the product
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async () => {
    if (!imageUrl) {
      console.warn("Please upload an image first.");
      return;
    }

    try {
      await createProduct({
        variables: {
          createProductInput: {
            title,
            description,
            price,
            categories,
            imageUrl, // Ensure the image URL is valid
          },
        },
      });
      console.log("Product created successfully.");
    } catch (mutationError) {
      console.error("Error creating product:", mutationError);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Create a New Product</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <FilePickerComponent onFileSelected={handleFileSelected} />
      {/* File picker to select an image */}
      <Button title="Create Product" onPress={handleSubmit} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && (
        <Text>
          Product Created: {data.createProduct.title}, Image URL:{" "}
          {data.createProduct.imageUrl}
        </Text>
      )}
    </View>
  );
};

export default CreateProduct;