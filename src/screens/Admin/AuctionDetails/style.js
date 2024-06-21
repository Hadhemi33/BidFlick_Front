import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 10,
    marginBottom: 40,
  },
  icon: {
    marginLeft: 10,
  },
  containerr: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    // padding: 20,
    width: "100%",
    height: "65%",
    backgroundColor: colors.sea,
  },
  header: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",

    width: "100%",
    top: 10,
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

  backgroundImage: {
    objectFit: "cover",
    opacity: 0.8,
    position: "absolute",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    width: "100%",
    height: "100%",
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
    backgroundColor: colors.white,
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
