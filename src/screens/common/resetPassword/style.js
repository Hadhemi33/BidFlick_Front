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
    // backgroundColor: colors.sea,
  },

  InputStyle: {
    // marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderBottomWidth: 1.5,

    borderBottomColor: colors.lightGreen,
    padding: 10,
    top: -20,

    marginBottom: 10,
  },
  img: {
    width: "80%",
    height: "40%",
    objectFit: "scale-down",
  },
  img2: {
    width: "100%",
    height: "50%",
    objectFit: "scale-down",
  },
  Header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
  },
  rowBottom: {
    display: "flex",
    flexDirection: "row",
  },
  infos: {
    top: -40,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  infos2: {
    display: "flex",
    flexDirection: "column",

    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});

export default styles;
