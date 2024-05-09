import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { gql, useQuery } from "@apollo/client";
import { Categories_QUERY } from "../../Graphql/querys";
import styles from "./ProductAdd/style";
import { getDefaultValues } from "@apollo/client/utilities";

// const Categories_QUERY = gql`
//   query GetAllCategories {
//     getAllCategories {
//       id
//       name
//     }
//   }
// `;

const CategorySelector = ({ selectedCategories, onChange }) => {
  const { data, loading, error } = useQuery(Categories_QUERY);

  const handleCategoryChange = (categoryId) => {
    const newSelectedCategory =
      selectedCategories === categoryId ? null : categoryId;
    onChange(newSelectedCategory);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading categories: {error.message}</Text>;
  }

  if (!data || !data.getAllCategories) {
    return <Text>No categories found</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.ScrollView}>
      {data.getAllCategories.map((category) => (
        <View
          key={category.id}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Checkbox
          
            style={styles.checkbox}
            value={selectedCategories === category.id}
            onValueChange={() => handleCategoryChange(category.id)}
          />
          <Text>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategorySelector;
