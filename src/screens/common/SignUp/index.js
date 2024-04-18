import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "./style";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import Input from "../../../components/Input";
import { useMutation, gql, useQuery } from "@apollo/client";
export const Users_QUERY = gql`
  query GetAllUsers {
    getAllUsers {
      id
    }
  }
`;
const SIGN_UP_MUTATION = gql`
  mutation Signup($signupUserInput: SignupUserInput!) {
    signup(signupUserInput: $signupUserInput) {
      id
      username
      fullName
      phoneNumber
    }
  }
`;
const SignUp = ({ navigation }) => {
  const [InputState, setInputState] = useState({
    username: "BenMansourHadhemi",
    password: "445",
    fullName: "HadhemiHadhemi",
    phoneNumber: "88",
  });

  const { data, loading, error } = useQuery(Users_QUERY);
  const handleChangeFullName = (value) => {
    setInputState({
      ...InputState,
      fullName: value,
    });
  };
  const handleChangePassword = (value) => {
    setInputState({
      ...InputState,
      password: value,
    });
  };
  const handleChangeEmail = (value) => {
    setInputState({
      ...InputState,
      username: value,
    });
  };
  const handleChangePhoneNumber = (value) => {
    setInputState({
      ...InputState,
      phoneNumber: value,
    });
  };
  const handleSignUp = () => {
    signup({
      variables: {
        signupUserInput: {
          fullName: InputState.fullName,
          phoneNumber: InputState.phoneNumber,
          password: InputState.password,
          username: InputState.username,
        },
      },
    });
    console.log("input", InputState);
  };
  const [signup, { loading: signupLoading, error: signupError }] = useMutation(
    SIGN_UP_MUTATION,
    {
      refetchQueries: [{ query: Users_QUERY }],
    }
  );
  if (loading || signupLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error || signupError) {
    // console.log(JSON.stringify(data));
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error ? error.message : signupError.message}
        </Text>
      </View>
    );
  } else {
    // console.log(JSON.stringify(data.getAllUsers[3]));
  }
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
      <Input
        text=" Full Name"
        onChangeText={handleChangeFullName}
        value={InputState.fullName}
      />
      <Text>Email</Text>
      <Input
        text=" Email"
        onChangeText={handleChangeEmail}
        value={InputState.username}
      />
      <Text>Phone number</Text>
      <Input
        text=" Phone number"
        onChangeText={handleChangePhoneNumber}
        value={InputState.phoneNumber}
      />
      <Text>Password</Text>
      <Input
        text=" ******"
        onChangeText={handleChangePassword}
        value={InputState.password}
      />
      <LightButton
        onPress={() => {
          signup({
            variables: {
              signupUserInput: {
                fullName: InputState.fullName,
                username: InputState.username,
                password: InputState.password,
                phoneNumber: InputState.phoneNumber,
              },
            },
          });
          //   navigation.navigate("SignIn");
        }}
        T="18"
      >
        Sign up
      </LightButton>
      <GradianButton T="18">Sign in with google </GradianButton>
    </SafeAreaView>
  );
};

export default SignUp;
