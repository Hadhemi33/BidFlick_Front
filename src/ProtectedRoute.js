import { useAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("SignIn");
    }
  }, [isAuthenticated, navigation]);

  if (!isAuthenticated) {
    return (
      <View>
        <Text>Redirecting to sign-in...</Text>
      </View>
    );
  }

  return children;
};

export default ProtectedRoute;
