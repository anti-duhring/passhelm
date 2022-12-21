import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants/colors'

type Props = {}

const Loading = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar 
        style="light" 
        backgroundColor={'black'}
        translucent={false}
      />
      <Image
        source={require('../../../assets/logo_black.png')}
      />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})