// import React from "react";
// import { View, Text } from "react-native";
// import { Chat, Channel, ChannelList, MessageList } from "stream-chat-expo";
// import client from "./Graphql/apollo";
// import { useNavigation } from "@react-navigation/native";
// // Define placeholder components or variables
// const ChannelPreviewMessenger = () => (
//   <View>
//     <Text>ChannelPreviewMessenger</Text>
//   </View>
// );
// const channel = {}; // Placeholder object for channel
// const MessageSimple = () => (
//   <View>
//     <Text>MessageSimple</Text>
//   </View>
// );

// const ChatScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <Chat client={client}>
//       <ChannelList
//         filters={{}}
//         Preview={ChannelPreviewMessenger}
//         onSelect={(channel) => {
//           navigation.navigate("Home", {
//             channelId: channel.id,
//           });
//         }}
//       />
//       <Channel channel={channel} Message={MessageSimple}>
//         <MessageList
//           onThreadSelect={(thread) =>
//             navigation.navigate("Thread", {
//               threadId: thread.id,
//             })
//           }
//         />
//       </Channel>
//     </Chat>
//   );
// };

// export default ChatScreen;
