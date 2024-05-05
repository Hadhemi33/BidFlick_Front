import React, { useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { colors } from "../../../constants/colors";
import TText from "../../TText";
import styles from "./style";
import { SpecialProducts_QUERY } from "../../../Graphql/querys";
import { useQuery } from "@apollo/client";

const AuctionCard = ({ onPressMore, onPress, searchQueryy }) => {
  const { data, loading, error } = useQuery(SpecialProducts_QUERY, {
    pollInterval: 30000,
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const [activeIndex, setActiveIndex] = useState(0);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading special Products: {error.message}</Text>
      </View>
    );
  }

  const filteredSpecialProducts = data?.getAllSpecialProducts.filter(
    (specialProduct) =>
      specialProduct.title.toLowerCase().includes(searchQueryy.toLowerCase())
  );

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = 367 + 20;
    const currentIndex = Math.round(scrollX / width);
    setActiveIndex(currentIndex);
    if (currentIndex === 2) {
      return (
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText} onPress={onPressMore}>
            See More
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorsContainer}>
        {filteredSpecialProducts.slice(0, 3).map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  activeIndex === index ? colors.greyGreen : colors.white2,
              },
            ]}
          />
        ))}
      </View>
      <FlatList
        horizontal
        data={filteredSpecialProducts}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        renderItem={({ item, index }) => (
          <View key={item.id}>
            {index < 3 ? (
              <ImageBackground
                key={item.id}
                source={{ uri: item.imageUrl }}
                style={styles.cardContainer}
                imageStyle={styles.backgroundImage}
              >
                <View style={styles.Infos}>
                  <View style={styles.cardInfoContainer}>
                    <TText
                      onPress={() => onPress(item)}
                      T="25"
                      F="bold"
                      C="darkGrey"
                      style={styles.cardInfoValue}
                    >
                      {item.endingIn}
                    </TText>
                    <TText
                      onPress={() => onPress(item)}
                      T="18"
                      F="semiBold"
                      C="darkGrey"
                      style={styles.cardInfoValuePrice}
                    >
                      {item.price}$
                    </TText>
                  </View>
                </View>
              </ImageBackground>
            ) : (
              filteredSpecialProducts.length > 3 && (
                <View style={styles.cardMore}>
                  <TText
                    onPress={onPressMore}
                    T="18"
                    F="semiBold"
                    C="darkGrey"
                    style={styles.More}
                  >
                    See More
                  </TText>
                </View>
              )
            )}
          </View>
        )}
      />
    </View>
  );
};

export default AuctionCard;
