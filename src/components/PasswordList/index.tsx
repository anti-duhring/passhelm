import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { SwipeProvider } from 'react-native-swipe-item';
import PasswordItem from './PasswordItem';
import { passwordList } from '../../constants/password';

type Props = {}

// TODO: Refactor all children components and put each one inside its own folder


const PasswordList = (props: Props) => {
  return (
      <FlashList
        data={passwordList}
        renderItem={({ item }) => <PasswordItem item={item} />}
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