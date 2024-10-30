import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 
export default function Screen02() {
  const navigation = useNavigation();

  const bikeData = [
    {
      name: "Pinarello",
      price: "$1800",
      discount: "15%",
      discountPrice: 1500,
      originalPrice: 1800,
      description:
        "Pinarello bike is designed for performance and precision.",
      image: require("../assets/item_first.png"),
    },
    {
      name: "Pina Mountai",
      price: "$1700",
      discount: "10%",
      discountPrice: 1350,
      originalPrice: 1700,
      description: "Mountain bike ideal for rough terrains.",
      image: require("../assets/bione-removebg-preview.png"),
    },
    {
      name: "Pina Bike",
      price: "$1500",
      discount: "5%",
      discountPrice: 1300,
      originalPrice: 1500,
      description: "A versatile bike for urban and road biking.",
      image: require("../assets/bithree_removebg-preview.png"),
    },
    {
      name: "Pinarello",
      price: "$1900",
      discount: "8%",
      discountPrice: 1700,
      originalPrice: 1900,
      description: "A high-performance road bike.",
      image: require("../assets/bitwo-removebg-preview.png"),
    },
    {
      name: "Pinarello",
      price: "$2700",
      discount: "12%",
      discountPrice: 2400,
      originalPrice: 2700,
      description: "Premium bike for competitive racing.",
      image: require("../assets/bifour_-removebg-preview.png"),
    },
    {
      name: "Pinarello",
      price: "$1350",
      discount: "5%",
      discountPrice: 1200,
      originalPrice: 1350,
      description: "Affordable and durable bike.",
      image: require("../assets/bione-removebg-preview.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" /> {/* Sử dụng icon back */}
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>The world's Best Bike</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content for Bikes */}
      <ScrollView>
        <View style={styles.bikeContainer}>
          {bikeData.map((bike, index) => (
            <TouchableOpacity
              key={index}
              style={styles.bikeCard}
              onPress={() =>
                navigation.navigate("Screen03", {
                  product: bike,
                })
              }
            >
              <Image style={styles.bikeImage} source={bike.image} />
              <Text style={styles.bikeName}>{bike.name}</Text>
              <Text style={styles.bikePrice}>{bike.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  filterButtonActive: {
    borderColor: "#ff0000",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  filterButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  filterTextActive: {
    fontWeight: "bold",
  },
  filterText: {
    color: "#000",
  },
  bikeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  bikeCard: {
    width: "40%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bikeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bikePrice: {
    fontSize: 14,
    color: "green",
  },
});
