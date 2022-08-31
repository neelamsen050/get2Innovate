import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/home";
import PaymentScreen from "../screens/payment";
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
export default function DrawerScreen(props) {
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Login" options={{ headerShown: true }}>
          {(props) => <LoginScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="Register" options={{ headerShown: true }}>
            {(props) => <RegisterScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Payment">
          {(props) => <PaymentScreen {...props} />}
          </Drawer.Screen>
      </Drawer.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();