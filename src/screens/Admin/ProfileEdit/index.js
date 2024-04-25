import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { Entypo, Feather } from "@expo/vector-icons";
import { useMutation, gql, useQuery } from "@apollo/client";
import TText from "../../../components/TText";
import { colors } from "../../../constants/colors";
import GradianButton from "../../../components/Buttons/GradianButton";
import LightButton from "../../../components/Buttons/LightButton";
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
const ProfileEdit = ({ navigation }) => {
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
  if (loading || signupLoading) {
    console.log(JSON.stringify(data));

    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }
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
      <LinearGradient
        colors={["#C5F5ED", colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.Header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color="#000" size={25} />
        </TouchableOpacity>
      </LinearGradient>

      <ImageBackground
        // key={card.id}
        source={require("../../../../assets/people19.png")}
        style={styles.imageContainer}
        imageStyle={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.cam}>
          <Entypo name="camera" size={24} color="black" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.Forms}>
        <TText T="16" F="light" C="black">
          Full Name
        </TText>
        <TextInput
          style={styles.InputStyle}
          // value={fullName}
          // onChangeText={setFullName}
          placeholder="Full Name"
        />
        <TText T="16" F="light" C="black">
          Email
        </TText>
        <TextInput
          style={styles.InputStyle}
          // value={username}
          // onChangeText={setUsername}
          placeholder="Email"
        />
        <TText T="16" F="light" C="black">
          Phone number
        </TText>
        <TextInput
          style={styles.InputStyle}
          // value={phoneNumber}
          // onChangeText={setPhoneNumber}
          placeholder="Phone number"
        />
        <TText T="16" F="light" C="black">
          Password
        </TText>
        <TextInput
          style={styles.InputStyle}
          // value={password}
          // onChangeText={setPassword}
          placeholder="*******"
        />
        <TText T="16" F="light" C="black">
          Confirm Password
        </TText>

        <TextInput
          style={styles.InputStyle}
          // value={Confirmpassword}
          // onChangeText={setConfirmPassword}
          placeholder="*******"
          secureTextEntry
        />
      </View>
      <View style={styles.Botns}>
        <GradianButton
          style={styles.BtnAdd}
          onPress={() => navigation.navigate("Home")}
          T="18"
          F="semiBold"
          C="green"
          W="180"
        >
          Add Admin
        </GradianButton>
        <LightButton T="18" F="semiBold" W="180">
          Update
        </LightButton>
      </View>
    </SafeAreaView>
  );
};

export default ProfileEdit;
