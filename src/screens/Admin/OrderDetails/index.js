import React, { useCallback } from "react";
import { View, Alert } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { HISTORY_QUERY, ORDERS_QUERY } from "../../../Graphql/querys";
import { DELETE_ORDER_MUTATION } from "../../../Graphql/mutations";
import { useFocusEffect } from "@react-navigation/native";
import TText from "../../../components/TText";
import PaymentScreen from "../../Client/Payment";
import styles from "./style";

const OrderDetails = ({ route }) => {
  const { item } = route.params;
  const { refetch } = useQuery(ORDERS_QUERY, {
    pollInterval: 5000,
  });
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    refetchQueries: [{ query: ORDERS_QUERY }, { query: HISTORY_QUERY }],
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const handleDeleteOrder = async (id) => {
    try {
      await deleteOrder({ variables: { id } });
      Alert.alert("Success", `Order Deleted.`);
      refetch();
    } catch (error) {
      console.error("Error updating role:", error);
      Alert.alert("Error", `An error occurred while updating the role.`);
    }
  };

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
      <PaymentScreen
        style={styles.pay}
        amountTotal={item.totalPrice}
        id={item.id}
      />
    </View>
  );
};

export default OrderDetails;
