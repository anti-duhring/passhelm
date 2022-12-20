import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFonts from './src/hooks/useFonts';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/constants/colors';
import AuthRoutes from './src/routes/AuthRoutes';
import * as NavigationBar from 'expo-navigation-bar';
import useAuthenticate from './src/hooks/useAuthenticate';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authentication, loading, error } = useAuthenticate()

  const loadFonts = async() => {
    await useFonts()
  }

  const loadApp = async() => {
    await loadFonts();
    await NavigationBar.setBackgroundColorAsync('white');
    await NavigationBar.setButtonStyleAsync('dark');
  }

  if(isLoading || loading) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsLoading(false)}
        onError={() => {}}
      />
    )
  }

  if(!authentication.success) {
    return (
      <View>
        <Text>Erro ao autenticar</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar 
        style="light" 
        backgroundColor={'black'}
        translucent={false}
      />
      <AuthRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
