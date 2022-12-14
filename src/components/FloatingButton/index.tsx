import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import TextStyled from '../TextStyled'

type Props = {
    icon?: React.ReactNode,
    label?: string,
    onPress?: () => void 
}

const FloatingButton = (props: Props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={props.onPress}
        >
            {props.icon}
            <TextStyled>{props.label}</TextStyled>
        </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    button: {
        backgroundColor: colors.highlight,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row'
    }
})