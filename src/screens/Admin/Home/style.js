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
    display: "flex",
    flexDirection: "row",
    marginTop: 0,
    height: "19%",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",

    backgroundColor: colors.blueLight,
  },
  SearchInput: {
    borderRadius: 20,
    borderWidth: 1,
    top: 13,
    width: "80%",
    height: "40%",
    borderColor: colors.rotana,
    padding: 10,
  },
  ProfileImage: {
    top: 13,
    backgroundColor: colors.sea,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});

export default styles;
