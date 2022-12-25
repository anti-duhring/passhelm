import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextStyled from '../../../components/TextStyled'

type Props = {
  text: string;
}

const Title = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextStyled
        variant='bold'
        style={styles.title}
      >
        {props.text}
    </TextStyled>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25
    }
})