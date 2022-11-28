import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import TextStyled from '../TextStyled/TextStyled';
import PasswordItem from './components/PasswordItem';

type Props = {}

const DATA = [
    {
      title: "Email Google",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'mateusvnlima@gmail.com'
    },
    {
      title: "Facebook",
      category: 'green',
      category_name: 'Pessoal',
      login: 'mateusvnlima@gmail.com'
    },
    {
      title: "Instagram",
      category: 'orange',
      category_name: 'Rede Social',
      login: 'mtvozzy'
    },
    {
      title: "Github",
      category: 'blue',
      category_name: 'Trabalho',
      login: 'anti-duhring'
    },
    {
      title: "Twitter",
      category: 'orange',
      category_name: 'Rede Social',
      login: 'antiduhring_'
    },
    {
      title: "TikTok",
      category: 'green',
      category_name: 'Pessoal',
      login: 'mtvozzy'
    },
];

const PasswordList = (props: Props) => {
  return (
    <FlashList
      data={DATA}
      renderItem={PasswordItem}
      estimatedItemSize={200}
      contentContainerStyle={styles.container}
    /> 
  )
}

export default PasswordList

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200
  }
})