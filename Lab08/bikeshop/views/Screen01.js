import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Screen01() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contextHeader}>
        <Text style={styles.textHeader}>
          A premium online store for{"\n"}sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.center}>
        <Image
          style={styles.images}
          source={require("../assets/bifour_-removebg-preview.png")}
        />
      </View>

      <View style={styles.textCenter}>
        <Text style={styles.textfield}> POWER BIKE{"\n"}SHOP </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("Screen02")}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contextHeader: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Times New Roman",
  },
  center: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#CCCCCC",
    borderRadius:30,
  },
  images: {

    justifyContent: "center"
  },
  textCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textfield: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
