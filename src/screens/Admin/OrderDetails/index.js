import React, { useCallback, useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
  Text,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery, useMutation } from "@apollo/client";
import { HISTORY_QUERY, ORDERS_QUERY } from "../../../Graphql/querys";
import { DELETE_ORDER_MUTATION } from "../../../Graphql/mutations";
import styles from "./style";

import TText from "../../../components/TText";
import { useUser } from "../../../Graphql/userContext";
import PaymentScreen from "../../Client/Payment";
import LightButton from "../../../components/Buttons/LightButton";
import GradianButton from "../../../components/Buttons/GradianButton";
// import Barcode from "react-native-barcode-builder";
const OrderDetails = ({ route }) => {
  const navigation = useNavigation();
  const user = useUser();

  const { item } = route.params;
  const {
    data: HisData,
    loading: Hisloading,
    error: HisError,
    refetch: HisRefetch,
  } = useQuery(HISTORY_QUERY, {
    pollInterval: 5000,
  });
  const { data, loading, error, refetch } = useQuery(ORDERS_QUERY, {
    pollInterval: 5000,
  });
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    refetchQueries: [{ query: ORDERS_QUERY, query: HISTORY_QUERY }],
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
  const handleDeleteOrder = async (id) => {
    console.log("id", id);
    try {
      const HisData = await deleteOrder({
        variables: {
          id,
        },
      });
      HisRefetch();
      Alert.alert("Success", `Order Deleted.`);
    } catch (error) {
      console.error("Error updating role:", HisError);
      Alert.alert("Error", `An error occurred while updating the role.`);
    }
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <TText T="16" F="semiBold" C="black">
          Error loading users: {error.message}
        </TText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TText T="20" F="bold" C="black" style={styles.title}>
          Invoice
        </TText>
      </View>
      <View style={styles.invoiceInfoContainer}>
        <View style={styles.invoiceInfo}>
          <TText T="16" F="light" C="black" style={styles.label}>
            Invoice Number:
          </TText>
          <TText T="16" F="light" C="black" style={styles.text}>
            {item.id}
          </TText>
        </View>
      </View>
      {/* <Barcode value={item.id} format="CODE128" /> */}
      <View style={styles.divider} />
      <View style={styles.customerInfoContainer}>
        <TText T="18" F="regular" C="black" style={styles.subtitle}>
          Customer Information
        </TText>
        <View style={styles.customerInfo}>
          <TText T="16" F="light" C="black" style={styles.label}>
            Name:
          </TText>
          <TText T="16" F="light" C="black" style={styles.text}>
            {item.user.fullName}
          </TText>
        </View>
        <View style={styles.customerInfo}>
          <TText T="16" F="light" C="black" style={styles.label}>
            Email:
          </TText>
          <TText T="16" F="light" C="black" style={styles.text}>
            {item.user.username}
          </TText>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemsContainer}>
        <TText T="18" F="regular" C="black" style={styles.subtitle}>
          Invoice Items
        </TText>
        {item.products.map((itemm) => (
          <View style={styles.item} key={itemm.id}>
            <TText T="16" F="light" C="black" style={styles.itemName}>
              {itemm.title}
            </TText>
            <TText T="16" F="regular" C="black" style={styles.itemTotal}>
              {itemm.price}$
            </TText>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <TText T="18" F="regular" C="black" style={styles.label}>
          Total:
        </TText>
        <TText T="16" F="semiBold" C="black" style={styles.total}>
          {item.totalPrice}$
        </TText>
      </View>
      <GradianButton T="18" F="semiBold" W="180">
        Pay
      </GradianButton>
    </View>
  );
};
export default OrderDetails;
