import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",

    width: "100%",
    top: 50,
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
    borderWidth: 1,
    borderColor: colors.greyGreen,
  },
  backgroundImage: {
    objectFit: "scale-down",
    opacity: 0.8,
    alignSelf: "center",

    borderRadius: 10,
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

  cont3: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 354,
    height: 140,
    padding: 20,

    alignSelf: "center",

    top: "75%",
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
