import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import { colors } from './src/constants/colors';
import useFonts from './src/hooks/useFonts';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadFonts = async() => {
    await useFonts()
  }

  if(isLoading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoading(false)}
        onError={() => {}}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        style="light" 
        backgroundColor={colors.primary}
        translucent={false}
      />
      <Header />
      <Text>Open up App.js to start  working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
