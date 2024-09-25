import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList  from './FlatListScreen';
import ColorScreen from './ColorScreen';
import { Text, TextInput } from 'react-native';

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatListScreen">
        <Stack.Screen 
          name="FlatListScreen" 
          component={ProductList}
          // options={{ title: 'Screen 01' }} 
        />
        {/* <Stack.Screen 
          name="ColorScreen" 
          component={ColorScreen} 
          options={{ title: 'Chọn màu' }} 
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
