import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";

import styles from "./style";
import TText from "../../../components/TText";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import { Entypo, Feather } from "@expo/vector-icons";
import { RESET_PASS, VERIF_RESET_CODE } from "../../../Graphql/mutations";
const ResetPassword = ({ route, navigation }) => {
  const { username, code } = route.params;
  console.log(username);
  const [newPassword, setNewPassword] = useState("");
  const [resetPassword, { loadingReq, errorReq, dataReq }] =
    useMutation(RESET_PASS);
  const handleReqResetPass = async () => {
    try {
      if (!code) {
        Alert.alert("Please enter new password.");
      }

      const response = await resetPassword({
        variables: {
          username,
          code,
          newPassword,
        },
      });
      console.log("done.");

      navigation.navigate("SignIn");
    } catch (errorReq) {
      console.error("Error verifing code:", errorReq);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color="#000" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.infos}>
        <Image
          style={styles.img2}
          source={require("../../../../assets/reset.gif")}
        />
        <TText T="30" F="semiBold" C="black">
          Reset Password
        </TText>
        <TText T="16" F="light" C="black">
          Set the new password for your account so you can login and access all
          the features.
        </TText>
      </View>
      <TextInput
        style={styles.InputStyle}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="******"
        secureTextEntry
      />
      <GradianButton T="18" F="semiBold" W="200" onPress={handleReqResetPass}>
        Save
      </GradianButton>
    </SafeAreaView>
  );
};

export default ResetPassword;
