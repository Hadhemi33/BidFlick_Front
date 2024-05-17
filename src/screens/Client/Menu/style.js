import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "absolute",
    height: "100%",
    display: "flex",
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
  },

  Header: {
    display: "flex",
    flexDirection: "row",
    height: 172,
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.sea,
    backgroundColor: colors.blueLight,
  },
  InputStyle: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,

    borderColor: "#BCBBBB",
    padding: 10,
  },

  imageContainer: {
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: 10,
    width: 70,
    height: 70,
    marginRight: 25,

    borderRadius: 35,
    shadowColor: "#000",
    backgroundColor: colors.sea,
  },
  user: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  back: {
    marginRight: 12,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textUser: {
    alignSelf: "center",
    top: 10,
  },
  icon: {
    // marginRight: 10,
    width: "13%",
  },
  choices: {
    paddingLeft: 30,
  },
  choice: {
    flexDirection: "row",
    marginBottom: 8,
    // alignContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0FBE2",
    width: "100%",
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    backgroundColor: colors.sea,
    objectFit: "fill",
    marginRight: 30,
    alignSelf: "center",

    borderRadius: 35,
  },
  ButtonsPic: {
    alignSelf: "center",
    marginTop: 80,
  },
  arrow: {
    position: "absolute",
    right: 30,
  },
});

export default styles;
