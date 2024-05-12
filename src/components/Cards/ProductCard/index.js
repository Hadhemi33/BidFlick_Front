import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./style";
import TText from "../../TText";
import { CREATE_CATEGORY_MUTATION } from "../../../Graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import {
  Categories_QUERY,
  Products_QUERY,
  SpecialProducts_QUERY,
} from "../../../Graphql/querys";
const ProductCard = ({ navigation, onPress, searchQuery }) => {
  const {
    data = { getAllProducts: [] },
    loading,
    error,
    refetch,
  } = useQuery(Products_QUERY, {
    pollInterval: 5000,
  });
  const search = searchQuery.toLowerCase();
  const [products, setProducts] = useState(data?.getAllProducts || []);
  const filteredProducts = data
    ? data.getAllProducts.filter(
        (product) =>
          product.title && product.title.toLowerCase().includes(search)
      )
    : [];
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <TText T="16" F="semiBold" C="black">Loading...</TText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <TText T="16" F="semiBold" C="black">Error loading special Products: {error.message}</TText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ImageBackground
            key={item.id}
            source={{ uri: item.imageUrl }}
            style={styles.cardContainer}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.Likes}>
              <TText T="16" F="regular" C="black" style={styles.LikesText}>{item.nbrLike}</TText>
              <TouchableOpacity onPress={() => toggleLike(item.id)}>
                <Image
                  style={styles.LikesImage}
                  source={
                    item.liked
                      ? require("../../../../assets/heart_8812101.png")
                      : require("../../../../assets/heart.png")
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.Infos}>
              <TText
                T="12"
                F="bold"
                style={styles.TitleText}
                onPress={() => onPress(item)}
              >
                {item.title}
              </TText>
              <TText T="12" F="regular" style={styles.TitleText}>
                {item.price}$
              </TText>
            </View>
          </ImageBackground>
        )}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default ProductCard;
