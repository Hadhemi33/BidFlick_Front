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
    marginTop: 20,
  },
  Forms: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,

    top: 0,
  },
  cont: {
    width: 40,
    top: -20,
    height: 30,
    borderRadius: 10,
    // marginLeft: 70,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    // marginLeft: 70,
    top: 10,

    // alignSelf: "flex-end",
    justifyContent: "flex-start",
  },
  Buttons: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  ButtonsPic: {
    marginTop: 20,
  },
  Create: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  InputStyle: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    fontFamily: "light",
    borderColor: "#BCBBBB",
    padding: 13,
  },
  ScrollView: {
    height: 100,
    marginBottom: 10,
  },
  calendar: {
    alignSelf: "center",
    alignContent: "center",
    // backgroundColor: colors.sea,
    marginLeft: 4,
  },
  timePick: {
    display: "flex",
    flexDirection: "row",
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    alignSelf: "center",
    
  },
  Remember: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    borderColor: colors.lightGreen,
    borderRadius: 20,
  },

});

export default styles;
