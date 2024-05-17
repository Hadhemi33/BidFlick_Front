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
import { NOTIFICATION_QUERY } from "../../../Graphql/querys";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useUser } from "../../../Graphql/userContext";
import { DELETE_NOTIF } from "../../../Graphql/mutations";

const Notifications = () => {
  const user = useUser();

  const connectedUserId = user.id;
  const [searchQuery, setSearchQuery] = useState("");

  const { data, loading, error, refetch } = useQuery(NOTIFICATION_QUERY, {
    pollInterval: 1000,
  });
  const [deleteNotification] = useMutation(DELETE_NOTIF, {
    refetchQueries: [{ query: NOTIFICATION_QUERY }],
  });
  const handleDeleteNotif = async (id) => {
    try {
      console.log(typeof id);

      const deldata = deleteNotification({
        variables: {
          id: id.toString(),
        },
      });
      refetch();
      Alert.alert("Success", `notif Deleted.`);
    } catch (error) {
      console.error("Error deleting Notification:", HisError);
      console.log("id", id);

      Alert.alert(
        "Error",
        `An error occurred while deleting the notification.`
      );
    }
  };

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
  const filtredUsers = filtredOrders
    ? filtredOrders.filter((order) => {
        const searchLower = searchQuery.toLowerCase();

        const matchesUserFullName = order.message
          ?.toLowerCase()
          .includes(searchLower);

        return matchesUserFullName;
      })
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
    const { id, user, message, createdAt } = item;
    const date = createdAt.slice(0, 19).replace("T", " ");
    console.log(date);
    return (
      <View style={styles.userItem}>
        <View style={styles.infos}>
          <TText
            T="10"
            F="regular"
            C="darkGrey"
            style={styles.statValue}
            onPress={() => navigation.navigate("OrderDetails", { item })}
          >
            {date}
          </TText>
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
              handleDeleteNotif(item.id);
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
          data={filtredUsers}
          keyExtractor={(item, index) => item.id}
          numColumns={1}
          renderItem={({ item }) => <CardCat item={item} />}
        />
      </View>
    </View>
  );
};

export default Notifications;
