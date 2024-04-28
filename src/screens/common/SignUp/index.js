import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./style";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import Input from "../../../components/Input";
import { useMutation, gql, useQuery } from "@apollo/client";
import TText from "../../../components/TText";
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
  const { data, loading, error } = useQuery(Users_QUERY);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  // const handleFormSubmit = async () => {
  //   try {
  //     const { data } = await signup({
  //       variables: {
  //         signupUserInput: {
  //           fullName,
  //           username,
  //           password,
  //           phoneNumber,
  //         },
  //       },
  //     });
  //     console.log("User created:", data.signup);
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //   }
  // };
  const handleFormSubmit = async () => {
    if (password !== Confirmpassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const { data } = await signup({
        variables: {
          signupUserInput: {
            fullName,
            username,
            password,
            phoneNumber,
          },
        },
      });
      console.log("User created:", data.signup);
      Alert.alert("Success", "Account created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      Alert.alert("Error", "Could not create account");
    }
  };
  const [signup, { loading: signupLoading, error: signupError }] = useMutation(
    SIGN_UP_MUTATION,
    {
      refetchQueries: [{ query: Users_QUERY }],
    }
  );
  // if (loading || signupLoading) {
  //   console.log(JSON.stringify(data));

  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.infoText}>Loading...</Text>
  //     </View>
  //   );
  // }
  // if (error || signupError) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={[styles.infoText, styles.errorText]}>
  //         Error: {error ? error.message : signupError.message}
  //       </Text>
  //     </View>
  //   );
  // } else {
  //   // console.log(JSON.stringify(data.getAllUsers[3]));
  // }
  return (
    <SafeAreaView style={styles.container}>
      <TText T="30" F="semiBold" C="black">
        Get Started !
      </TText>
      <TText T="16" F="light" C="black">
        By creating a free account
      </TText>
      <View
        style={{
          borderBottomColor: "black",
          width: "40%",
          marginLeft: 5,
          marginTop: 10,
          marginBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      ></View>
      <TText T="16" F="light" C="black">
        Full Name
      </TText>
      <TextInput
        style={styles.InputStyle}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />
      <TText T="16" F="light" C="black">
        Email
      </TText>
      <TextInput
        style={styles.InputStyle}
        value={username}
        onChangeText={setUsername}
        placeholder="Email"
      />
      <TText T="16" F="light" C="black">
        Phone number
      </TText>
      <TextInput
        style={styles.InputStyle}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone number"
      />
      <TText T="16" F="light" C="black">
        Password
      </TText>
      <TextInput
        style={styles.InputStyle}
        value={password}
        onChangeText={setPassword}
        placeholder="*******"
      />
      <TText T="16" F="light" C="black">
        Confirm Password
      </TText>

      <TextInput
        style={styles.InputStyle}
        value={Confirmpassword}
        onChangeText={setConfirmPassword}
        placeholder="*******"
        secureTextEntry
      />
      <View style={styles.Buttons}>
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
        <LightButton onPress={handleFormSubmit} T="18" F="semiBold">
          Sign up
        </LightButton>
        {/* <GradianButton
          T="18"
          F="semiBold"
          I={require("../../../../assets/google.png")}
        >
          Sign up with google{" "}
        </GradianButton> */}
      </View>
      <View style={styles.Already}>
        <TText T="14" F="light" C="black">
          Already have an account?
        </TText>
        <TText
          T="14"
          F="regular"
          C="sea"
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign in!
        </TText>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
