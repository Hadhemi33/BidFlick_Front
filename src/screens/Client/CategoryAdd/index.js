import React, { useState } from "react";
import { SafeAreaView, View, TextInput, ActivityIndicator } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_CATEGORY_MUTATION } from "../../../Graphql/mutations";
import LightButton from "../../../components/Buttons/LightButton";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { Categories_QUERY } from "../../../Graphql/querys";
import { useUser } from "../../../Graphql/userContext";
import TText from "../../../components/TText";
import GradianButton from "../../../components/Buttons/GradianButton";
function CategoryAdd() {
  const user = useUser();

  const [name, setName] = useState("");

  const [validationError, setValidationError] = useState("");
  const navigation = useNavigation();

  const [createCategory, { loading, error, data }] = useMutation(
    CREATE_CATEGORY_MUTATION,
    {
      refetchQueries: [{ query: Categories_QUERY }],
    }
  );

  const handleSubmit = async () => {
    if (!name.trim()) {
      setValidationError("Name is required.");
      return;
    }
    const id = user.id;
    setValidationError("");

    try {
      const response = await createCategory({
        variables: {
          createCategoryInput: {
            name,
          },
          id,
        },
      });

      console.log("Category created successfully.");
      setName("");

      navigation.navigate("CategoriesScreen", {
        refetchQueries: [{ query: Categories_QUERY }],
      });
    } catch (mutationError) {
      console.error("Error creating category:", mutationError);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TText T="24" F="bold" C="black">
          Create a New Category
        </TText>
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
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        {validationError && (
          <TText T="16" F="semiBold" C="black" style={{ color: "red" }}>
            {validationError}
          </TText>
        )}

        <GradianButton
          style={styles.ButtonsPic}
          onPress={handleSubmit}
          T="18"
          F="semiBold"
          W="200"
        >
          Create
        </GradianButton>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && (
          <TText T="16" F="semiBold" C="black" style={{ color: "red" }}>
            Error: {error.message}
          </TText>
        )}
        {data && (
          <TText T="16" F="semiBold" C="black" style={{ color: "green" }}>
            Category Created: {data.createCategory.name}
          </TText>
        )}
      </View>
    </SafeAreaView>
  );
}

export default CategoryAdd;
