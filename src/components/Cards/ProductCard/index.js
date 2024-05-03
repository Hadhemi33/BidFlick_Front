import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import styles from "./style";
import TText from "../../TText";
import { CREATE_CATEGORY_MUTATION } from "../../../Graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { Categories_QUERY, Products_QUERY } from "../../../Graphql/querys";
const ProductCard = ({ navigation, onPress }) => {
  const { data, loading, error, refetch } = useQuery(Products_QUERY, {
    pollInterval: 5000,
  });
  const [products, setProducts] = useState(data?.getAllProducts || []);
  const toggleLike = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
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
              <Text style={styles.LikesText}>{item.nbrLike}</Text>
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
