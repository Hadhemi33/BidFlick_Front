import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/common/Splash";
import SignIn from "./src/screens/common/SignIn";
import SignUp from "./src/screens/common/SignUp";
import { ApolloProvider } from "@apollo/client";

import client from "./src/apollo";
const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}
