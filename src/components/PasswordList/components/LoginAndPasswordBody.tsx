import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextStyled from '../../TextStyled/TextStyled'
import { colors } from '../../../constants/colors'

type Props = {
    item: any
}

const LoginAndPasswordBody = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextStyled 
            style={styles.login}
        >
            {props.item.login}
        </TextStyled>
        <TextStyled 
            style={styles.login}
        >
            {props.item.password}
        </TextStyled>
    </View>
  )
}

export default LoginAndPasswordBody

const styles = StyleSheet.create({
    container: {
        flex: 3.5,
    },
    title: {
        fontSize: 18
    },
    login :{
        color: colors.gray
    },
})