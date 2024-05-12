import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 20,
    marginBottom: 40,
  },
  nbr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginLeft: 60,
    alignSelf: "center",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  statsCard: {
    marginVertical: 10,
    borderRadius: 10,
  },
  card: {
    marginTop: 20,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    width: 173,
    height: 96,
    borderWidth: 1,
    borderColor: colors.lightGreen,
  },
  deleteIcon: {
    alignSelf: "center",
    bottom: 0,
    right: -50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  delUser: {
    alignSelf: "flex-end",
    alignContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  delAdd: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    width: "20%",
  },
  infos: {
    flexDirection: "column",
    width: "70%",
    height: "100%",

    justifyContent: "space-between",
  },
  userItem: {
    marginTop: 20,
    flex: 1,

    marginHorizontal: 10,
    marginVertical: 5,

    backgroundColor: "#fff",

    borderRadius: 20,
    marginBottom: 10,
    width: "99%",
    height: 80,

    borderBottomWidth: 0.1,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderColor: colors.petrol,
    alignSelf: "center",
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 20,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    top: 13,
    width: "90%",
    marginBottom: 20,
    borderBottomColor: colors.rotana,
    borderRightColor: colors.lightGreen,
    borderLeftColor: colors.lightGreen,
    padding: 8,
  },
  productCount: {},

  statsCategory: {
    color: "#999",
  },
  SearchInput: {
    fontFamily: "regular",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  addButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default styles;
