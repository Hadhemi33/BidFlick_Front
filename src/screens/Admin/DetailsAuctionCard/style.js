import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
// import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignSelf: "center",
  },
  SellerInfos: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  Infos: {
    width: "101%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    borderRadius: 10,
    top: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  cardInfoContainer: {
    flexDirection: "column",

    alignContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginHorizontal: 10,
    // alignItems: "center",
    // alignSelf: "flex-end",
    justifyContent: "flex-end",
    width: 367,
    height: 176,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    alignContent: "flex-end",
    alignItems: "flex-end",
    borderWidth: 2,
    borderColor: colors.blueBorder,
  },
  backgroundImage: {
    opacity: 0.6,
    alignSelf: "center",
    width: 362,
    height: 173,
    borderRadius: 10,
  },

  cardInfoValue: {
    fontWeight: "400",
    fontSize: 40,
    color: colors.black,
  },
  cardInfoLabel: {
    marginTop: 5,

    fontWeight: "600",
    marginBottom: 20,
    fontSize: 30,
    color: colors.black,
  },
  cardInfoValuePrice: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-end",
    color: colors.black,
    marginTop: 20,
  },

  cardMore: {
    marginHorizontal: 10,
    width: 367,
    height: 176,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.blueBorder,
  },
});

export default styles;
