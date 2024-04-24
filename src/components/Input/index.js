import React from "react";
import { View, TextInput } from "react-native";
import styles from "./style";

const Input = ({ placeholder, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder || "Search..."}
        placeholderTextColor="#BCBBBB"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default React.memo(Input);
