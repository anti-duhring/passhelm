import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextStyled from '../TextStyled'
import { colors } from '../../constants/colors'
import Chips from './Chips'

type Props = {
    item: any,
    passwordVisible: boolean
}

const OnlyLoginBody = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextStyled 
            variant='regular'
            style={styles.title}
        >
            {props.item.title}
        </TextStyled>
        <TextStyled 
            style={styles.login}
        >
            {props.item.login}
        </TextStyled>
        <TextStyled 
            style={styles.login}
        >
            {props.passwordVisible? 
                props.item.password :
                new Array(props.item.password.length).fill('•').join('')
            }
        </TextStyled>
    </View>
  )
}

export default OnlyLoginBody

const styles = StyleSheet.create({
    container: {
        flex: 3.5,
    },
    title: {
        fontSize: 18,
        color: colors.black,
        paddingBottom: 5
    },
    login :{
        color: colors.gray.main
    },
})