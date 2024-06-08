import React from "react";
import { View, Text, Pressable } from "react-native";
import { useChatContext } from "stream-chat-expo";
import { useUser } from "../../Graphql/userContext";

const UserListItem = ({ user, navigation }) => {
  const { client } = useChatContext();
  const me = useUser(); // Current user

  const startChannel = async () => {
    const channel = client.channel("messaging", {
      members: [user.id.toString(), me.id.toString()],
    });
    await channel.watch();

    navigation.navigate("Channel", { channelId: channel.id });
  };

  return (
    <Pressable
      onPress={startChannel}
      style={{
        backgroundColor: "white",
        margin: 5,
        marginVertical: 3,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text>{user.name}</Text>
    </Pressable>
  );
};

export default UserListItem;
