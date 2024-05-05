import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
// import colors from "../../constants/colors";

const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 24,
  //   height: "100%",
  //   display: "flex",
  //   width: "100%",
  //   // padding: 60,
  //   backgroundColor: "#121212",

  //   position: "absolute",
  // },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    // justifyContent: "center",
    // backgroundColor: "#fff",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "flex-start",
    // alignContent: "flex-start",
    justifyContent: "space-between",

    // height: "40%",
    width: "100%",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    top: 50,
    paddingHorizontal: 20,
    position: "absolute",
    // paddingTop: 70,
  },
  img: {
    height: "65%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 40,
    marginBottom: 10,
  },
  cardContainer: {
    display: "flex",
    marginHorizontal: 10,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    width: 367,
    height: 176,
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    // alignContent: "flex-end",
    // alignItems: "flex-end",
    borderWidth: 1,
    borderColor: colors.greyGreen,
  },
  backgroundImage: {
    objectFit: "scale-down",
    opacity: 0.8,
    alignSelf: "center",
    // flex: 1,
    // resizeMode: "cover",

    // width: 362,
    // width: "100%",
    // resizeMode: "contain",
    // height: 173,
    borderRadius: 10,
  },
  Likess: {
    // top: -23,
    // position: "absolute",
    // width: "40%",
    padding: 4,
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    // alignContent: "center",
    // backgroundColor: colors.white,
    // // borderWidth: 2,
    // // borderColor: colors.blueBorder,

    // // borderRadius: 10,
  },
  Likes: {
    // top: -23,
    // position: "absolute",
    // width: "40%",
    padding: 4,
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    // alignContent: "center",
    // backgroundColor: colors.white,
    // // borderWidth: 2,
    // // borderColor: colors.blueBorder,

    // // borderRadius: 10,
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
  imgLike: {
    width: 25,
    height: 25,
  },

  cont3: {
    // flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 354,
    height: 140,
    padding: 20,

    alignSelf: "center",

    // justifyContent: "center",

    top: "75%",
    // position: "relative",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: colors.blueBorder,

    borderRadius: 20,
    paddingHorizontal: 20,
  },
  InfosTime: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
  },
  BtnDelete: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 2,
    borderColor: colors.blueBorder,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
    height: 36,
    borderRadius: 20,
    top: 40,
  },
  Infos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
