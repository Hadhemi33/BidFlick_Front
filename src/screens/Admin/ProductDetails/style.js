import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  conttainer: {
    height: "100%",
    display: "flex",
    width: "98%",

    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",

    flex: 1,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
    // width: "13%",
  },
  coontainer: {
    height: "70%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: "100%",

    justifyContent: "center",
  },

  image: {
    top: 80,
    alignSelf: "center",
  },
  iimg: {
    width: 400,
    height: 450,
    borderRadius: 70,
    alignSelf: "center",
    objectFit: "scale-down",
  },
  cont3: {
    marginTop: 60,

    backgroundColor: colors.white,
    width: "100%",
    height: 300,
    padding: 20,
    flexDirection: "column",
    alignSelf: "center",

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
    padding: 4,
    display: "flex",
    flexDirection: "row",
  },
  Likes: {
    padding: 4,
    display: "flex",
    flexDirection: "row",
  },
  LikesText: {
    fontSize: 14,

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
  },

  InfosSeller: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  BtnDelete: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.blueBorder,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
    height: 36,
    borderRadius: 20,
    marginTop: 40,
  },
  Infos: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-start",

    justifyContent: "space-between",
  },
});

export default styles;
