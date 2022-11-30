import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextStyled from '../../TextStyled/TextStyled'
import { colors } from '../../../constants/colors'

type Props = {
    item: any
}

const OnlyLoginBody = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextStyled 
            variant='bold'
            style={styles.title}
        >
            {props.item.title}
        </TextStyled>
        <TextStyled 
            style={styles.login}
        >
            {props.item.login}
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
        fontSize: 18
    },
    login :{
        color: colors.gray
    },
})