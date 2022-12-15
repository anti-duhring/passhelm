import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import AddPassword from '../pages/Password/AddPassword';
import GoBack from '../components/HeaderButtons/GoBack';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import EditPassword from '../pages/Password/EditPassword';

const Stack = createNativeStackNavigator();

const pageScreenOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerShown: true,
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
})

const AuthRoutes = () => {
  return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
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
            ...pageScreenOptions({navigation}) as any,
            title: 'Cadastrar conta',
          })}
        />
        <Stack.Screen
          name="EditPassword"
          component={EditPassword}
          options={({ navigation }) => ({
            ...pageScreenOptions({navigation}) as any,
            title: 'Editar conta',
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            ...pageScreenOptions({navigation}) as any,
            title: 'Meu perfil',
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            ...pageScreenOptions({navigation}) as any,
            title: 'Configurações',
          })}
        />
      </Stack.Navigator>
  );
};

export default AuthRoutes;