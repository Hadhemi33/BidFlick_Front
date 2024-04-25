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

  image: {
    top: 80,
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
  cont3: {
    marginTop: 60,
    // flex: 1,
    backgroundColor: colors.white,
    width: "100%",
    height: 300,
    padding: 20,
    flexDirection: "column",
    alignSelf: "center",
    // marginLeft: 5,
    borderWidth: 2,
    borderColor: colors.blueBorder,
    borderRadius: 50,
    paddingHorizontal: 20,
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

  SellerImg: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignSelf: "center",
  },
  linearGradient: {
    marginVertical: 20,
    width: 360,
    height: 0.5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  linearGradientName: {
    width: 167,
    height: 1.5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  linearGradientSeller: {
    width: 64,
    height: 1.5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  InfosTime: {
    flexDirection: "column",
    justifyContent: "space-between",
    // marginTop: 10,
  },

  InfosSeller: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    // marginTop: 10,
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
    marginTop: 80,
  },
  Infos: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-start",

    justifyContent: "space-between",
  },
});

export default styles;
