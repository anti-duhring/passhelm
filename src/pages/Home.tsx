import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-ui-lib';
import Header from '../components/Header/Header';
import PasswordList from '../components/PasswordList/PasswordList';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import FloatingButton from '../components/FloatingButton/FloatingButton';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <PasswordList />
      </View>
      <FloatingButton
        icon={<Ionicons name="add" size={50} color="white" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    height: '100%'
  }
});
