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
import { DELETE_ORDER, VALIDATE_ORDER } from "../../../Graphql/mutations";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useUser } from "../../../Graphql/userContext";

const OrdersClient = () => {
  const user = useUser();
  const connectedUserId = user.id;
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: HisData,
    loading: Hisloading,
    error: HisError,
    refetch: HisRefetch,
  } = useQuery(HISTORY_QUERY, {
    pollInterval: 3000,
  });
  const { data, loading, error, refetch } = useQuery(ORDERS_QUERY, {
    pollInterval: 5000,
  });
  const [deleteOrder] = useMutation(DELETE_ORDER, {
    refetchQueries: [{ query: ORDERS_QUERY, query: HISTORY_QUERY }],
  });
  const [validateOrder, { loadingAdd, errorAdd, dataAdd }] = useMutation(
    VALIDATE_ORDER,
    {
      refetchQueries: [{ query: ORDERS_QUERY }],
    }
  );

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
  const handleValidOrder = async (idd) => {
    try {
      console.log("Validating order with id:", idd);
      const valData = await validateOrder({
        variables: {
          orderId: "33",
        },
      });
      HisRefetch();
      Alert.alert("Success", `Order validated.`);
    } catch (e) {
      console.error("Error validating order:", e);
      Alert.alert("Error", `An error occurred while validating order.`);
    }
  };

  const handleDeleteOrder = async (id) => {
    console.log("id", id);
    try {
      const oddata = await deleteOrder({
        variables: {
          orderId: id,
        },
      });
      HisRefetch();
      Alert.alert("Success", `Order Deleted.`);
    } catch (error) {
      console.error("Error deleting order:", HisError);
      Alert.alert("Error", `An error occurred while deleting order.`);
    }
  };

  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };

  const CardCat = ({ item }) => {
    const { id,  paid, createdAt } = item;
    const date = createdAt.slice(0, 19).replace("T", " ");
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
            {date}
          </TText>
          <View style={{ flexDirection: "row" }}>
            <TText T="14" F="regular" C="black" style={styles.statValue}>
              N°
            </TText>
            <TText T="14" F="regular" C="black" style={styles.statValue}>
              {id}
            </TText>
          </View>
          {paid === true ? (
            <TText T="14" F="regular" C="black" style={styles.statValue}>
              paid
            </TText>
          ) : (
            <TText T="14" F="regular" C="black" style={styles.statValue}>
              not paid
            </TText>
          )}
        </View>
        <View style={styles.delAdd}>
          <TouchableOpacity
            style={styles.delUser}
            onPress={() => {
              handleValidOrder(item.id);
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
  const filtredOrders = data
    ? data.getAllOrders.filter((order) => order.user.id === connectedUserId)
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
          data={filtredOrders}
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

export default OrdersClient;
