import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../../Graphql/querys";

import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import UserListItem from "../../../components/Chat";

import { useNavigation } from "@react-navigation/native";
const StreamClient = StreamChat.getInstance("b68fsmsejna4");
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Alice" },
//   { id: 4, name: "Bob" },
//   // Add more static user data as needed
// ];
const NewChannel = () => {
  const { data, loading, error } = useQuery(USERS_QUERY, {
    pollInterval: 5000,
  });
  const [users, setUsers] = useState([]);

  const navigation = useNavigation();

  //   useEffect(() => {
  //     if (data) {
  //       setUsers(data.getAllUsers);
  //     }
  //   }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  // return (
  //   <OverlayProvider>
  //     <Chat client={StreamClient}>
  //       <FlatList
  //         data={users}
  //         keyExtractor={(item) => item.id.toString()}
  //         renderItem={({ item }) => (
  //           <UserListItem user={item} navigation={navigation} />
  //         )}
  //       />
  //     </Chat>
  //   </OverlayProvider>
  // );
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
