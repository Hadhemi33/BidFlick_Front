import React, { useEffect, useState } from "react";
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
import { useUser } from "../../../Graphql/userContext";
import { UPDATE_USER_MUTATION } from "../../../Graphql/mutations";
import { USERS_QUERY } from "../../../Graphql/querys";
import FilePickerComponent from "../../../components/FilePickerComponent";
export const Users_QUERY = gql`
  query GetAllUsers {
    getAllUsers {
      id
    }
  }
`;
const ProfileEdit = ({ navigation }) => {
  const user = useUser();

  console.log("Sg with:", { fullName, username, phoneNumber });

  const { data, loading, error } = useQuery(Users_QUERY);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [Confirmpassword, setConfirmPassword] = useState("");
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setUsername(user.username || "");
      setPhoneNumber(user.phoneNumber || "");
    }
  }, [user]);
  const handleFormSubmit = async () => {
    console.log("Submitting with:", { fullName, username, phoneNumber });

    if (password !== Confirmpassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const { data } = await updateUser({
        variables: {
          updateUserInput: {
            phoneNumber,
            fullName,
            username,
            imageUrl,
          },
        },
      });
      console.log("User updated:", data.updateUser);
      Alert.alert("Success", "Profile updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      Alert.alert("Error", "Could not update account");
    }
  };
  const handleFileSelected = (url) => {
    setImageUrl(url);
    console.log("Image URL received:", url);
  };
  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_USER_MUTATION);
  if (loading || updateLoading) {
    console.log(JSON.stringify(data));

    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }
  if (error || updateError) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error ? error.message : updateError.message}
        </Text>
      </View>
    );
  } else {
    console.log(JSON.stringify(data.updateUser));
  }
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
        source={{
          uri: user.imageUrl,
        }}
        style={styles.imageContainer}
        imageStyle={styles.backgroundImage}
      >
        <FilePickerComponent
          style={styles.cam}
          onFileSelected={handleFileSelected}
          I={require("../../../../assets/changeImage.png")}
        />
        {/* Additional UI components */}
      </ImageBackground>

      <View style={styles.Forms}>
        <TText T="16" F="light" C="black">
          Full Name
        </TText>
        <TextInput
          style={styles.InputStyle}
          value={fullName}
          onChangeText={setFullName}
          placeholder={user.fullName}
        />
        <TText T="16" F="light" C="black">
          Email
        </TText>
        <TextInput
          style={styles.InputStyle}
          value={username}
          onChangeText={setUsername}
          placeholder={user.username}
        />
        <TText T="16" F="light" C="black">
          Phone number
        </TText>
        <TextInput
          style={styles.InputStyle}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={user.phoneNumber}
        />
        <TText T="16" F="light" C="black">
          Password
        </TText>
        <TextInput
          style={styles.InputStyle}
          value={password}
          onChangeText={setPassword}
          placeholder="*******"
          secureTextEntry
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
      </View>
      <View style={styles.Botns}>
        <GradianButton
          style={styles.BtnAdd}
          onPress={() => navigation.navigate("AllUsers")}
          T="18"
          F="semiBold"
          W="180"
          I={require("../../../../assets/addAdmin.png")}
        >
          Add Admin
        </GradianButton>
        <LightButton T="18" F="semiBold" W="180" onPress={handleFormSubmit}>
          Update
        </LightButton>
      </View>
    </SafeAreaView>
  );
};

export default ProfileEdit;
