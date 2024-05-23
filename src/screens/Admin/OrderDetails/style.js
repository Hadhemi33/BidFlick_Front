import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80,
    // backgroundColor: colors.sea,
  },
  header: {
    alignItems: "center",
  },

  invoiceInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: "row",
  },
  pay: {
    // backgroundColor: colors.sea,

    marginTop: 20,
  },
  text: {
    marginLeft: 5,
    alignSelf: "center,",
  },
  divider: {
    borderBottomColor: colors.rotana,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    marginTop: 20,
  },
  customerInfo: {
    flexDirection: "row",
    marginVertical: 5,
  },
  subtitle: {
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  total: {
    color: colors.petrol,
  },
});
export default styles;
