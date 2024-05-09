import React, { useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";

import { colors } from "../../../constants/colors";

import { useUser } from "../../../Graphql/userContext";


const Home = ({ navigation }) => {

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
      </LinearGradient>
      <AuctionCard
        searchQueryy={searchQueryy}
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
      
      ></AuctionCard>
    
      <Text>{user.roles}</Text>

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
