import React from "react";
import { View, Image, TextInput, Pressable } from "react-native";
import styles from "./style";
// import styles from "./styles";
// import colors from "../../constants/colors";

const Input = ({
  showSearchIcon,
  style,
  pressable,
  text,
  onPress,
  ...props
}) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {/* {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null} */}
      <TextInput
        // {...props}
        placeholder={text}
        editable={!pressable}
        // placeholderTextColor={colors.lightGrey}
        placeholderTextColor="#BCBBBB"
        style={styles.input}
      />
    </View>
  );
  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }
  return renderInput();
};

export default React.memo(Input);
