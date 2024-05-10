import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    height: 48,
    
    alignSelf: "center",
    justifyContent: "center",
  

    borderRadius: 40,
  },
  innerContainer: {
    flexDirection: "row",
    borderRadius: 40, 
    flex: 1,
    margin: 3, 
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
