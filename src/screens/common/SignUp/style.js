import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: "100%",
    display: "flex",
    width: "100%",
    padding: 60,
    // backgroundColor: "#44f855",
  },
  Already: {
    marginTop: 10,
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
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: colors.lightGrey,
    borderColor: "#BCBBBB",
    padding: 10,
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
  Buttons: {
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
