import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { useQuery, useMutation } from "@apollo/client";
import { Categories_QUERY } from "../../../Graphql/querys";
import { DELETE_CATEGORY_MUTATION } from "../../../Graphql/mutations";
import styles from "./style";

const CategoriesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error, refetch } = useQuery(Categories_QUERY, {
    pollInterval: 5000,
  });
  const [deleteCategory] = useMutation(DELETE_CATEGORY_MUTATION, {
    refetchQueries: [{ query: Categories_QUERY }],
  });

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };

  const handleAddButtonPress = () => {
    navigation.navigate("CategoryAdd");
  };

  const handleDeleteCat = async (name) => {
    Alert.alert(
      "Delete Category",
      `Are you sure you want to delete the category "${name}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteCategory({
                variables: { name },
              });
              refetch(); 
              Alert.alert("Success", `Category "${name}" deleted.`);
            } catch (error) {
              console.error("Error deleting category:", error);
              Alert.alert(
                "Error",
                `An error occurred while deleting the category "${name}". Please try again later.`
              );
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const CardCat = ({ item }) => (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{item.name}</Text>

      <Text style={styles.productCount}>
        {item.products.length} product{item.products.length > 1 ? "s" : ""}
      </Text>
      <Text style={styles.productCount}>
        {item.specialProducts.length} auction
        {item.specialProducts.length > 1 ? "s" : ""}
      </Text>
      <TouchableOpacity onPress={() => handleDeleteCat(item.name)}>
        <AntDesign name="delete" size={16} color="red" />
      </TouchableOpacity>
    </View>
  );
  const filteredCategories = data
    ? data.getAllCategories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading categories: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
            value={searchQuery}
            onChangeText={handleSearchInput}
          />
        </View>
      </View>

      <View style={styles.statsCard}>
        <FlatList
          data={filteredCategories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={CardCat}
          numColumns={2}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesScreen;
