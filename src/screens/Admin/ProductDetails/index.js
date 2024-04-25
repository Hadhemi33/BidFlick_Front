import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
const ProductDetails = ({ route }) => {
  const { item } = route.params; // Getting the passed data
  const navigation = useNavigation(); // Accessing navigation
  return (
    <SafeAreaView style={styles.conttainer}>
      <View style={styles.header}>
        <View style={styles.Likess}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
          <TText T="17" F="regular" style={styles.LikesText}>
            {item.SellerName}
          </TText>
        </View>
        <View style={styles.Likes}>
          <TText T="17" F="regular" style={styles.LikesText}>
            100
          </TText>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <Image
              style={styles.LikesImage}
              source={require("../../../../assets/heart_8812101.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.ProductImage }} style={styles.iimg} />
      </View>

      <View style={styles.cont3}>
        <View style={styles.Infos}>
          <View style={styles.InfosTime}>
            <TText T="13" F="semiBold">
              Ending in :
            </TText>
            <TText T="15" F="bold">
              {item.expiration}
            </TText>
          </View>
          <View style={styles.InfosTime}>
            <TText T="13" F="semiBold">
              Highest Price :
            </TText>
            <TText T="15" F="bold">
              {item.Price}$
            </TText>
          </View>
        </View>
        <View style={styles.BtnDelete}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <TText T="18" F="semiBold" C="green">
              Delete
            </TText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
