import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"; // Thêm useNavigation
import { Ionicons } from '@expo/vector-icons'; 

export default function Screen03() {
  const route = useRoute();
  const navigation = useNavigation(); // Khai báo useNavigation
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" /> {/* Sử dụng icon back */}
      </TouchableOpacity>
      <View style={styles.productContainer}>
        {/* Bike Image */}
        <Image style={styles.productImage} source={product.image} />

        {/* Product Information */}
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.discountText}>
          {product.discount} OFF | {product.discountPrice}$
        </Text>
        <Text style={styles.originalPrice}>{product.originalPrice}$</Text>

        {/* Description */}
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  goBack: {
    marginBottom: 20, // Thêm khoảng cách dưới nút back
  },
  productContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  discountText: {
    color: "red",
    fontSize: 18,
    marginTop: 5,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 16,
    color: "#888",
  },
  descriptionTitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 22,
  },
  addToCartButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
