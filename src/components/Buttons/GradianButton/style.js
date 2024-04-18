import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    height: 48,
    width: 342,
    alignSelf: "center",
    justifyContent: "center",
    // alignItems: "center",

    borderRadius: 40, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 40, // <-- Inner Border Radius
    flex: 1,
    margin: 3, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default styles;
