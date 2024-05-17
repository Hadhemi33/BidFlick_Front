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
    borderBottomWidth: 0.5,
    borderBottomColor: colors.rotana,

    backgroundColor: colors.blueLight,
  },
  notif: {
    flexDirection: "column",
    top: 17,
    marginRight: 5,
  },
  circle: {
    width: 20,
    height: 20,
    alignSelf: "center",

    top: -28,
    borderRadius: 10,

    backgroundColor: colors.rotana,
  },
  iconImages: {
    flexDirection: "row",
    alignItems: "center",

    alignContent: "center",
    justifyContent: "space-between",
    // backgroundColor: colors.sea,
  },
  icon: {
    alignSelf: "center",
    marginLeft: 10,
    // width: "13%",
  },
  statValue: {
    alignSelf: "center",
    backgroundColor: colors.rotana,
  },
  titre: { flexDirection: "row", marginRight: 10, marginTop: 5 },
  auctions: {
    alignSelf: "center",
    marginLeft: 10,
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
    // backgroundColor: colors.sea,
    width: 35,
    alignSelf: "center",
    height: 35,
    borderRadius: 20,
  },
  notifIcon: {
    alignSelf: "center",
    top: 10,
  },
});

export default styles;
