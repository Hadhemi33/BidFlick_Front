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
import { FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useQuery } from "@apollo/client";
import { Categories_QUERY } from "../../../Graphql/querys";

const HomeUser = () => {
  const navigation = useNavigation();
  const user = useUser();
  const { dataCa, loadingCa, errorCat, refetchCat } = useQuery(
    Categories_QUERY,
    {
      pollInterval: 5000,
    }
  );
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInput = (searchQuery) => {
    setSearchQuery(searchQuery || " ");
  };

  const searchQueryy = searchQuery;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF"]}
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
        <View style={styles.iconImages}>
          <View style={styles.notif}>
            <TouchableOpacity onPress={() => navigation.navigate("Meta")}>
              <Ionicons
                style={styles.notifIcon}
                name="notifications-outline"
                size={30}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.circle}>
              {/* <TText T="14" F="bold" C="white" style={styles.statValue}>
                1
              </TText> */}
            </View>
          </View>
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
        </View>
      </LinearGradient>

      <View style={styles.titre}>
        <FontAwesome5 name="fire" size={20} color="black" style={styles.icon} />
        <TText T="18" F="semiBold" C="black" style={styles.auctions}>
          Auctions :
        </TText>
      </View>
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
