// import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { createContext, useContext, useState, useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/common/Splash";
import SignIn from "./src/screens/common/SignIn";
import SignUp from "./src/screens/common/SignUp";
import { ApolloProvider, from } from "@apollo/client";
import client from "./src/Graphql/apollo";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { fontMap } from "./src/constants/fonts";
import Home from "./src/screens/Admin/Home";
import DetailsAuctionCard from "./src/screens/Admin/DetailsAuctionCard";
import AuctionDetails from "./src/screens/Admin/AuctionDetails";
import ProductDetails from "./src/screens/Admin/ProductDetails";
import CategoriesScreen from "./src/screens/Admin/Categories";
import ProfileEdit from "./src/screens/Admin/ProfileEdit";
import ProductAdd from "./src/screens/Client/ProductAdd";
import CategoryAdd from "./src/screens/Client/CategoryAdd";
import AllUsers from "./src/screens/Admin/AllUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserProvider from "./src/Graphql/userProvider";
import Orders from "./src/screens/Admin/Orders";
import Menu from "./src/screens/Client/Menu";
import { StripeProvider } from "@stripe/stripe-react-native";
import HomeUser from "./src/screens/Admin/Home/homeUser";
import AuctionAdd from "./src/screens/Client/AuctionAdd";
import PaymentScreen from "./src/screens/Client/Payment";
import OrdersClient from "./src/screens/Admin/OrdersClient";
import OrderDetails from "./src/screens/Admin/OrderDetails";

import Notifications from "./src/screens/Admin/Notifications";
import codeMail from "./src/screens/common/resetPassword/codeMail";
import CodeMail from "./src/screens/common/resetPassword/codeMail";
import resetPassword from "./src/screens/common/resetPassword/resetPassword";
import ResetPassword from "./src/screens/common/resetPassword/resetPassword";
import Meta from "./src/ProtectedRoute";
import { StreamChat } from "stream-chat";
import { OverlayProvider } from "stream-chat-expo";
import ChatScreen from "./src/screens/Client/Chat/chatScreen";
import NewChannel from "./src/screens/Client/Chat/newChannel";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const serverClient = new StreamChat("b68fsmsejna4");

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };

    checkToken();
  }, []);

  const [fontsLoaded] = useFonts(fontMap);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <UserProvider>
            <OverlayProvider>
              <StripeProvider publishableKey="pk_test_51NvT6pJbmdmPG9jvysqtceUPBezUOLCsxKMJCziF9x1qp8cyYc2w2rxetrizKS07YwxJwyNug8p67v5UQNh8XHq300fbwcZLXR">
                <NavigationContainer theme={theme}>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Splash"
                      component={Splash}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="CodeMail"
                      component={CodeMail}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="Meta"
                      component={Meta}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="PaymentScreen"
                      component={PaymentScreen}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="AuctionAdd"
                      component={AuctionAdd}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="ChatScreen"
                      component={ChatScreen}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="NewChannel"
                      component={NewChannel}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="Notifications"
                      component={Notifications}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="ResetPassword"
                      component={ResetPassword}
                      options={{ headerShown: false }}
                    />

                    <Stack.Screen
                      name="Menu"
                      component={Menu}
                      options={{ headerShown: false }}
                    />

                    <Stack.Screen
                      name="OrderDetails"
                      component={OrderDetails}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="SignIn"
                      component={SignIn}
                      options={{ headerShown: false }}
                    />
                    {isLoggedIn ? (
                      <>
                        {/* <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{ headerShown: false }}
                  /> */}
                        <Stack.Screen
                          name="ProductAdd"
                          component={ProductAdd}
                          options={{ headerShown: false }}
                        />

                        <Stack.Screen
                          name="CategoriesScreen"
                          component={CategoriesScreen}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="HomeUser"
                          component={HomeUser}
                          options={{ headerShown: false }}
                        />

                        <Stack.Screen
                          name="Home"
                          component={Home}
                          options={{ headerShown: false }}
                        />

                        <Stack.Screen
                          name="SignUp"
                          component={SignUp}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="ProfileEdit"
                          component={ProfileEdit}
                          options={{ headerShown: false }}
                        />

                        <Stack.Screen
                          name="CategoryAdd"
                          component={CategoryAdd}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="Orders"
                          component={Orders}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="OrdersClient"
                          component={OrdersClient}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="DetailsAuctionCard"
                          component={DetailsAuctionCard}
                          options={{
                            title: "Auctions Available",
                          }}
                        />

                        <Stack.Screen
                          name="AuctionDetails"
                          component={AuctionDetails}
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="AllUsers"
                          component={AllUsers}
                          options={{ headerShown: false }}
                        />
                      </>
                    ) : (
                      <Stack.Screen
                        name="ProductDetails"
                        component={ProductDetails}
                        options={{ headerShown: false }}
                      />
                    )}
                  </Stack.Navigator>
                </NavigationContainer>
              </StripeProvider>
            </OverlayProvider>
          </UserProvider>
        </GestureHandlerRootView>
      </ApolloProvider>
    );
  }
}
