import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    height: 48,

    alignSelf: "center",
    justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#cc2b5e",
    backgroundColor: "transparent",
  },
});

export default styles;
