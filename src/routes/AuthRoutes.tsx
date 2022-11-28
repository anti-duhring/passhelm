import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
  );
};

export default AuthRoutes;