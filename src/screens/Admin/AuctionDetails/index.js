import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";

import { DELETE_Auction_MUTATION_ADMIN } from "../../../Graphql/mutations";
import { useMutation } from "@apollo/client";
const calculateTimeRemaining = (endDate) => {
  const endDateObj = new Date(endDate);
  const currentDateObj = new Date();

  const timeDifference = endDateObj - currentDateObj;

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const remainingTimeWithoutYears =
    timeDifference % (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(
    remainingTimeWithoutYears / (1000 * 60 * 60 * 24 * 30)
  );
  const remainingTimeWithoutMonths =
    remainingTimeWithoutYears % (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(remainingTimeWithoutMonths / (1000 * 60 * 60 * 24));
  const remainingTimeWithoutDays =
    remainingTimeWithoutMonths % (1000 * 60 * 60 * 24);

  const hours = Math.floor(remainingTimeWithoutDays / (1000 * 60 * 60));
  const remainingTimeWithoutHours = remainingTimeWithoutDays % (1000 * 60 * 60);

  const minutes = Math.floor(remainingTimeWithoutHours / (1000 * 60));
  const remainingTimeWithoutMinutes = remainingTimeWithoutHours % (1000 * 60);

  const seconds = Math.floor(remainingTimeWithoutMinutes / 1000);

  return { years, months, days, hours, minutes, seconds };
};
const AuctionDetails = ({ route }) => {
  const [remainingTime, setRemainingTime] = useState(
    calculateTimeRemaining(route.params.item.endingIn)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining(route.params.item.endingIn));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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

  // const da = item.createdAt.split("T")[0];
  // const time = item.createdAt.split("T")[1].split(".")[0];

  const { years, months, days, hours, minutes, seconds } =
    calculateTimeRemaining(item.endingIn);

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
              {years}:{months}:{days}:{hours}:{minutes}:{seconds}
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
