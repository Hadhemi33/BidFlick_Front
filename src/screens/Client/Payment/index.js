import React, { useState } from "react";
import { View, Button, Alert, SafeAreaView } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import styles from "./style";
import { PAYMENT_MUTATION } from "../../../Graphql/mutations";
import { useMutation } from "@apollo/client";

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [createPaymentIntent] = useMutation(PAYMENT_MUTATION);
  const [clientSecret, setClientSecret] = useState(null);

  const pay = async (amount, currency) => {
    try {
      const data = await createPaymentIntent({
        variables: {
          amount: 5000,
          currency: "usd",
        },
      });

      const clientSecret = data.createPaymentIntent;
      setClientSecret(clientSecret);
      handlePayPress(clientSecret);
      Alert.alert("Success", `payment ok.`);
    } catch (error) {
      console.log(data.createPaymentIntent);

      console.error("Error payment :", error);
      Alert.alert("Error", `An error occurred while payment.`);
    }
  };

  const handlePayPress = async (clientSecret) => {
    const billingDetails = {
      email: "jenny.rosen@example.com",
    };

    try {
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        type: "Card",
        billingDetails,
      });

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else if (paymentIntent) {
        Alert.alert("Success", "The payment was confirmed successfully!");
      }
    } catch (e) {
      console.log("ee", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
      />
      <Button onPress={pay} title="Pay" />
    </SafeAreaView>
  );
};

export default PaymentScreen;
