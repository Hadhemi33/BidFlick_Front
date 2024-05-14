import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Entypo,
  FontAwesome6,
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

import TText from "../../../components/TText";

import { useUser } from "../../../Graphql/userContext";
import GradianButton from "../../../components/Buttons/GradianButton";
function AdminMenu({
  navigation,
  onHomePress,
  onAucPress,
  onEditPress,
  onUserPress,
  onPressBack,
  onOrdPress,
  onCatPress,
  onPress,
}) {
  const user = useUser();

  const Arrow = ({ onPress }) => (
    <Feather
      onPress={onPress}
      name="arrow-right"
      size={20}
      color="grey"
      style={styles.arrow}
    />
  );
  const role = user.roles;
  const admin = role === admin ? admin : user;
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F1F1F1", "#E0FBE2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.Header}
      >
        <TouchableOpacity onPress={onPressBack} style={styles.back}>
          <Feather name="chevron-left" color="#000" size={30} />
        </TouchableOpacity>
        <View style={styles.user}>
          <ImageBackground
            // source={require("../../../../assets/fl.jpg")}
            source={{
              uri: user.imageUrl,
            }}
            style={styles.imageContainer}
            imageStyle={styles.backgroundImage}
          ></ImageBackground>
          <TText T="16" F="semiBold" C="black" style={styles.textUser}>
            {user.fullName}
          </TText>
        </View>
      </LinearGradient>

      <View style={styles.choices}>
        <View style={styles.choice}>
          <FontAwesome
            onPress={onHomePress}
            name="home"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText T="16" F="regular" C="black" onPress={onHomePress}>
            Home
          </TText>
          <Arrow onPress={onHomePress} />
        </View>
        <View style={styles.choice}>
          <MaterialIcons
            onPress={onCatPress}
            name="category"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText onPress={onCatPress} T="16" F="regular" C="black">
            Categories
          </TText>
          <Arrow onPress={onCatPress} />
        </View>
        <View style={styles.choice}>
          <FontAwesome6
            name="boxes-stacked"
            size={27}
            color="black"
            style={styles.icon}
          />
          <TText T="16" F="regular" C="black">
            Products
          </TText>
          <Arrow />
        </View>
        <View style={styles.choice}>
          <FontAwesome5
            onPress={onAucPress}
            name="fire"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText onPress={onAucPress} T="16" F="regular" C="black">
            Auctions
          </TText>
          <Arrow onPress={onAucPress} />
        </View>
        <View style={styles.choice}>
          <Entypo
            onPress={onOrdPress}
            name="archive"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText onPress={onOrdPress} T="16" F="regular" C="black">
            Orders
          </TText>
          <Arrow onPress={onOrdPress} />
        </View>
        <View style={styles.choice}>
          <Entypo
            onPress={onUserPress}
            name="users"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText onPress={onUserPress} T="16" F="regular" C="black">
            Users
          </TText>
          <Arrow onPress={onUserPress} />
        </View>
        <View style={styles.choice}>
          <Entypo
            onPress={onEditPress}
            name="v-card"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TText onPress={onEditPress} T="16" F="regular" C="black">
            Profile
          </TText>
          <Arrow onPress={onEditPress} />
        </View>
      </View>
      <GradianButton
        style={styles.ButtonsPic}
        onPress={onPress}
        T="18"
        F="semiBold"
        W="200"
        I={require("../../../..//assets/logout.png")}
      >
        Logout
      </GradianButton>
    </SafeAreaView>
  );
}

export default AdminMenu;
