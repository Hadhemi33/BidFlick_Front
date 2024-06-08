import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../../Graphql/querys";

import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import UserListItem from "../../../components/Chat";

import { useNavigation } from "@react-navigation/native";
const StreamClient = StreamChat.getInstance("b68fsmsejna4");

const NewChannel = () => {
  const { data, loading, error } = useQuery(USERS_QUERY, {
    pollInterval: 5000,
  });
  const [users, setUsers] = useState([]);

  const navigation = useNavigation();


  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <OverlayProvider>
      <Chat client={StreamClient}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserListItem user={item} navigation={navigation} />
          )}
        />
      </Chat>
    </OverlayProvider>
  );
};

export default NewChannel;
