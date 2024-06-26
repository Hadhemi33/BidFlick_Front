import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 70,
    top: 10,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },

  cont: {
    width: 40,
    top: 70,

    height: 30,
    borderRadius: 10,
    marginLeft: 70,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
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
    borderBottomWidth: 0.5,
    borderBottomColor: colors.rotana,
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
  imageOverlay: {
    backgroundColor: colors.white,
  },
  cam: {
    display: "flex",
    flex: 1,

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
  photos: {},
  Botns: {
    top: -40,

    alignSelf: "center",
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
