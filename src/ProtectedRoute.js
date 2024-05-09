import { useAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useUser } from "./Graphql/userContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation();
  const user = useUser();
  const role = user.roles;
  useEffect(() => {
    if (role==="admin") {
     
    }
  }, []);

  if (role==="user") {
    
  }

  return ;
};

export default ProtectedRoute;
