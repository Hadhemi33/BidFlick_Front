import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/common/Splash";
import SignIn from "./src/screens/common/SignIn";
import SignUp from "./src/screens/common/SignUp";
import { ApolloProvider } from "@apollo/client";
import client from "./src/apollo";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { fontMap } from "./src/constants/fonts";
import Home from "./src/screens/Admin/Home";

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};
export default function App() {
  const [fontsLoaded] = useFonts(fontMap);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={theme}>
        <ApolloProvider client={client}>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </ApolloProvider>
      </NavigationContainer>
    );
  }
}
