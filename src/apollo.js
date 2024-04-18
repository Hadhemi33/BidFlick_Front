import { ApolloClient, InMemoryCache } from "@apollo/client";
// const BASE_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";
const BASE_URL = "http://192.168.224.1:4000/graphql";
const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
