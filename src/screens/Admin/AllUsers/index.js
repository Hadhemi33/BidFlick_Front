import React, { useCallback, useState } from "react";
import {
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
import { USERS_QUERY } from "../../../Graphql/querys";
import {
  CHANGE_ROLE_MUTATION,
  DELETE_USER_MUTATION,
} from "../../../Graphql/mutations";
import styles from "./style";

import TText from "../../../components/TText";

const AllUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error, refetch } = useQuery(USERS_QUERY, {
    pollInterval: 5000,
  });
  const [updateUserRole] = useMutation(CHANGE_ROLE_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
  const changeUserRole = async (id, currentRole) => {
    console.log("id", id, "role", currentRole);
    const newRole = currentRole === "user" ? "subadmin" : "user";

    try {
      const data = await updateUserRole({
        variables: {
          updateUserInput: { roles: newRole },

          id,
        },
      });
      refetch();
      Alert.alert("Success", `Role updated to "${newRole}".`);
    } catch (error) {
      console.error("Error updating role:", error);
      Alert.alert("Error", `An error occurred while updating the role.`);
    }
  };
  const deleteuser = async (id) => {
    console.log("id", id);

    try {
      const data = await deleteUser({
        variables: {
          id,
        },
      });
      refetch();
      Alert.alert("Success", `User Deleted.`);
    } catch (error) {
      console.error("Error deleting user:", error);
      Alert.alert("Error", `An error occurred while deleting this user.`);
    }
  };

  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };

  const CardCat = ({ item }) => {
    const { id, fullName, roles } = item;
    const isAdmin = roles === "user";
    return (
      <View style={styles.userItem}>
        <View style={styles.infos}>
          <TText T="12" F="regular" C="black" style={styles.statValue}>
            {fullName}
          </TText>
          <View style={styles.nbr}>
            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity style={styles.delUser}>
                  <AntDesign name="arrowup" size={14} color="grey" />
                </TouchableOpacity>
                <TText T="11" F="light" C="black" style={styles.productCount}>
                  {item.products.length}
                </TText>
              </View>
              <TText T="13" F="regular" C="black">
                P
              </TText>
              <View style={styles.column}>
                {/* <TText T="11" F="light" C="black" style={styles.productCount}>
                  {item.products.length}
                </TText> */}
                {/* <TouchableOpacity style={styles.delUser}>
                  <AntDesign name="arrowdown" size={14} color="grey" />
                </TouchableOpacity> */}
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity style={styles.delUser}>
                  <AntDesign name="arrowup" size={14} color="grey" />
                </TouchableOpacity>
                <TText T="11" F="light" C="black" style={styles.productCount}>
                  {item.products.length}
                </TText>
              </View>
              <TText T="13" F="regular" C="black">
                A
              </TText>
              {/* <View style={styles.column}>
                <TText T="11" F="light" C="black" style={styles.productCount}>
                  {item.products.length}
                </TText>
                <TouchableOpacity style={styles.delUser}>
                  <AntDesign name="arrowdown" size={14} color="grey" />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        </View>
        <View style={styles.delAdd}>
          <TouchableOpacity
            style={styles.delUser}
            onPress={() => changeUserRole(id, roles)}
          >
            {isAdmin ? (
              <AntDesign name="adduser" size={22} color="green" />
            ) : (
              <AntDesign name="deleteuser" size={24} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteuser(id)}
            style={styles.delUser}
          >
            <AntDesign name="delete" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // const filtredUsers = data
  //   ? data.getAllUsers.filter((user) =>
  //       user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   : [];
  const filtredUsers = data
    ? data.getAllUsers.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          user.fullName !== "Hadhemi"
      )
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
            placeholder="Search user.."
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

export default AllUsers;
