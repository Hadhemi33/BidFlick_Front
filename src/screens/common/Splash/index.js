import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "./style";
import TText from "../../../components/TText";
import GradianButton from "../../../components/Buttons/GradianButton";

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TText T="40" F="semiBold" C="black">
          Welcome !
        </TText>
        <TText T="30" F="regular" C="black">
          we're glad that
        </TText>
        <TText T="30" F="regular" C="black">
          you are here
        </TText>
      </View>
      <View style={styles.Logo}>
        <Image
          style={styles.LogoImg}
          source={require("../../../../assets/LogoDark.png")}
        />
      </View>
      <GradianButton
        style={styles.Btn}
        onPress={() => navigation.navigate("SignIn")}
        T="18"
        F="semiBold"
      >
        Let’s get started
      </GradianButton>
      <View style={styles.Footer}>
        <Image
          style={styles.FooterImg}
          source={require("../../../../assets/FooterSplash.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
