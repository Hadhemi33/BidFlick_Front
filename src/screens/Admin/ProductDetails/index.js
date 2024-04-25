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
import { LinearGradient } from "expo-linear-gradient";

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
            <TText T="20" F="semiBold">
              {item.title}
            </TText>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientName}
            ></LinearGradient>
            <TText T="24" F="regular">
              {item.Price}$
            </TText>
          </View>
          <View style={styles.InfosTime}>
            <View style={styles.InfosSeller}>
              <Image
                source={require("../../../../assets/people19.png")}
                style={styles.SellerImg}
              />

              <TText T="20" F="regular" style={styles.LikesText}>
                {item.SellerName}
              </TText>
            </View>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientSeller}
            ></LinearGradient>
          </View>
        </View>
        <LinearGradient
          colors={["#C3FCF1", "#2EBC7C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        ></LinearGradient>
        <TText T="20" F="semiBold">
          Description
        </TText>
        <TText T="13" F="regular" style={styles.LikesText}>
          {item.description}
        </TText>
        <View style={styles.BtnDelete}>
          <TouchableOpacity>
            <TText
              T="18"
              F="semiBold"
              C="green"
              onPress={() => navigation.navigate("CategoriesScreen")}
            >
              Delete
            </TText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
