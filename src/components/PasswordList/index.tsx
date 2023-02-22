import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { FlashList } from '@shopify/flash-list'
import { SwipeProvider } from 'react-native-swipe-item';
import PasswordItem from './PasswordItem';
import { passwordList } from '../../constants/password';
import { AuthContext } from '../../context/auth';
import TextStyled from '../TextStyled';

type Props = {}

// TODO: Refactor all children components and put each one inside its own folder


const PasswordList = (props: Props) => {
  const { allPasswords, allCategories } = useContext(AuthContext);

  if(!allPasswords.length || !allCategories.length) {
    return (<TextStyled>Loading...</TextStyled>)
  }

  return (
      <FlashList
        data={allPasswords}
        renderItem={({ item }) => {
          const category = allCategories.find(c => c.id == item.categoryId);
          const itemWithCategory = {
            ...item,
            category: category
          }

          return <PasswordItem item={itemWithCategory} />
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