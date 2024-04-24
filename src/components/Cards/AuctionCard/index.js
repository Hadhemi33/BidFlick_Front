import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { colors } from "../../../constants/colors";

const AuctionCard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "iPhone 12",
      Price: "1200",
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
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    },
    {
      id: 3,
      title: "iPhone 12",
      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      discount: 10,
      SellerName: "John Doe",
      expiration: "12:05:33",
      ProductImage:
        "https://www.datocms-assets.com/101859/1707248470-montage_bottle_pinkpurple_producttile_2680x3344.png?auto=format&fit=max&w=3840",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card) => (
          <ImageBackground
            key={card.id}
            source={{ uri: card.ProductImage }}
            style={styles.cardContainer}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.Infos}>
              {/* <View style={styles.SellerInfos}>
                <Image
                  source={require("../../../../assets/people19.png")}
                  style={styles.SellerImage}
                />
                <Text style={styles.SellerName}>{card.SellerName}</Text>
              </View> */}
              <View style={styles.cardInfoContainer}>
                {/* <Text style={styles.cardInfoLabel}>Special offer</Text> */}
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
                <Text style={styles.cardInfoValuePrice}>{card.Price}$</Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  SellerInfos: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  Infos: {
    flexDirection: "column",
    // width: "30%",
    // height: "100%",
    // alignSelf: "center",

    marginTop: 30,
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Adding a semi-transparent background for text readability
  },
  cardInfoContainer: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    // flexDirection: "row",
    marginHorizontal: 10,
    width: 365,
    height: 176,
    padding: 10,
    borderRadius: 10,
    // justifyContent: "space-between",
    borderWidth: 2,
    borderColor: colors.blueBorder,
  },
  backgroundImage: {
    opacity: 0.6,
    alignSelf: "center",
    width: 362,
    height: 173,
    borderRadius: 10,
  },
  SellerName: {
    fontSize: 14,
  },
  SellerImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  cardInfoValue: {
    fontWeight: "400",
    fontSize: 40,
    color: colors.black,
  },
  cardInfoLabel: {
    marginTop: 5,

    fontWeight: "600",
    marginBottom: 20,
    fontSize: 30,
    color: colors.black,
  },
  cardInfoValuePrice: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-end",
    color: colors.black,
    marginTop: 20,
  },
});

export default AuctionCard;
