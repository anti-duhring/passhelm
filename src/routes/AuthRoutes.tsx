import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import AddPassword from '../pages/AddPassword';
import GoBack from '../components/HeaderButtons/GoBack';

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
        <Stack.Screen
          name="AddPassword"
          component={AddPassword}
          options={({ navigation }) => ({
            headerTransparent: true,
            headerShown: true,
            title: 'Cadastrar conta',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'MontserratMedium',
              color: 'white'
            },
            headerLeft: () => 
            <GoBack 
              navigation={navigation}
              color='black'
            />
          })}
        />
      </Stack.Navigator>
  );
};

export default AuthRoutes;