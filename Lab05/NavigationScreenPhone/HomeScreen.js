import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-ratings'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image 
          source={require('./assets/vs_blue.png')} 
          style={styles.productImage} 
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={styles.ratingContainer}>
            <Rating
              type='star' 
              ratingCount={5} 
              imageSize={16} 
              readonly 
              startingValue={4.5} 
              tintColor='#ffffff' 
              ratingColor='#FFD700' 
              ratingBackgroundColor='#d4d4d4' 
              style={{ width: 100, marginTop: 5 }} 
            />
            <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
          </View>

          <View style={styles.priceRow}> 
            <Text style={styles.price}>1.790.000 đ</Text>
            <Text style={styles.oldPrice}>1.790.000 đ</Text>
          </View>
          
          <Text style={styles.dealLabel}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.colorButton}
        onPress={() => navigation.navigate('ColorScreen')}
      >
        <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
        <Icon name="chevron-right" size={14} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingVertical: 20, 
  },
  productContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    padding: 15,
    alignItems: 'flex-start', 
  },
  productImage: {
    width: 350, 
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  productInfo: {
    marginTop: 10,
    width: '100%', 
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left', 
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewCount: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, 
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 10, 
  },
  dealLabel: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  colorButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '90%',
    borderWidth: 1, 
    borderColor: '#d4d4d4', 
  },
  colorButtonText: {
    fontSize: 14,
    color: 'black',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buyButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
