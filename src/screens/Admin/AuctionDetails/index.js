import React from "react";
import {
  View,

  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import styles from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import { DELETE_Auction_MUTATION_ADMIN } from "../../../Graphql/mutations";
import { useMutation } from "@apollo/client";
const AuctionDetails = ({ route }) => {
  const [deleteSpeciaProductAdmin] = useMutation(
    DELETE_Auction_MUTATION_ADMIN,
    {}
  );
  const handleDeleteAuction = async (id) => {
    console.log("id", id);
    try {
      const data = await deleteSpeciaProductAdmin({
        variables: {
          id,
        },
      });
      Alert.alert("Success", `Auction Deleted.`);
    } catch (error) {
      console.error("Error deleting auction:", error);
      Alert.alert("Error", `An error occurred while deleting auction.`);
    }
  };
  const { item } = route.params; 
  const navigation = useNavigation(); 
  return (
   

    <ImageBackground
      key={item.id}
      source={{ uri: item.imageUrl }}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.header}>
        <View style={styles.Likess}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
          <TText T="17" F="regular" style={styles.LikesText}>
            {item.user.fullName}
          </TText>
        </View>
        <View style={styles.Likes}>
          <TText T="17" F="regular" style={styles.LikesText}>
            {item.nbrLike}
          </TText>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <Image
              style={styles.LikesImage}
              source={require("../../../../assets/heart_8812101.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cont3}>
        <View style={styles.Infos}>
          <View style={styles.InfosTime}>
            <TText T="13" F="semiBold">
              Ending in :
            </TText>
            <TText T="15" F="bold">
              {item.endingIn}
            </TText>
          </View>
          <View style={styles.InfosTime}>
            <TText T="13" F="semiBold">
              Highest Price :
            </TText>
            <TText T="15" F="bold">
              {item.price}$
            </TText>
          </View>
        </View>
        <View style={styles.BtnDelete}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <TText
              T="18"
              F="semiBold"
              C="green"
              onPress={() => {
                handleDeleteAuction(item.id);
              }}
            >
              Delete
            </TText>
          </TouchableOpacity>
         
        </View>
      </View>
    </ImageBackground>
   
  );
};

export default AuctionDetails;
