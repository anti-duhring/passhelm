import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../pages/Landing';

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
      </Stack.Navigator>
  );
};

export default NoAuthRoutes;