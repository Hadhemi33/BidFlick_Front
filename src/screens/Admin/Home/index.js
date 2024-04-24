import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AuctionCard></AuctionCard>
      <ProductCard />
    </SafeAreaView>
  );
};

export default Home;
