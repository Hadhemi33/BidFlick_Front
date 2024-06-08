import React, { useEffect, useState } from "react";
import { View, Alert, Text } from "react-native";
import "@walletconnect/react-native-compat";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { UPDATE_USER_MUTATION } from "../../../Graphql/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "../../../Graphql/userContext";
import LightButton from "../../../components/Buttons/LightButton";
import styles from "./style";

const projectId = "e2394091d48ce9ba4b9f2373715f77a6";

const providerMetadata = {
  name: "Bid",
  description: "AuctionApp",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const Meta = () => {
  const user = useUser();
  const [addres, setAddress] = useState("");
  const { isOpen, open, close, provider, isConnected, address, disconnect } =
    useWalletConnectModal();

  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_USER_MUTATION);

  useEffect(() => {
    if (user) {
      setAddress(user.address || "");
    }
  }, [user]);

  const handleFormSubmit = async () => {
    console.log("Submitting with:", { address });

    try {
      const { data } = await updateUser({
        variables: {
          updateUserInput: {
            address: address,
          },
        },
      });
      console.log("User updated:", data.updateUser);
      Alert.alert("Success", "Profile updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      Alert.alert("Error", "Could not update account");
    }
  };

  const handleOpenModal = () => {
    console.log("Opening WalletConnect modal...");
    open();
    console.log("Modal state isOpen:", isOpen);
  };

  const handleDisconnect = () => {
    console.log("Disconnecting WalletConnect...");
    provider.disconnect();

    console.log("Disconnected");
  };

  return (
    <View style={styles.container}>
      <LightButton T="18" F="semiBold" W="180" onPress={handleOpenModal}>
        {isConnected ? "Change Account" : "Connect Wallet"}
      </LightButton>
      <Text>
        {isConnected
          ? `Connected with ${address}`
          : "Not connected. Click to connect"}
      </Text>
      {isConnected && (
        <LightButton T="18" F="semiBold" W="180" onPress={handleDisconnect}>
          Disconnect
        </LightButton>
      )}
      <LightButton T="18" F="semiBold" W="180" onPress={handleFormSubmit}>
        Update
      </LightButton>
      <WalletConnectModal
        accentColor="#9090FF"
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
};

export default Meta;
