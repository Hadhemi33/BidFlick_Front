import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "./style";

import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StreamChat } from "stream-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../../../Graphql/userContext";
const StreamClient = StreamChat.getInstance("caa856zdxjv8");

const ProductDetails = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const user = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
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
  const startChannelWithSeller = async () => {
    console.log("start");
    try {
      const storedToken = await AsyncStorage.getItem("accessToken");

      await StreamClient.connectUser(
        {
          id: user.id.toString(),
          name: user.fullName,
          image: user.imageUrl,
        },
        StreamClient.devToken(user.id.toString())
      );

      const channel = StreamClient.channel("messaging", {
        members: [item.user.id.toString(), user.id.toString()],
      });
      await channel.watch();

      navigation.navigate("ChatScreen", { channelId: channel.id });
    } catch (e) {
      console.error(e);
    }
  };
  console.log("here");
  return (
    <SafeAreaView style={styles.conttainer}>
      <View style={styles.header}>
        <View style={styles.Likess}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.InfosSeller}>
          {/* <Image
            source={require("../../../../assets/people19.png")}
            style={styles.SellerImg}
          /> */}
          <AntDesign
            name="message1"
            size={27}
            color="black"
            style={styles.icon}
            onPress={startChannelWithSeller}
          />
          <TouchableOpacity>
            <TText
              T="18"
              F="regular"
              style={styles.LikesText}
              onPress={startChannelWithSeller}
            >
              {item.user.fullName}
            </TText>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.Likes}>
          <TText T="17" F="regular" style={styles.LikesText}>
            {item.nbrLike}
          </TText>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <Image
              style={styles.LikesImage}
              source={require("../../../../assets/heart_8812101.png")}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.iimg} />
      </View>

      <View style={styles.cont3}>
        <View style={styles.Infos}>
          <View style={styles.InfosTime}>
            <TText T="20" F="semiBold">
              {item.title}
            </TText>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientName}
            ></LinearGradient>
          </View>
          <View style={styles.InfosTime}>
            {/* <View style={styles.InfosSeller}>
              <Image
                source={require("../../../../assets/people19.png")}
                style={styles.SellerImg}
              />

              <TouchableOpacity>
                <TText
                  T="18"
                  F="regular"
                  style={styles.LikesText}
                  onPress={startChannelWithSeller}
                >
                  {item.user.fullName}
                </TText>
              </TouchableOpacity>
            </View> */}
            <TText T="20" F="regular">
              {item.price}$
            </TText>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientSeller}
            ></LinearGradient>
          </View>
        </View>
        <LinearGradient
          colors={["#C3FCF1", "#2EBC7C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        ></LinearGradient>
        <TText T="20" F="semiBold">
          Description
        </TText>
        <TText T="14" F="regular" style={styles.LikesText}>
          {item.description}
        </TText>
        <View style={styles.BtnDelete}>
          <TouchableOpacity>
            {isAdmin || isOwner ? (
              <TText
                T="18"
                F="semiBold"
                C="green"
                onPress={() => navigation.navigate("CategoriesScreen")}
              >
                Delete
              </TText>
            ) : (
              <TText
                T="18"
                F="semiBold"
                C="green"
                onPress={() => navigation.navigate("Orders")}
              >
                Add to cart
              </TText>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
