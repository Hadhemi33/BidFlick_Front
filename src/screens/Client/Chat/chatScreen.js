// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { StreamChat } from "stream-chat";
// import {
//   OverlayProvider,
//   Chat,
//   ChannelList,
//   Channel,
//   MessageList,
//   MessageInput,
//   Thread,
//   MessageType,
// } from "stream-chat-expo";
// import { useUser } from "../../../Graphql/userContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const StreamClient = StreamChat.getInstance("b68fsmsejna4");

// const ChatScreen = () => {
//   console.log(1);

//   const [clientReady, setClientReady] = useState(false);
//   console.log(2);

//   const [channel, setChannel] = useState(null);
//   console.log(3);
//   const [storedToken, setToken] = useState(null); // <-- Add this line to declare token state
//   const [thread, setThread] = useState(null);

//   console.log(4);

//   const user = useUser();

//   useEffect(() => {
//     const setupClient = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem("accessToken");
//         setToken(storedToken);
//         console.log(storedToken);
//         const base64Url = storedToken.split(".")[1];
//         const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//         const payload = JSON.parse(atob(base64));

//         console.log(payload);
//         await StreamClient.connectUser(
//           {
//             id: user.id.toString(),
//             name: user.fullName,
//             image: user.imageUrl,
//           },
//           storedToken
//         );

//         setClientReady(true);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     setupClient();

//     return () => {
//       StreamClient.disconnectUser();
//     };
//   }, [user]);

//   //   const onBackPress = () => {
//   //     if (thread) {
//   //       setThread(null);
//   //     } else if (channel) {
//   //       setChannel(null);
//   //     }
//   //   };

//   if (!clientReady) return null;
//   console.log("StreamClient", StreamClient);

//   return (
//     <OverlayProvider>
//       <TouchableOpacity onPress={onBackPress} disabled={!channel}>
//         <View style={{ height: 60, paddingLeft: 16, paddingTop: 40 }}>
//           {channel && <Text>Back</Text>}
//         </View>
//       </TouchableOpacity>
//       <View style={{ flex: 1 }}>
//         <Chat client={StreamClient}>
//           {channel ? (
//             <Channel
//               channel={channel}
//               keyboardVerticalOffset={60}
//               thread={thread}
//               threadList={!!thread}
//             >
//               {thread ? (
//                 <Thread />
//               ) : (
//                 <>
//                   <MessageList onThreadSelect={(thread) => setThread(thread)} />
//                   <MessageInput />
//                 </>
//               )}
//             </Channel>
//           ) : (
//             <ChannelList onSelect={setChannel} />
//           )}
//         </Chat>
//       </View>
//     </OverlayProvider>
//   );
// };

// export default ChatScreen;
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StreamChat } from "stream-chat";
import {
  OverlayProvider,
  Chat,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
  Thread,
  MessageType,
} from "stream-chat-expo";
import { useUser } from "../../../Graphql/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StreamClient = StreamChat.getInstance("b68fsmsejna4");

const ChatScreen = () => {
  console.log(1);

  const [clientReady, setClientReady] = useState(false);
  console.log(2);

  const [channel, setChannel] = useState(null);
  console.log(3);
  const [storedToken, setToken] = useState(null); // <-- Add this line to declare token state
  const [thread, setThread] = useState(null);

  console.log(4);

  const user = useUser();

  useEffect(() => {
    const setupClient = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("accessToken");
        setToken(storedToken);

        const base64Url = storedToken.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        // const payload = JSON.parse(atob(base64));

        console.log("5");
        console.log(user.id.toString());
        await StreamClient.connectUser(
          {
            id: user.id.toString(),
            name: user.fullName,
            // image: user.imageUrl,
          },
          StreamClient.devToken(user.id.toString())
        );

        setClientReady(true);
      } catch (e) {
        console.error(e);
      }
    };

    setupClient();

    return () => {
      StreamClient.disconnectUser();
    };
  }, [user]);

  // Static message data
  const staticMessages = [
    { id: "1", text: "Hello!", user: { id: "1", fullName: "John" } },
    { id: "2", text: "Hi there!", user: { id: "2", fullName: "Jane" } },
  ];

  const onBackPress = () => {
    if (thread) {
      setThread(null);
    } else if (channel) {
      setChannel(null);
    }
  };
  console.log("thread", thread);

  if (!clientReady) return null;
  console.log("clientReady", clientReady);

  return (
    <OverlayProvider>
      <TouchableOpacity onPress={onBackPress} disabled={!channel}>
        <View style={{ height: 60, paddingLeft: 16, paddingTop: 40 }}>
          {channel && <Text>Back</Text>}
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Chat client={StreamClient}>
          {channel ? (
            <Channel
              channel={channel}
              keyboardVerticalOffset={60}
              thread={thread}
              threadList={!!thread}
            >
              {thread ? (
                <Thread />
              ) : (
                <>
                  <MessageList
                    messages={staticMessages} // Pass the static messages here
                    onThreadSelect={handleThreadSelect}
                  />
                  <MessageInput />
                </>
              )}
            </Channel>
          ) : (
            <ChannelList onSelect={setChannel} />
          )}
        </Chat>
      </View>
    </OverlayProvider>
  );
};

export default ChatScreen;
