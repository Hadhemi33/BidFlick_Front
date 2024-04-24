import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  Likes: {
    top: -23,
    // width: "40%",
    padding: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.blueBorder,

    borderRadius: 10,
  },

  LikesText: {
    fontSize: 14,

    // fontWeight: "bold",
    color: colors.blue,
  },
  LikesImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  Productimage: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    marinTop: 10,
    margin: 10,
    width: 172,
    height: 240,
    backgroundColor: "white",
    borderRadius: 10,
    // padding: 15,
    justifyContent: "space-between",
    marginTop: 25,
    borderWidth: 1,
    borderColor: colors.blueBorder,
  },
  backgroundImage: {
    borderRadius: 10,
  },
  Infos: {
    width: "101%",
    display: "flex",

    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    top: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  TitleText:{
    
  },
});

export default styles;
