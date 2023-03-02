import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { FlashList } from '@shopify/flash-list'
import { SwipeProvider } from 'react-native-swipe-item';
import PasswordItem from './PasswordItem';
import { passwordList } from '../../constants/password';
import { AuthContext } from '../../context/auth';
import TextStyled from '../TextStyled';
import SearchContext from '../../context/Search';

type Props = {}

// TODO: Refactor all children components and put each one inside its own folder


const PasswordList = (props: Props) => {
  const { allPasswords, allCategories } = useContext(SearchContext);

  return (
      <FlashList
        data={allPasswords}
        renderItem={({ item }) => {
          return <PasswordItem item={item} />
        }}
        estimatedItemSize={200}
        contentContainerStyle={styles.container}
      /> 
  )
}

export default PasswordList

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50
  }
})