import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import styles from "./style";

import { useUser } from "../../../Graphql/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AdminMenu from "./adminMenu";
import UserMenu from "./userMenu.js";
function Menu({ navigation }) {
  const user = useUser();

  useEffect(() => {
    if (user.roles === "admin") {
      setIsAdmin(true);
    }
  }, [user.roles]);
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      navigation.navigate("SignIn");
      console.log(user.roles);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const navHome = () => {
    navigation.navigate("HomeUser");
  };
  const navHomeUser = () => {
    navigation.navigate("HomeUser");
  };
  const navMessages = () => {
    navigation.navigate("ChatScreen");
  };
  const navEdit = () => {
    navigation.navigate("ProfileEdit");
  };
  const navOrders = () => {
    navigation.navigate("Orders");
  };
  const navOrdersUser = () => {
    navigation.navigate("OrdersClient");
  };
  const navAuctions = () => {
    navigation.navigate("DetailsAuctionCard");
  };
  const navProducts = () => {
    navigation.navigate("AllProductss");
  };
  const navUsers = () => {
    navigation.navigate("AllUsers");
  };
  const navWallet = () => {
    navigation.navigate("Meta");
  };

  const navCategories = () => {
    navigation.navigate("CategoriesScreen");
  };
  const back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {isAdmin ? (
        <AdminMenu
          onHomePress={navHome}
          onEditPress={navEdit}
          onAucPress={navAuctions}
          onOrdPress={navOrders}
          onUserPress={navUsers}
          onCatPress={navCategories}
          onPress={logout}
          onPressBack={back}
        />
      ) : (
        <UserMenu
          onMessage={navMessages}
          onPressBack={back}
          onPress={logout}
          onPressPro={navProducts}
          onOrdPress={navOrdersUser}
          onHomePress={navHomeUser}
          onEditPress={navEdit}
          onAucPress={navAuctions}
          onWalletPress={navWallet}
        />
      )}
    </SafeAreaView>
  );
}

export default Menu;
