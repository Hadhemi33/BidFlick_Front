import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    height: "100%",
    display: "flex",
    width: "100%",
   
  },
  Header: {
    paddingHorizontal: 24,

    marginTop: 80,
    height: "25%",
    display: "flex",
    flexDirection: "column",
  },
  Footer: {
    height: "29%",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  FooterImg: {
    width: 217,
    height: 169,
  },
  Logo: {
    marginRight: 30,
    marginBottom: 45,
    display: "flex",
    alignSelf: "center",
    height: "20%",
  },
  LogoImg: {
   

    width: 292,
    height: 182,
    alignSelf: "center",
  },
  Btn: {
    marginTop:40,
    height: "8%",
  },
});

export default styles;
