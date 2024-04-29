// Button.js
import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";
function LightButton({ children, T, F, onPress, W, I, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#C3FCF1", "#2EBC7C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.linearGradient, { width: parseInt(W) || 342 }, style]}
      >
        {I && <Image style={styles.img} source={I} />}
        {/* <View style={styles.innerContainer}> */}
        <Text style={{ fontSize: parseInt(T), fontFamily: F }}>{children}</Text>
        {/* </View> */}
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default LightButton;
