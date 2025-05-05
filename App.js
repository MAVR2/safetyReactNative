import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Loginscreen from './screens/LoginScreen';
import AdminScreen from './screens/adminScreen';
import HorariosScreen from './screens/HorariosScreen';
import NewRecorridoScreen from './screens/NewRecorridoScreen';
import SuperScreen from './screens/superScreen';
import DetalleReporteScreen from './screens/detalleRecorridoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Horarios" component={HorariosScreen} />
          <Stack.Screen name="Recorridos" component={NewRecorridoScreen}/>
          <Stack.Screen name ="Detalle" component={DetalleReporteScreen}/>
        <Stack.Screen name='Super' component={SuperScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
