import React from "react";
import { useQuery } from "@apollo/client";


import { AuthUser_QUERY } from "./querys";
import UserContext from "./userContext";
import TText from "../components/TText";

const UserProvider = ({ children }) => {
  const { data, loading, error } = useQuery(AuthUser_QUERY, {
    pollInterval: 1000,
  });

  if (loading) {
    return (
      <TText T="16" F="semiBold" C="black">
        Loading user data...
      </TText>
    );
  }

  if (error) {
    return (
      <TText T="16" F="semiBold" C="black">
        Error loading user data: {error.message}
      </TText>
    );
  }

  const user = data.getAuthUser;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
