import React from "react";
import { useQuery } from "@apollo/client";

import { Text } from "react-native";
import { AuthUser_QUERY } from "./querys";
import UserContext from "./userContext";

const UserProvider = ({ children }) => {
  const { data, loading, error } = useQuery(AuthUser_QUERY);

  if (loading) {
    return <Text>Loading user data...</Text>;
  }

  if (error) {
    return <Text>Error loading user data: {error.message}</Text>;
  }

  const user = data.getAuthUser;

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
