import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

type Props = {
    item: any,
    toggleShowPassword: () => void,
    showPassword: boolean
}

const ActionButtons = (props: Props) => {
  return (
    <View style={styles.action}>
        <TouchableOpacity 
            style={styles.actionButton}
            onPress={props.toggleShowPassword}
        >
            <Ionicons 
                name={props.showPassword ? 'eye-off-outline' : "eye-outline"} 
                size={24} 
                color={colors.password_category[props.item.category].dark} 
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <Ionicons 
                name="copy-outline" 
                size={24} 
                color={colors.password_category[props.item.category].dark} 
            />
        </TouchableOpacity>
    </View>
  )
}

export default ActionButtons

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        flex: 1
    },
    actionButton: {
        marginLeft: 20
    },
})