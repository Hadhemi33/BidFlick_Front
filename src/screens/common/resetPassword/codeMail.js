import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";

import styles from "./style";
import TText from "../../../components/TText";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
import { Entypo, Feather } from "@expo/vector-icons";
import { VERIF_RESET_CODE } from "../../../Graphql/mutations";
const CodeMail = ({ route, navigation }) => {
  const { username } = route.params;
  console.log(username);
  const [code, setcode] = useState("");
  const [verifyResetCode, { loadingReq, errorReq, dataReq }] =
    useMutation(VERIF_RESET_CODE);
  const handleReqResetPass = async () => {
    try {
      if (!code) {
        Alert.alert("Please enter code.");
      }

      const response = await verifyResetCode({
        variables: {
          username,
          code,
        },
      });
      console.log("done.");

      navigation.navigate("ResetPassword", { username, code });
    } catch (errorReq) {
      if (errorReq.message.includes("Invalid or expired verification code")) {
        Alert.alert("code invalid ! ");
      }
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
          style={styles.img}
          source={require("../../../../assets/Emails.gif")}
        />
        <TText T="30" F="semiBold" C="black">
          Check your email
        </TText>
        <TText T="16" F="light" C="black">
          Enter the verification code we've sent to
        </TText>
        <TText T="16" F="light" C="black">
          your email address :
        </TText>
        <TText T="16" F="regular" C="black">
          {username}
        </TText>
      </View>
      <TextInput
        style={styles.InputStyle}
        value={code}
        onChangeText={setcode}
        placeholder="Verification Code"
      />
      <GradianButton T="18" F="semiBold" W="200" onPress={handleReqResetPass}>
        Next
      </GradianButton>
      <View style={styles.infos2}>
        <TText T="14" F="regular" C="black">
          Didn't get the email ?
        </TText>
        <View style={styles.rowBottom}>
          <TText T="14" F="light" C="black">
            Check your spam folder or{" "}
          </TText>
          <TText T="14" F="light" C="sea">
            resend the code
          </TText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CodeMail;
