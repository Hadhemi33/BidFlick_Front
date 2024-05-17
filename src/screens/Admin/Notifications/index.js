import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery, useMutation } from "@apollo/client";
import { HISTORY_QUERY, ORDERS_QUERY } from "../../../Graphql/querys";
import { DELETE_ORDER_MUTATION } from "../../../Graphql/mutations";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useUser } from "../../../Graphql/userContext";
import NotificationAdmin from "./notificationAdmin";
import NotificationClient from "./notificationClient";

const Notifications = () => {
  const user = useUser();
  useEffect(() => {
    if (user.roles === "admin") {
      setIsAdmin(true);
    }
  }, [user.roles]);
  const [isAdmin, setIsAdmin] = useState(false);
  const connectedUserId = user.id;
  const [searchQuery, setSearchQuery] = useState("");
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

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <TText T="16" F="semiBold" C="black">
          Loading...
        </TText>
      </View>
    );
  }

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
      {isAdmin ? <NotificationAdmin /> : <NotificationClient />}
    </View>
  );
};

export default Notifications;
