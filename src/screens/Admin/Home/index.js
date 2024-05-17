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
import { Ionicons } from "@expo/vector-icons";
import TText from "../../../components/TText";
const Home = () => {
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
        colors={["#FFFFFF", "#FFFFFF"]}
        // colors={["#F1F1F1", "#E0FBE2"]}
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
            <TouchableOpacity>
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

      <AuctionCard
        searchQueryy={searchQueryy}
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
      ></AuctionCard>

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
