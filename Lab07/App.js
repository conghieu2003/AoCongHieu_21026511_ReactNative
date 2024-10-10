import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from './view/Screen01'
import Screen02 from './view/Screen02'
import Screen03 from './view/Screen03'
import Screen04 from './view/Screen04'

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01} options={{headerShown:false}}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{headerShown:false}}/>
        <Stack.Screen name="Screen03" component={Screen03} options={{headerShown:false}}/>
        <Stack.Screen name="Screen04" component={Screen04} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}