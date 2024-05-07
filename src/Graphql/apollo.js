import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const client = new ApolloClient({
  uri: "http://192.168.137.1:3001/graphql",
  link: createUploadLink({ uri: "http://192.168.137.1:3001/graphql" }),
  // uri: "http://192.168.0.105:3001/graphql",
  cache: new InMemoryCache(),
});

export default client;
