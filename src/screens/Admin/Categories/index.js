import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./style";
import { AntDesign, Feather } from "@expo/vector-icons";
const CategoriesScreen = () => {
  const [data, setData] = useState([
    { category: "Clothing", value: 1000 },
    { category: "Games", value: 500 },
    { category: "Shoes", value: 2000 },
    { category: "Followers", value: 1000 },

    { category: "Electronics", value: 7500 },
    { category: "Beauty and Care", value: 66000 },
    { category: "Books", value: 3300 },
    { category: "Food", value: 1000 },
  ]);

  const CardCat = ({ item }) => (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{item.category}</Text>
      <Text style={styles.statsCategory}>{item.value}</Text>

      <TouchableOpacity>
        <AntDesign
          name="delete"
          size={16}
          color="red"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search ..."
          ></TextInput>
        </View>
      </View>
      <View style={styles.statsCard}>
        <FlatList
          data={data}
          renderItem={CardCat}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesScreen;
