import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    height: 48,
    // width: 342,
    alignSelf: "center",
    justifyContent: "center",
    // marginBottom: 10,

    // alignItems: "center",

    borderRadius: 40, // <-- Outer Border Radius
  },
  innerContainer: {
    flexDirection: "row",
    borderRadius: 40, // <-- Inner Border Radius
    flex: 1,
    margin: 3, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
  },
  img: {
    margin: 10,
    width: 30,
    height: 30,
  },
});

export default styles;
