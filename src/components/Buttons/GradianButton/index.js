// Button.js
import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";
function GradianButton({ children, T }) {
  return (
    <>
      <LinearGradient
        colors={[
          "#2EBC7C",
          "#00864B",
          "#093A60",
          "#2EBC7C",
          "#08787F",
          "#093A60",
          "#C3FCF1",
          "#2EBC7C",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={[{ fontSize: parseInt(T) }, styles.buttonText]}>
            {children}
          </Text>
        </View>
      </LinearGradient>
    </>
  );
}

export default GradianButton;
