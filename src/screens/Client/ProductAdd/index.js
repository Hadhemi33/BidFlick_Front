import React from "react";
import CreateProduct from "../CreateProductComponent";
import { SafeAreaView } from "react-native";
import styles from "./style";

function ProductAdd() {
  return (
    <SafeAreaView style={styles.container}>
      <CreateProduct />
    </SafeAreaView>
  );
}

export default ProductAdd;
