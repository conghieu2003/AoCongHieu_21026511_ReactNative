import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'image01', name: 'Ca nấu lẩu, nấu mì mini', shop: 'Shop Devang', image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: 'image02', name: '1KG KHÔ GÀ BƠ TỎI', shop: 'Shop LTD Food', image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: 'image03', name: 'Xe cẩu đa năng', shop: 'Shop Thế giới đồ chơi', image: require('./assets/xa_can_cau.png'),
  },
  {
    id: 'image04', name: 'Đồ chơi dạng mô hình', shop: 'Shop Thế giới đồ chơi', image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: 'image05', name: 'Lãnh đạo giản đơn', shop: 'Shop Minh Long Book', image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: 'image06', name: 'Hiểu lòng con trẻ', shop: 'Shop Long Book', image: require('./assets/hieu_long_con_tre.png'),
  },
];
const renderProduct = ({ item }) => (
  <View style={styles.productContainer}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const Item = ({ item }) => (
  <View style={styles.productContainer}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const ProductList = ({ navigation }) => {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 20,
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
   
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  shopName: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ProductList;
