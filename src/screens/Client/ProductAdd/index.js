import React from "react";
// import CreateProduct from "../CreateProductComponent";
import { SafeAreaView } from "react-native";
import styles from "./style";
import UploadProductImage from "../CreateProductComponent";

function ProductAdd() {
  return (
    <SafeAreaView style={styles.container}>
      <UploadProductImage />
    </SafeAreaView>
  );
}

export default ProductAdd;
