import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from './Title'

type Props = {
  children: React.ReactNode;
  title: string;
}

const Content = (props: Props) => {
  return (
    <View style={styles.container}>
      <Title text={props.title} />
      {props.children}
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