import React, { useCallback, useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery, useMutation } from "@apollo/client";
import {
  HISTORY_QUERY,
  NOTIFICATION_QUERY,
  ORDERS_QUERY,
} from "../../../Graphql/querys";
import { DELETE_ORDER_MUTATION } from "../../../Graphql/mutations";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useUser } from "../../../Graphql/userContext";

const Notifications = () => {
  const user = useUser();

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
  const { data, loading, error, refetch } = useQuery(NOTIFICATION_QUERY, {
    pollInterval: 5000,
  });

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };
  const filtredOrders = data
    ? data.getNotifications.filter((notif) => notif.user.id === connectedUserId)
    : [];
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
  const CardCat = ({ item }) => {
    const { id, user, message } = item;

    return (
      <View style={styles.userItem}>
        <View style={styles.infos}>
          {/* <TText
            T="14"
            F="regular"
            C="black"
            style={styles.statValue}
            onPress={() => navigation.navigate("OrderDetails", { item })}
          >
            {id}
          </TText> */}
          <TText
            T="14"
            F="regular"
            C="black"
            style={styles.statValue}
            onPress={() => navigation.navigate("OrderDetails", { item })}
          >
            {message}
          </TText>
        </View>
        <View style={styles.delAdd}>
          <TouchableOpacity
            style={styles.delUser}
            onPress={() => {
              handleDeleteOrder(item.id);
            }}
          >
            <MaterialIcons name="delete-forever" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
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
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search order.."
            value={searchQuery}
            onChangeText={handleSearchInput}
          />
        </View>
      </View>

      <View style={styles.statsCard}>
        <FlatList
          data={filtredOrders}
          keyExtractor={(item, index) => item.id}
          numColumns={1}
          renderItem={({ item }) => <CardCat item={item} />}
        />
      </View>
    </View>
  );
};

export default Notifications;
