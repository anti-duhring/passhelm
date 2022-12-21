import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes/AuthRoutes';
import useAuthenticate from './src/hooks/useAuthenticate';
import Loading from './src/pages/Loading';
import useLoadApp from './src/hooks/useLoadApp';

export default function App() {
  const { authentication, loading, error } = useAuthenticate()
  const { isLoading, loadError } = useLoadApp()

  if(isLoading || loading) {
    return <Loading />
  }

  if(!authentication.success || loadError) {
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
