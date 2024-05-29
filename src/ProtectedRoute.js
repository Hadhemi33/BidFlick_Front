// import { useAuth } from "./AuthContext";
// import { useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { View, Text } from "react-native";
// import { useUser } from "./Graphql/userContext";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   const navigation = useNavigation();
//   const user = useUser();
//   const role = user.roles;
//   useEffect(() => {
//     if (role==="admin") {

//     }
//   }, []);

//   if (role==="user") {

//   }

//   return ;
// };

// export default ProtectedRoute;
import React, { useEffect, useState } from "react";
import { Pressable, View, Text, Alert } from "react-native";
import "@walletconnect/react-native-compat";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import styles from "./screens/common/Splash/style";
import { UPDATE_USER_MUTATION } from "./Graphql/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "./Graphql/userContext";

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
  const handleFormSubmit = async () => {
    console.log("Submitting with:", { addres });

    try {
      const { data } = await updateUser({
        variables: {
          updateUserInput: {
            address,
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
  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_USER_MUTATION);
  const { isOpen, open, close, provider, isConnected, address } =
    useWalletConnectModal();
  const [addres, setAddress] = useState("");
  useEffect(() => {
    if (user) {
      setAddress(user.address || "");
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <Text>hii wallet</Text>
      <Text>hii wallet</Text>
      <Pressable onPress={() => open()} style={{ marginTop: 16 }}>
        <Text>{isConnected ? address : "Connect"}</Text>
      </Pressable>
      <Text onPress={handleFormSubmit}>hii wallet</Text>

      <WalletConnectModal
        accentColor="#9090FF"
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
};
export default Meta;
