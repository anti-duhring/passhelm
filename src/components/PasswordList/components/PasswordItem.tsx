import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextStyled from '../../TextStyled/TextStyled'
import { colors } from '../../../constants/colors'
import Chips from './Chips';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

type Props = {
    item: any
}

const PasswordBody = (props: Props) => {
    return (
        <View>
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

const Action = (props: Props) => {
    return (
        <View style={styles.action}>
            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="eye-outline" size={24} color={colors.password_category[props.item.category].dark} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <Entypo name="dots-three-vertical" size={24} color={colors.password_category[props.item.category].dark} />
            </TouchableOpacity>
        </View>
    )
}

const PasswordItem: React.FC = (props: Props) => {
  return (
    <View 
        style={[
            styles.container,
            {
                backgroundColor: colors.password_category[props.item.category].light
            }
        ]}
    >   
        <Chips item={props.item} />
        <View style={styles.body}>
            <PasswordBody item={props.item} />
            <Action item={props.item} />
        </View>
    </View>
  )
}

export default PasswordItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    body: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionButton: {
        marginLeft: 15
    },
    title: {
        fontSize: 18
    },
    login :{
        color: colors.gray
    },
    blurView: {
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
})