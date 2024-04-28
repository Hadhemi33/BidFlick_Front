import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { colors } from "../../../constants/colors";
import TText from "../../TText";
import styles from "./style";

const AuctionCard = ({ onPressMore, onPress }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "iPhone 12",
      Price: "1200",
      liked: false,

      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://media.gqmagazine.fr/photos/655c823373c3872342ffcc8e/16:9/w_2560%2Cc_limit/iPhone16-Batterie.jpg",
    },
    {
      id: 2,
      title: "iPhone 12",
      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      liked: true,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    },
    {
      id: 3,
      title: "iPhone 12",
      Price: "1200",
      liked: false,

      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://www.datocms-assets.com/101859/1707248470-montage_bottle_pinkpurple_producttile_2680x3344.png?auto=format&fit=max&w=3840",
    },
    {
      id: 4,
      title: "iPhone 12",
      liked: false,

      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    },
    {
      id: 5,
      title: "iPhone 12",
      Price: "1200",
      liked: false,

      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://www.datocms-assets.com/101859/1707248470-montage_bottle_pinkpurple_producttile_2680x3344.png?auto=format&fit=max&w=3840",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = 367 + 20; // Card width + margin
    const currentIndex = Math.round(scrollX / width);
    setActiveIndex(currentIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.indicatorsContainer}>
        {cards.slice(0, 3).map((_, index) => (
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
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {cards.map((card, index) => (
          <View key={card.id}>
            {index < 3 ? (
              <ImageBackground
                key={card.id}
                source={{ uri: card.ProductImage }}
                style={styles.cardContainer}
                imageStyle={styles.backgroundImage}
              >
                <View style={styles.Infos}>
                  <View style={styles.cardInfoContainer}>
                    <TText
                      onPress={() => onPress(card)}
                      T="25"
                      F="bold"
                      C="darkGrey"
                      style={styles.cardInfoValue}
                    >
                      {card.expiration}
                    </TText>

                    <TText
                      onPress={() => onPress(card)}
                      T="18"
                      F="semiBold"
                      C="darkGrey"
                      style={styles.cardInfoValuePrice}
                    >
                      {card.Price}$
                    </TText>
                  </View>
                </View>
              </ImageBackground>
            ) : (
              index === 3 && (
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
        ))}
      </ScrollView>
    </View>
  );
};

export default AuctionCard;
