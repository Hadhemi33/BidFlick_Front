// Button.js
import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";

import { colors } from "../../constants/colors";
function TText({ children, T, F, C, onPress }) {
  return (
    <TouchableOpacity>
      <Text
        onPress={onPress}
        style={[
          {
            fontSize: parseInt(T),
            fontFamily: F,
            color: colors[C],
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default TText;
