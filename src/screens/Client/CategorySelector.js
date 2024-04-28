import React, { useState } from "react";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const CategorySelector = ({ categories, selectedCategories, onChange }) => {
  const handleCategoryChange = (categoryId) => {
    const updatedSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    onChange(updatedSelected);
  };

  return (
    <View>
      {categories.map((category) => (
        <View
          key={category.id}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Checkbox
            value={selectedCategories.includes(category.id)}
            onValueChange={() => handleCategoryChange(category.id)}
          />
          <Text>{category.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategorySelector;
