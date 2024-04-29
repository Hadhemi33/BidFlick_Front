import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_CATEGORY_MUTATION } from "../../../Graphql/mutations";
import LightButton from "../../../components/Buttons/LightButton";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function CategoryAdd() {
  const [name, setName] = useState("");
  const [id, setId] = useState(""); // This can be left empty if the backend generates the ID
  const [validationError, setValidationError] = useState("");
  const navigation = useNavigation(); // For navigation upon success

  const [createCategory, { loading, error, data }] = useMutation(
    CREATE_CATEGORY_MUTATION
  );

  const handleSubmit = async () => {
    if (!name.trim()) {
      setValidationError("Name is required.");
      return;
    }

    setValidationError(""); // Clear validation errors when inputs are valid

    try {
      const response = await createCategory({
        variables: {
          createCategoryInput: {
            name,
          },
          id, // Only provide this if it's required by the backend
        },
      });

      console.log("Category created successfully.");
      setName(""); // Clear the input fields after successful submission
      setId(""); // If `id` was provided, clear it too

      // Optional navigation or additional user feedback
      navigation.navigate("CategoriesScreen"); // Return to previous screen or navigate elsewhere
    } catch (mutationError) {
      console.error("Error creating category:", mutationError);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.Header}>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>
          Create a New Category
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

      {/* Form Section */}
      <View style={styles.Forms}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.InputStyle}
          placeholder="ID"
          value={id}
          onChangeText={setId}
        />

        {validationError && (
          <Text style={{ color: "red" }}>{validationError}</Text>
        )}

        <LightButton
          style={styles.ButtonsPic}
          onPress={handleSubmit}
          T="18"
          F="semiBold"
        >
          Create Category
        </LightButton>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={{ color: "red" }}>Error: {error.message}</Text>}
        {data && (
          <Text style={{ color: "green" }}>
            Category Created: {data.createCategory.name}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default CategoryAdd;
