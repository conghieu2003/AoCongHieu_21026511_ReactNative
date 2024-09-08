import React from 'react';
import {Text, View, Image} from 'react-native';
import image from './Ellipse8.png'
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        
        justifyContent: 'flex-end',
        alignItems: 'center',
        // flexDirection: 'column-reverse',
        // flexWrap: 'wrap-reverse'
      }}>
      <Image 
         
          style={{width: 200, height: 200}}
        />
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default YourApp;