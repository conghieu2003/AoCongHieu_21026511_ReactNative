import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style = {{
      flex: 1,
      backgroundColor : '#33CCFF',
    }}>

      <View style = {{
        flex: 3,
        backgroundColor : '#33CCFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>  

      <Image source={require('./assets/Ellipse8.png')}
      style={{
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      />
      </View>

      <View style = {{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        
      }}>

        <Text style={{fontSize: 25, fontFamily: 'Times New Roman', 
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        }}> GROW {'\n'} YOUR BUSINESS  </Text>

      </View>

      <View style = {{
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <Text style={{fontSize: 17, fontFamily: 'Times New Roman', 
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        }}>We will help you to grow your business using {'\n'} online server  </Text>
      </View>

      <View style = {{
        flex: 1,
        alignItems: 'flex-start',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <TouchableOpacity style={{backgroundColor: 'yellow', padding: 10, borderRadius: 10}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'yellow', padding: 10, borderRadius: 10}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default App;


