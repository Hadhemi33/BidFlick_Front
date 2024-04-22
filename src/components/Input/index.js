import React from "react";
import { View, Image, TextInput,  } from "react-native";
import styles from "./style";
// import styles from "./styles";
// import colors from "../../constants/colors";

const Input = ({ showSearchIcon, style, text, F, onPress, ...props }) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      <TextInput
        // {...props}
        placeholder={text}
        placeholderTextColor="#BCBBBB"
        style={[styles.input]}
      />
    </View>
  );
};

export default React.memo(Input);
