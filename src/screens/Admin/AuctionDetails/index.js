import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import styles from "./style";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";
import InputSpinner from "react-native-input-spinner";
import {
  DELETE_Auction_MUTATION_ADMIN,
  SET_BID,
} from "../../../Graphql/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "../../../Graphql/userContext";
import { colors } from "../../../constants/colors";
import { SpecialProducts_QUERY } from "../../../Graphql/querys";

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const user = useUser();
  const connectedUserId = user.id;
  const productUserId = route.params.item.user.id;

  useEffect(() => {
    if (connectedUserId === productUserId && !isOwner) {
      setIsOwner(true);
    } else if (connectedUserId !== productUserId && isOwner) {
      setIsOwner(false);
    }
    if (user.roles === "admin" && !isAdmin) {
      setIsAdmin(true);
    } else if (user.roles !== "admin" && isAdmin) {
      setIsAdmin(false);
    }
  }, [connectedUserId, productUserId, user.roles]);

  const [remainingTime, setRemainingTime] = useState(
    calculateTimeRemaining(route.params.item.endingIn)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = calculateTimeRemaining(route.params.item.endingIn);
      setRemainingTime(timeRemaining);
      if (
        timeRemaining.years <= 0 &&
        timeRemaining.months <= 0 &&
        timeRemaining.days <= 0 &&
        timeRemaining.hours <= 0 &&
        timeRemaining.minutes <= 0 &&
        timeRemaining.seconds <= 0
      ) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [deleteSpeciaProductAdmin] = useMutation(
    DELETE_Auction_MUTATION_ADMIN,
    {}
  );
  const [price, setPrice] = useState("");

  const [createSpecialProductPrice] = useMutation(SET_BID, {
    refetchQueries: [{ query: SpecialProducts_QUERY }],
  });
  const handleBid = async (id) => {
    console.log("id", id);
    try {
      const data = await createSpecialProductPrice({
        variables: {
          createSpecialProductPriceInput: {
            specialProductId: id,
            price: price.toString(),
          },
        },
      });
      Alert.alert("Success", `Bid set.`);
    } catch (error) {
      console.error("Error biding auction:", error);
      Alert.alert("Error", `An error occurred while biding auction.`);
    }
  };

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
  const ppri = parseFloat(item.price);
  const stepp = (parseFloat(item.discount) / 100) * ppri + 1;
  const { years, months, days, hours, minutes, seconds } = remainingTime;

  const timeLeft = years + months + days + hours + minutes + seconds;

  return (
    <View style={styles.container}>
      <ImageBackground
        key={item.id}
        source={{ uri: item.imageUrl }}
        style={styles.containerr}
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
                {timeLeft <= 0 ? "Expired" : "Ending in"} :
              </TText>
              {timeLeft <= 0 ? (
                <TText T="15" F="bold">
                  Expired
                </TText>
              ) : (
                <TText T="15" F="bold">
                  {years}:{months}:{days}:{hours}:{minutes}:{seconds}
                </TText>
              )}
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
              {isAdmin || isOwner ? (
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
              ) : (
                <View>
                  <TText
                    T="18"
                    F="semiBold"
                    C="green"
                    style={{ marginLeft: 5, alignSelf: "center" }}
                    onPress={() => {
                      handleBid(item.id);
                    }}
                  >
                    Set a Bid
                  </TText>
                  <InputSpinner
                    min={item.price}
                    colorMax={"#f04048"}
                    colorMin={colors.blueLight}
                    value={price}
                    step={stepp}
                    onChange={setPrice}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuctionDetails;
