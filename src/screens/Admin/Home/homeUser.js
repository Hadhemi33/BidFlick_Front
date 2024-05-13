import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";
import { useUser } from "../../../Graphql/userContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import TText from "../../../components/TText";

const HomeUser = () => {
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
        // colors={["#C5F5ED", colors.white]}
        colors={["#F1F1F1", "#E0FBE2"]}
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
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
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
      <View style={styles.titre}>
        <FontAwesome5 name="fire" size={20} color="black" style={styles.icon} />
        <TText T="18" F="semiBold" C="black" style={styles.auctions}>
          Auctions :
        </TText>
      </View>
      <TText
        onPress={() => navigation.navigate("AuctionAdd")}
        T="18"
        F="semiBold"
        C="black"
        style={styles.auctions}
      >
        Auctions :
      </TText>
      <AuctionCard
        searchQueryy={searchQueryy}
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
      ></AuctionCard>
      <View style={styles.titre}>
        <FontAwesome6
          name="boxes-stacked"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TText T="18" F="semiBold" C="black" style={styles.auctions}>
          Products :
        </TText>
      </View>
      <ProductCard
        searchQuery={searchQuery}
        onPress={(item) =>
          navigation.navigate("ProductDetails", { item: item })
        }
      />
    </SafeAreaView>
  );
};

export default HomeUser;
