import React, { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/client";
import {
  CREATE_AUCTION_MUTATION,
  CREATE_PRODUCT_MUTATION,
} from "../../../Graphql/mutations";

import GradianButton from "../../../components/Buttons/GradianButton";
import LightButton from "../../../components/Buttons/LightButton";
import styles from "./style";
import CategorySelector from "../CategorySelector";
import FilePickerComponent from "../../../components/FilePickerComponent";
import { Alert } from "react-native";
import TText from "../../../components/TText";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
function AuctionAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [createSpecialProduct, { loading, error, data }] = useMutation(
    CREATE_AUCTION_MUTATION
  );
  const handleFileSelected = (url) => {
    setImageUrl(url);
    console.log("Image URL received:", url);
  };
  const formattedDate = `${date.toISOString().split("T")[0]} ${
    time.toTimeString().split(" ")[0]
  }`;

  const handleSubmit = async () => {
    if (!imageUrl) {
      Alert.alert("Warning", "Please upload an image first.");
      return;
    }
    try {
      const result = await createSpecialProduct({
        variables: {
          createSpecialProductInput: {
            title,
            description,
            price,
            discount,
            categoryId: selectedCategories,
            imageUrl,
            endingIn: formattedDate,
          },
        },
      });
      console.log("Product created successfully", result);
    } catch (mutationError) {
      console.error("Error creating product:", mutationError);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TText T="30" F="semiBold" C="black">
          Create a new Auction
        </TText>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 0,
            width: "30%",
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <FilePickerComponent
          styleCont={styles.cont}
          onFileSelected={handleFileSelected}
          styleImage={styles.image}
          I={require("../../../../assets/changeImage.png")}
        />
        <TText T="16" F="regular" C="lightGrey">
          Add picture
        </TText>
      </View>
      <View style={styles.Forms}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Discount"
          keyboardType="numeric"
          value={discount}
          onChangeText={setDiscount}
        />
        <View style={styles.timePick}>
          <TText T="16" F="regular" C="black">
            You want it to End at :
          </TText>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Ionicons
              name="calendar-sharp"
              size={30}
              color="green"
              style={styles.calendar}
            />
          </TouchableOpacity>
          <TText T="16" F="regular" C="black">
            {`   in :`}
          </TText>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <Ionicons
              name="time"
              size={30}
              color="green"
              style={styles.calendar}
            />
          </TouchableOpacity>
        </View>

        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime !== undefined) {
                setTime(selectedTime);
              }
              console.log(selectedTime);
            }}
          />
        )}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate !== undefined) {
                setDate(selectedDate);
              }
              console.log(selectedDate);
            }}
          />
        )}
        <CategorySelector
          selectedCategories={selectedCategories}
          onChange={setSelectedCategories}
        />
        <View style={{ width: "40%", height: "20%" }}></View>

        {loading && (
          <TText T="16" F="semiBold" C="black">
            Loading...
          </TText>
        )}
        {error && (
          <TText T="16" F="semiBold" C="black">
            Error: {error.message}
          </TText>
        )}
        {data && (
          <Text>Auction Created: {data.createSpecialProduct.title}</Text>
        )}
      </View>
      <Text onPress={handleSubmit}>Create</Text>
    </SafeAreaView>
  );
}

export default AuctionAdd;
