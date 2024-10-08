import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList, Alert } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://6458c8bc4eb3f674df7d3ce6.mockapi.io/ch/v1/dataset')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  const handleAdd = () => {
    const newRecord = {
      name: "Hiếu",
      price: "123",
      image_link: "image_link 20",
      id: ""
    };

    fetch('https://6458c8bc4eb3f674df7d3ce6.mockapi.io/ch/v1/dataset/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecord),
    })
      .then((response) => response.json())
      .then((json) => {
        setData([json, ...data]);
        Alert.alert('Success', 'Record added successfully');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to add record');
      });
  };
  

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.image_link}>{item.image_link}</Text>
      <Text style={styles.id}>{item.id}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={handleAdd} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="EDIT" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="DELETE" onPress={() => {}} />
      </View>
      <View style={styles.displayContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  displayContainer: {
    marginTop: 20,
    width: '80%',
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});