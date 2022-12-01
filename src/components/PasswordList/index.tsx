import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { SwipeProvider } from 'react-native-swipe-item';
import PasswordItem from './PasswordItem';

type Props = {}

// TODO: Refactor all children components and put each one inside its own folder

const DATA = [
    {
      title: "Email Google",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Facebook",
      category: 'green',
      category_name: 'Pessoal',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Instagram",
      category: 'orange',
      category_name: 'Rede Social',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Github",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'anti-duhring',
      password: '123456789'
    },
    {
      title: "Twitter",
      category: 'orange',
      category_name: 'Rede Social',
      login: 'antiduhring_',
      password: '123456789'
    },
    {
      title: "TikTok",
      category: 'green',
      category_name: 'Pessoal',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Email Google",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Facebook",
      category: 'green',
      category_name: 'Pessoal',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Instagram",
      category: 'orange',
      category_name: 'Rede Social',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Github",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'anti-duhring',
      password: '123456789'
    },
];

const PasswordList = (props: Props) => {
  return (
      <FlashList
        data={DATA}
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