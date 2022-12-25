import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from './Title'
import Form from './Form'

type Props = {}

const Content = (props: Props) => {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40
    }
})