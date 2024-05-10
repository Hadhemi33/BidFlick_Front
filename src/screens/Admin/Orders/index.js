import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery, useMutation } from "@apollo/client";
import { HISTORY_QUERY, ORDERS_QUERY } from "../../../Graphql/querys";
import { DELETE_ORDER_MUTATION } from "../../../Graphql/mutations";
import styles from "./style";

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
            <AntDesign name="delete" size={18} color="red" />
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
          <TText T="14" F="regular" C="black" style={styles.statValue}>
            {paidAt}
          </TText>
          <TText T="14" F="regular" C="black" style={styles.statValue}>
            {totalPrice}
          </TText>
        </View>
        <View style={styles.delAdd}>
          <TouchableOpacity style={styles.delUser}>
            <AntDesign name="delete" size={18} color="red" />
          </TouchableOpacity>
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
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading users: {error.message}</Text>
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
            placeholder="Search order"
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
