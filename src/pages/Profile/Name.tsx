import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextStyled from '../../components/TextStyled'
import { colors } from '../../constants/colors'

type Props = {}

const Name = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextStyled style={styles.name}>Mateus Vinícius</TextStyled>
      <TextStyled style={styles.login}>@mateusvinicius</TextStyled>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17
    },
    login: {
        fontSize: 13,
        color: colors.gray.main
    }
})