import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import AuctionCard from "../../../components/Cards/AuctionCard";
import ProductCard from "../../../components/Cards/ProductCard";
import { useUser } from "../../../Graphql/userContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";
import TText from "../../../components/TText";
import { useQuery } from "@apollo/client";
import { Categories_QUERY } from "../../../Graphql/querys";

const ChatMessage = ({ message, isUser }) => (
  <View
    style={[
      styles.messageContainer,
      isUser ? styles.userMessage : styles.botMessage,
    ]}
  >
    <Text style={styles.messageText}>{message}</Text>
  </View>
);
const HomeUser = () => {
  const navigation = useNavigation();
  const user = useUser();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    // Initialize conversation or load previous messages
    fetchMessages();
  }, []);
  const { dataCa, loadingCa, errorCat, refetchCat } = useQuery(
    Categories_QUERY,
    {
      pollInterval: 5000,
    }
  );
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInput = (searchQuery) => {
    setSearchQuery(searchQuery || " ");
  };

  const searchQueryy = searchQuery;

  const fetchMessages = async () => {
    // Replace with actual API call to fetch messages
    const fetchedMessages = []; // Example: await api.getMessages();
    setMessages(fetchedMessages);
  };

  const sendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage = { text: inputMessage, isUser: true };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Send message to Brevo API
      const response = await sendToBrevoAPI(inputMessage);

      if (response) {
        const botResponse = { text: response, isUser: false };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }
    }
  };

  const sendToBrevoAPI = async (message) => {
    // Replace with actual API call
    // Example:
    const response = await fetch("BREVO_API_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data.reply;
    return "This is a simulated bot response.";
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.Header}
      >
        <TextInput
          style={styles.SearchInput}
          placeholder="Search ..."
          value={searchQuery}
          onChangeText={handleSearchInput}
        />
        <View style={styles.iconImages}>
          <View style={styles.notif}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <Ionicons
                style={styles.notifIcon}
                name="notifications-outline"
                size={30}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.circle}>
              <TText T="14" F="bold" C="white" style={styles.statValue}>
                1
              </TText>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            {user.imageUrl ? (
              <Image
                style={styles.ProfileImage}
                source={{ uri: user.imageUrl }}
              />
            ) : (
              <Image
                style={styles.ProfileImage}
                source={require("../../../../assets/people19.png")}
              />
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.titre}>
        <FontAwesome5 name="fire" size={20} color="black" style={styles.icon} />
        <TText T="18" F="semiBold" C="black" style={styles.auctions}>
          Auctions :
        </TText>
      </View>
      <AuctionCard
        searchQueryy={searchQueryy}
        onPress={(card) =>
          navigation.navigate("AuctionDetails", { item: card })
        }
      ></AuctionCard>
      <View style={styles.titre}>
        <FontAwesome6
          name="boxes-stacked"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TText T="18" F="semiBold" C="black" style={styles.auctions}>
          Products :
        </TText>
      </View>
      <ProductCard
        searchQuery={searchQuery}
        onPress={(item) =>
          navigation.navigate("ProductDetails", { item: item })
        }
      />
    </SafeAreaView>
  );
};

export default HomeUser;
// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Text,
//   StyleSheet,
// } from "react-native";
// import { useUser } from "../../../Graphql/userContext";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// const ChatMessage = ({ message, isUser }) => (
//   <View
//     style={[
//       styles.messageContainer,
//       isUser ? styles.userMessage : styles.botMessage,
//     ]}
//   >
//     <Text style={styles.messageText}>{message}</Text>
//   </View>
// );

// const HomeUser = () => {
//   const navigation = useNavigation();
//   const user = useUser();
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");

//   useEffect(() => {
//     // Initialize conversation or load previous messages
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     // Replace with actual API call to fetch messages
//     const fetchedMessages = []; // Example: await api.getMessages();
//     setMessages(fetchedMessages);
//   };

//   const sendMessage = async () => {
//     if (inputMessage.trim()) {
//       const newMessage = { text: inputMessage, isUser: true };
//       setMessages([...messages, newMessage]);
//       setInputMessage("");

//       // Send message to Brevo API
//       const response = await sendToBrevoAPI(inputMessage);

//       if (response) {
//         const botResponse = { text: response, isUser: false };
//         setMessages((prevMessages) => [...prevMessages, botResponse]);
//       }
//     }
//   };

//   const sendToBrevoAPI = async (message) => {
//     // Replace with actual API call
//     // Example:
//     const response = await fetch("BREVO_API_URL", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message }),
//     });
//     const data = await response.json();
//     return data.reply;
//     return "This is a simulated bot response.";
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={({ item }) => (
//           <ChatMessage message={item.text} isUser={item.isUser} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.chatList}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={inputMessage}
//           onChangeText={setInputMessage}
//           placeholder="Type your message..."
//         />
//         <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
//           <Ionicons name="send" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   chatList: {
//     flex: 1,
//   },
//   messageContainer: {
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//   },
//   userMessage: {
//     backgroundColor: "#DCF8C6",
//     alignSelf: "flex-end",
//   },
//   botMessage: {
//     backgroundColor: "#ECECEC",
//     alignSelf: "flex-start",
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: "#ECECEC",
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "#F9F9F9",
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: "#007BFF",
//     borderRadius: 20,
//     padding: 10,
//     marginLeft: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default HomeUser;
