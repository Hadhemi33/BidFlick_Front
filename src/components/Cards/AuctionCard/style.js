import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  SellerInfos: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  Infos: {
    flexDirection: "column",

    marginTop: 30,
  },
  cardInfoContainer: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginHorizontal: 10,
    width: 367,
    height: 176,
    padding: 10,
    borderRadius: 10,

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
  SellerName: {
    fontSize: 14,
  },
  SellerImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  cardInfoValue: {},
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
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
  },
  indicator: {
    width: 35,
    height: 2,
    backgroundColor: "gray",
    margin: 5,
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
