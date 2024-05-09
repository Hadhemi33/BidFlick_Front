import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./style";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import Input from "../../../components/Input";
import text from "../../../components/TText";
import { useMutation, gql, useQuery } from "@apollo/client";
import TText from "../../../components/TText";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../../../../App";
export const Users_QUERY = gql`
  query GetAllUsers {
    getAllUsers {
      id
    }
  }
`;
const SIGN_IN_MUTATION = gql`
  mutation Signin($loginUserInput: SigninUserInput!) {
    signin(loginUserInput: $loginUserInput) {
      username
      roles
      access_token
    }
  }
`;

const SignIn = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const { data, loading, error } = useQuery(Users_QUERY);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = async () => {
    try {
      const { data } = await signin({
        variables: {
          loginUserInput: {
            username,
            password,
          },
        },
      });
      console.log("User created:", data.signin);
      const token = data.signin.access_token;
      await AsyncStorage.setItem("accessToken", token);
      const retrievedToken = await AsyncStorage.getItem("accessToken");
      console.log("Retrieved token:", retrievedToken);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const [signin, { loading: signinLoading, error: signinError }] = useMutation(
    SIGN_IN_MUTATION,
    {
      refetchQueries: [{ query: Users_QUERY }],
    }
  );

  if (loading || signinLoading) {
    console.log(JSON.stringify(data));

    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error || signinError) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error ? error.message : signinError.message}
        </Text>
      </View>
    );
  } else {
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TText T="30" F="semiBold" C="black">
          Welcome Back !{" "}
        </TText>
        <TText T="16" F="light" C="black">
          Sign in to access your account
        </TText>
        <View
          style={{
            borderBottomColor: "black",
            width: "30%",
            marginLeft: 5,
            marginTop: 19,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
      </View>
      <View style={styles.Forms}>
        <TText T="20" F="light" C="black">
          Email
        </TText>

        <TextInput
          style={styles.InputStyle}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your email address"
        />

        <TText T="20" F="light" C="black">
          Password
        </TText>

        <TextInput
          style={styles.InputStyle}
          value={password}
          onChangeText={setPassword}
          placeholder="*********"
          secureTextEntry
          // style={styles.input}
        />
        <View style={styles.ForgotPass}>
          <View style={styles.Remember}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <TText T="14" F="light" C="black">
              Remember me
            </TText>
          </View>
          <TText T="14" F="light" C="black">
            Forgot password?
          </TText>
        </View>
        <View style={styles.Buttons}>
          <LightButton onPress={handleFormSubmit} T="18" F="semiBold">
            Sign in
          </LightButton>
          <View style={styles.Biometric}>
            <Image
              style={styles.img}
              source={require("../../../../assets/Facial_Recognition.png")}
            />
            <Image
              style={styles.img}
              source={require("../../../../assets/Fingerprint_Scan.png")}
            />
          </View>
          <GradianButton
            onPress={() => navigation.navigate("Home")}
            T="18"
            F="semiBold"
            I={require("../../../../assets/google.png")}
          >
            Sign in with google
          </GradianButton>
        </View>
      </View>
      <View style={styles.Create}>
        <TText T="14" F="light" C="black">
          Don't have an account?
        </TText>
        <TText
          T="14"
          F="regular"
          C="sea"
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up!
        </TText>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
