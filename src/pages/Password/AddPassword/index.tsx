import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'
import { StatusBar } from 'expo-status-bar'
import Form from './Form'

type Props = {}

const AddPassword = (props: Props) => {
  return (
        <View style={styles.container}>
          <StatusBar 
            style='light' 
            backgroundColor={'black'}
            translucent={false}
          />
          <View style={styles.body}>
            <Form />
          </View>
        </View>
  )
}

export default AddPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  body: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 200,
    position: 'relative'
  }
})