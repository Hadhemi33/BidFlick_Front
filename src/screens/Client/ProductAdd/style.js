import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: "100%",
    display: "flex",
    width: "100%",
    padding: 60,
    position: "absolute",
  },
  Header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Forms: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ForgotPass: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Buttons: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
  },
  Create: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  InputStyle: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: colors.lightGrey,
    borderColor: "#BCBBBB",
    padding: 10,
  },

  checkbox: {
    margin: 8,
    borderColor: colors.lightGrey,
    borderRadius: 20,
  },
  Remember: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Biometric: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    // marginBottom: 20,
  },
});

export default styles;
