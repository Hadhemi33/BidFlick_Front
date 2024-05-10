import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";

import { colors } from "../../../constants/colors";

import { useUser } from "../../../Graphql/userContext";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const user = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInput = (searchQuery) => {
    setSearchQuery(searchQuery || " ");
  };

  const searchQueryy = searchQuery;
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#C5F5ED", colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.Header}
      >
        <TextInput
          style={styles.SearchInput}
          placeholder="Search ..."
          value={searchQuery}
          onChangeText={handleSearchInput}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")}>
          {user.imageUrl ? (
            <Image
              style={styles.ProfileImage}
              source={{ uri: user.imageUrl }}
            />
          ) : (
            <Image
              style={styles.ProfileImage}
              source={require("../../../../assets/people19.png")}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
      <Text
        onPress={() => {
          navigation.navigate("CategoriesScreen");
        }}
      >
        Categories
      </Text>
      <AuctionCard
        searchQueryy={searchQueryy}
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
      ></AuctionCard>

      <ProductCard
        searchQuery={searchQuery}
        onPress={(item) =>
          navigation.navigate("ProductDetails", { item: item })
        }
      />
    </SafeAreaView>
  );
};

export default Home;
