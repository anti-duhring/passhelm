import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextStyled from '../../components/TextStyled'
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type Props = {
    text: string,
    icon?: React.ReactNode,
    onPress?: (arg: unknown) => unknown
}

const Item = (props: Props) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={props.onPress}
    >
        <View style={styles.legend}>
            {props.icon}
            <TextStyled 
                variant='medium'
                style={styles.legendText}
            >{props.text}</TextStyled>
        </View>
        <Entypo name="chevron-small-right" size={24} color={colors.gray.main} />
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    legend: {
        flexDirection: 'row',
    },
    legendText: {
        marginLeft: 10
    }
})