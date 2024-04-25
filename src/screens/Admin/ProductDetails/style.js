import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
// import colors from "../../constants/colors";

const styles = StyleSheet.create({
  conttainer: {
    // paddingHorizontal: 24,
    height: "100%",
    display: "flex",
    width: "98%",
    // padding: 60,
    // backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",

    flex: 1,
    paddingVertical: 5,

    // position: "absolute",
  },

  coontainer: {
    height: "70%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    // backgroundColor: "#121212",
    alignSelf: "center",
    width: "100%",

    justifyContent: "center",
    // backgroundColor: "#121212",
  },
  backgroundImage: {
    // opacity: 0.8,

    // alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    resizeMode: "cover",
    // marginLeft: 5,
    // width: 362,
    top: 70,
    width: "100%",
    height: "70%",

    // resizeMode: "contain",
    // height: 173,
    borderRadius: 10,
  },

  image: {
    top: 60,
    alignSelf: "center",

    alignSelf: "center",
    // backgroundColor: colors.sea,
  },
  iimg: {
    width: 400,
    height: 400,
    borderRadius: 100,
    alignSelf: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",

    width: "100%",
    top: 70,
    paddingHorizontal: 20,
    position: "absolute",
  },
  img: {
    height: "65%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 40,
    marginBottom: 10,
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
    marginTop: 40,
    // flex: 1,
    backgroundColor: colors.white,
    width: "100%",
    height: 320,
    padding: 20,

    // top: "-5%",
    // position: "relative",
    flexDirection: "column",
    alignSelf: "center",
    // marginLeft: 5,
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

  InfosSeller: {
    flexDirection: "row",
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
