import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";
import Input from "../../../components/Input";
import { colors } from "../../../constants/colors";

const Home = ({ navigation }) => {
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
        ></TextInput>
      </LinearGradient>
      <AuctionCard
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
        onPressMore={() => {
          navigation.navigate("DetailsAuctionCard");
        }}
      ></AuctionCard>
      <ProductCard
        onPress={(item) =>
          navigation.navigate("ProductDetails", { item: item })
        }
      />
    </SafeAreaView>
  );
};

export default Home;
