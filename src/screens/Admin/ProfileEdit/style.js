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
    height: 172,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    display: "flex",
    flexDirection: "column",
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
  Forms: {
    top: -60,

    marginHorizontal: 20,
    padding: 5,
  },
  imageContainer: {
    backgroundColor: colors.white,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: -80,
    width: 150,
    height: 150,
    borderRadius: 75,
    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    borderRadius: 70,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cam: {

    display: "flex",
    flex: 1,
    
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 20,
   
  },
  photos:{

  }
  ,
  Botns: {
    top: -40,

    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
