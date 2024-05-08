import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { setContext } from "apollo-link-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const httpLink = createHttpLink({
  uri: "http://192.168.137.1:3001/graphql",
});

export const getAccessToken = async () => {
  try {
    const res = await AsyncStorage.getItem("accessToken");
    console.log("res", res);
    return res;
  } catch (e) {
    console.error("Error retrieving token:", e);
  }
  return null;
};
const authLink = setContext(async (_, { headers }) => {
  const token = await getAccessToken();
  console.log("Token in authLink:", token); // Check if token is retrieved
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
