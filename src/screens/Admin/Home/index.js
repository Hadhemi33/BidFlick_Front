import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "./style";
import TText from "../../../components/TText";
import GradianButton from "../../../components/Buttons/GradianButton";
import AuctionCard from "../../../components/Cards/AuctionCard";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AuctionCard></AuctionCard>
    </SafeAreaView>
  );
};

export default Home;
