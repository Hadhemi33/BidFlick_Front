import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { View, TextInput, Button } from "react-native";
import { CREATE_PRODUCT_MUTATION } from "../../Graphql/mutations"; 
import FilePickerComponent from "../../components/FilePickerComponent";
import TText from "../../components/TText";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );

 

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
            imageUrl, 
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
      <TText T="16" F="semiBold" C="black">Create a New Product</TText>
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
     
      <Button title="Create Product" onPress={handleSubmit} />
      {loading && <TText T="16" F="semiBold" C="black">Loading...</TText>}
      {error && <TText T="16" F="semiBold" C="black">Error: {error.message}</TText>}
      {data && (
        <TText T="16" F="semiBold" C="black">
          Product Created: {data.createProduct.title}, Image URL:{" "}
          {data.createProduct.imageUrl}
        </TText>
      )}
    </View>
  );
};

export default CreateProduct;
