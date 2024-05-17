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

const NotificationAdmin = () => {
  const user = useUser();

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

  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };

  const CardCat = ({ item }) => {
    const { id, user, products } = item;

    return (
      <View style={styles.userItem}>
        <View style={styles.infos}>
          <TText
            T="14"
            F="regular"
            C="black"
            style={styles.statValue}
            onPress={() => navigation.navigate("OrderDetails", { item })}
          >
            {id}
          </TText>
          <TText T="14" F="regular" C="black" style={styles.statValue}>
            {user.fullName}
          </TText>
          <TText T="14" F="regular" C="black" style={styles.statValue}>
            {products.length}
          </TText>
        </View>
        <View style={styles.delAdd}>
          <TouchableOpacity
            style={styles.delUser}
            onPress={() => {
              handleDeleteOrder(item.id);
            }}
          >
            <AntDesign name="check" size={24} color="green" />
          </TouchableOpacity>
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

  const filtredOrders = data
    ? data.getAllOrders.filter((order) => order.user.id === connectedUserId)
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
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/order.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
        <TText T="16" F="regular" C="sea">
          All Orders
        </TText>
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

export default NotificationAdmin;
