import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

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
    height: "25%",
    width: "101%",

    alignItems: "center",
    alignSelf: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",

    borderRadius: 10,
    top: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  cardInfoContainer: {
    flexDirection: "column",

    alignContent: "center",
    alignItems: "center",
  },
  PriceText: {},
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
    opacity: 0.8,
    alignSelf: "center",
    resizeMode: "cover",


    borderRadius: 10,
  },
  PriceContainer: {
    backgroundColor: colors.greyGreen,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  CardPrice: {
    height: "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  
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
  DateRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
