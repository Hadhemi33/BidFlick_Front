import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "./style";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import Input from "../../../components/Input";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Get Started ! </Text>
      <Text>By creating a free account</Text>
      <View
        style={{
          borderBottomColor: "black",
          width: "40%",
          marginLeft: 20,
          marginTop: 19,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      ></View>

      <Text>Full Name</Text>
      <Input text=" Full Name" />
      <Text>Email</Text>
      <Input text=" Email" />
      <Text>Phone number</Text>
      <Input text=" Phone number" />
      <Text>Password</Text>
      <Input text=" Password" />
      <LightButton onPress={() => navigation.navigate("SignIn")} T="18">
        Sign in{" "}
      </LightButton>
      <GradianButton T="18">Sign in with google </GradianButton>
    </SafeAreaView>
  );
};

export default SignUp;
