import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { gql, useQuery } from "@apollo/client";
import { Categories_QUERY } from "../../Graphql/querys";
import styles from "./ProductAdd/style";
import { getDefaultValues } from "@apollo/client/utilities";

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
    return (
      <TText T="16" F="semiBold" C="black">
        Error loading categories: {error.message}
      </TText>
    );
  }

  if (!data || !data.getAllCategories) {
    return (
      <TText T="16" F="semiBold" C="black">
        No categories found
      </TText>
    );
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
          <TText T="16" F="regular" C="black">
            {category.name}
          </TText>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategorySelector;
