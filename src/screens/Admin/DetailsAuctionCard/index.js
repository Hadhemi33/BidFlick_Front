import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../../constants/colors";

import styles from "./style";
import TText from "../../../components/TText";
import { useNavigation } from "@react-navigation/native";
import { SpecialProducts_QUERY } from "../../../Graphql/querys";
import { useQuery } from "@apollo/client";

const DetailsAuctionCard = ({ onPress }) => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(SpecialProducts_QUERY, {
    pollInterval: 1000,
  });
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <TText T="16" F="semiBold" C="black">
          Loading...
        </TText>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <TText T="16" F="semiBold" C="black">
          Error loading special Products: {error.message}
        </TText>
      </View>
    );
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = 367 + 20;
    const currentIndex = Math.round(scrollX / width);
    setActiveIndex(currentIndex);
  };
  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {data?.getAllSpecialProducts.map((card, index) => (
          <View key={card.id}>
            <ImageBackground
              key={card.id}
              source={{ uri: card.imageUrl }}
              style={styles.cardContainer}
              imageStyle={styles.backgroundImage}
            >
              <View style={styles.CardPrice}>
                <View style={styles.PriceContainer}>
                  <TText T="14" F="bold" style={styles.PriceText}>
                    {card.price}$
                  </TText>
                </View>
              </View>
              <View style={styles.Infos}>
                <TText
                  T="12"
                  F="bold"
                  style={styles.TitleText}
                  onPress={() =>
                    navigation.navigate("AuctionDetails", { item: card })
                  }
                >
                  {card.title}
                </TText>
                <View style={styles.DateRow}>
                  <TText T="12" F="regular" style={styles.TitleText}>
                    Auction ends in :
                  </TText>
                  <TText T="12" F="bold" style={styles.TitleText}>
                    {card.endingIn}
                  </TText>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailsAuctionCard;
