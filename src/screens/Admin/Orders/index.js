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
import { DELETE_ORDER } from "../../../Graphql/mutations";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import TText from "../../../components/TText";

const Orders = () => {
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
  const [deleteOrder] = useMutation(DELETE_ORDER, {
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
          orderId: id,
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
          <TText T="14" F="regular" C="black" style={styles.statValue}>
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
  const CardHis = ({ item }) => {
    const { id, totalPrice, paidAt } = item;

    return (
      <View style={styles.userItem}>
        <View style={styles.infos}>
          <TText T="14" F="regular" C="black" style={styles.statValue}>
            {id}
          </TText>
          <TText T="10" F="regular" C="black" style={styles.statValue}>
            {paidAt}
          </TText>
          <TText T="11" F="regular" C="black" style={styles.statValue}>
            {totalPrice}
          </TText>
        </View>
      </View>
    );
  };
  const filtredUsers = data
    ? data.getAllOrders.filter((order) => {
        const searchLower = searchQuery.toLowerCase();

        const matchesOrderId = order.id.toLowerCase().includes(searchLower);
        const matchesUserFullName = order.user?.fullName
          ?.toLowerCase()
          .includes(searchLower);

        return matchesOrderId || matchesUserFullName;
      })
    : [];
  const filtredHistory = HisData
    ? HisData.getAllOrderHistory.filter((history) => {
        const searchLower = searchQuery.toLowerCase();

        const matchesOrderId = history.id.toLowerCase().includes(searchLower);

        return matchesOrderId;
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
          data={filtredUsers}
          keyExtractor={(item, index) => item.id}
          numColumns={1}
          renderItem={({ item }) => <CardCat item={item} />}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/archive.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TText T="16" F="regular" C="sea">
          Archives
        </TText>
      </View>

      <View style={styles.statsCard}>
        <FlatList
          data={filtredHistory}
          keyExtractor={(item, index) => item.id}
          numColumns={1}
          renderItem={({ item }) => <CardHis item={item} />}
        />
      </View>
    </View>
  );
};

export default Orders;
