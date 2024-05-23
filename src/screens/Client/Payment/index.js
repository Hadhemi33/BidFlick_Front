import React, { useState } from "react";
import { View, Alert, SafeAreaView, ActivityIndicator } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { useMutation } from "@apollo/client";
import { PAYMENT_MUTATION } from "../../../Graphql/mutations";
import GradianButton from "../../../components/Buttons/GradianButton";
import { colors } from "../../../constants/colors";
import styles from "./style";

const PaymentScreen = ({ style, amountTotal, id }) => {
  const { confirmPayment } = useStripe();
  const [createPaymentIntent] = useMutation(PAYMENT_MUTATION);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);

  const pay = async () => {
    setLoading(true);

    try {
      console.log("Payment Variables: ", {
        orderId: id,
        amount: parseFloat(amountTotal),
        currency: "usd",
      });
      const { data } = await createPaymentIntent({
        variables: {
          orderId: id,
          amount: parseFloat(amountTotal),
          currency: "usd",
        },
      });

      const clientSecret = data.createPaymentIntent;
      setClientSecret(clientSecret);
      await handlePayPress(clientSecret);
      Alert.alert("Success", "Payment successful.");
    } catch (error) {
      console.error("Error payment:", error);
      Alert.alert("Error", "An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayPress = async (clientSecret) => {
    const billingDetails = {
      email: "jenny.rosen@example.com",
    };

    try {
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
        billingDetails,
      });

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else if (paymentIntent) {
        Alert.alert("Success", "The payment was confirmed successfully!");
      }
    } catch (e) {
      console.error("Payment confirmation error:", e);
    }
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        style={{
          alignSelf: "flex-start",
          width: "90%",
          height: 50,
          marginVertical: 30,
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <GradianButton T="18" F="semiBold" W="180" onPress={() => pay()}>
          Pay
        </GradianButton>
      )}
    </SafeAreaView>
  );
};

export default PaymentScreen;
