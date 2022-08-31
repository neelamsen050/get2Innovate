import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import HomeScreen from "./src/screens/home";
import PaymentScreen from "./src/screens/payment";
import DrawerScreen from './src/component/Drawer';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <RegisterScreen {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Drawer" options={{ headerShown: false }}>
        {(props) => <DrawerScreen {...props} />}
        </Stack.Screen>
                {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment">
        {(props) => <PaymentScreen {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();