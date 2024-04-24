import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { Header } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "absolute",
    height: "100%",
    display: "flex",
    width: "100%",
  },
  Header: {
    marginTop: 0,
    height: "19%",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.blueLight,
  },
  SearchInput: {
    borderRadius: 20,
    borderWidth: 1,
    top: 13,

    borderColor: colors.rotana,
    padding: 10,
  },
});

export default styles;
