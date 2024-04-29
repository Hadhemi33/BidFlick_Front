import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import styles from "./style";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Categories_QUERY } from "../../../Graphql/querys";
import { useQuery } from "@apollo/client";
const CategoriesScreen = () => {
  const { data, loading, error } = useQuery(Categories_QUERY);

  const navigation = useNavigation(); // Accessing navigation

  // Handle add button press
  const handleAddButtonPress = () => {
    navigation.navigate("ProfileEdit");
  };

  // Component for rendering each category
  const CardCat = ({ item }) => (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{item.name}</Text>
      {/* <Text style={styles.statsCategory}>{item.value}</Text> */}

      <TouchableOpacity>
        <AntDesign
          name="delete"
          size={16}
          color="red"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );

  // Render loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render error state
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading categories: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search ..."
          ></TextInput>
        </View>
      </View>

      <View style={styles.statsCard}>
        <FlatList
          data={data.getAllCategories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={CardCat}
          numColumns={2}
        />
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesScreen;
