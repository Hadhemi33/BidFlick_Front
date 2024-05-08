import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_MUTATION } from "../../../Graphql/mutations";

import GradianButton from "../../../components/Buttons/GradianButton";
import LightButton from "../../../components/Buttons/LightButton";
import styles from "./style";
import CategorySelector from "../CategorySelector";
import FilePickerComponent from "../../../components/FilePickerComponent";
import { Alert } from "react-native";
function ProductAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );
  const handleFileSelected = (url) => {
    setImageUrl(url);
    console.log("Image URL received:", url);
  };
  const handleSubmit = async () => {
    if (!imageUrl) {
      Alert.alert("Warning", "Please upload an image first.");
      return;
    }
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            title,
            description,
            price,
            categoryId: selectedCategories,
            imageUrl,
          },
        },
      });
      console.log("Product created successfully", result);
    } catch (mutationError) {
      console.error("Error creating product:", mutationError);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>
          Create a New Product
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
            width: "30%",
          }}
        />
      </View>
      <View style={styles.Forms}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <CategorySelector
          selectedCategories={selectedCategories}
          onChange={setSelectedCategories}
        />
        <FilePickerComponent onFileSelected={handleFileSelected} />
        <LightButton
          style={styles.ButtonsPic}
          onPress={handleSubmit}
          T="18"
          F="semiBold"
        >
          Create Product
        </LightButton>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && <Text>Product Created: {data.createProduct.title}</Text>}
      </View>
    </SafeAreaView>
  );
}

export default ProductAdd;
