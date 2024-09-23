import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const colors = [
  { color: 'white', image: require('./assets/vs_blue.png') }, 
  { color: 'red', image: require('./assets/vs_red.png') }, 
  { color: 'black', image: require('./assets/vs_black.png') }, 
  { color: 'blue', image: require('./assets/vs_blue.png') }, 
];

const ColorScreen = () => {
  const [selectedImage, setSelectedImage] = useState(colors[0].image); 

  const handleColorSelection = (image) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image 
          source={selectedImage}
          style={styles.productImage}
        /> 

        <View style={styles.productInfo}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productSubtitle}>Hàng chính hãng</Text>
        </View>
      </View>

      <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorOptionsContainer}>
        {colors.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.colorOption, { backgroundColor: item.color }]}
            onPress={() => handleColorSelection(item.image)} 
          />
        ))}
      </View>
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={() => alert('Màu đã chọn!')}
      >
        <Text style={styles.confirmButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row', 
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center', 
    marginBottom: 20, 
  },
  productImage: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: 20, 
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  productSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  chooseColorText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  colorOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: '#0000FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    position: 'absolute', 
    bottom: 30,
  },
  confirmButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorScreen;
