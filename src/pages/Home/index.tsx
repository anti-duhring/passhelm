import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import PasswordList from '../../components/PasswordList';
import { Ionicons } from '@expo/vector-icons';
import FloatingButton from '../../components/FloatingButton';
import { ScrollView } from '@gemcook/react-native-animated-scroll-view';
import { colors } from '../../constants/colors';
import Searchbar from '../../components/Searchbar';

const maxHeaderHeight = 180;
const minHeaderHeight = 70;

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={{flex: 1}}>
    <ScrollView 
      style={styles.container}
      maxHeaderHeight={maxHeaderHeight}
      minHeaderHeight={minHeaderHeight}
      AnimationHeaderComponent={<Header />}
    >
      
      <View style={styles.body}>
        <Searchbar />
        <PasswordList />
      </View>
    </ScrollView>
      <FloatingButton
        icon={<Ionicons name="add" size={30} color="white" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  body: {
    paddingTop: 10,
    backgroundColor: 'white',
    minHeight: 100,
  }
});
