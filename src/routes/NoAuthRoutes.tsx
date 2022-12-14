import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../pages/Landing';
import Login from '../pages/Access/Login';
import Register from '../pages/Access/Register';

const Stack = createNativeStackNavigator();

const NoAuthRoutes = () => {
  return (
      <Stack.Navigator
        initialRouteName='Landing'
        screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
        }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingPage}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
  );
};

export default NoAuthRoutes;