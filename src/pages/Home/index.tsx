import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import PasswordList from '../../components/PasswordList';
import { Ionicons } from '@expo/vector-icons';
import FloatingButton from '../../components/FloatingButton';
import { ScrollView } from '@gemcook/react-native-animated-scroll-view';
import { colors } from '../../constants/colors';
import Searchbar from '../../components/Searchbar';
import { SearchProvider } from '../../context/Search';

const maxHeaderHeight = 180;
const minHeaderHeight = 70;

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <SearchProvider>
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
          onPress={() => navigation.navigate('AddPassword')}
        />
      </View>
    </SearchProvider>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  body: {
    paddingTop: 10,
    backgroundColor: 'white',
    minHeight: 600,
  }
});
