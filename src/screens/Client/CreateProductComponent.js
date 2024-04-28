import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_MUTATION } from "../../Graphql/mutations";
import CategorySelector from "./CategorySelector"; // The category selector component
import { uploadFile } from "../../components/uploadFile";
import FilePickerComponent from "../../components/FilePickerComponent";

// Predefined categories for demonstration
const predefinedCategories = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Clothing" },
  { id: "3", name: "Books" },
];

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]); // Selected categories
  const [imageUrl, setImageUrl] = useState(null); // Store image URL after upload

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );

  const handleFileSelected = async (file) => {
    try {
      const uploadedImageUrl = await uploadFile(file); // Upload the image
      setImageUrl(uploadedImageUrl);
      console.log("File selected:", file); // Log file information
    } catch (uploadError) {
      console.error("Error uploading image:", uploadError);
    }
  };

  const handleSubmit = () => {
    createProduct({
      variables: {
        createProductInput: {
          title,
          description,
          price: parseFloat(price).toFixed(2),
          categories, // Include selected category IDs
          imageUrl, // Image URL after upload
        },
      },
    });
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
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />

      {/* File picker for image selection */}
      <FilePickerComponent onFileSelected={handleFileSelected} />

      {/* Category selector */}
      <CategorySelector
        categories={predefinedCategories}
        selectedCategories={categories}
        onChange={setCategories}
      />

      <Button title="Create Product" onPress={handleSubmit} />

      {loading && <Text>Creating product...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && (
        <Text>
          Product Created: {data.createProduct.title} (Created At:{" "}
          {data.createProduct.createdAt})
        </Text>
      )}
    </View>
  );
};

export default CreateProduct;
