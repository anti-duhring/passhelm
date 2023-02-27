import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from '../../constants/colors';
import usePassword from '../../hooks/usePassword';

type Props = {
    item: TPassword,
    toggleShowPassword: () => void,
    showPassword: boolean
}

const ActionButtons = (props: Props) => {
    const { copy } = usePassword();

  return (
    <View style={styles.action}>
        <TouchableOpacity 
            style={styles.actionButton}
            onPress={props.toggleShowPassword}
        >
            <Ionicons 
                name={props.showPassword ? 'eye-off-outline' : "eye-outline"} 
                size={24} 
                color={colors.black} 
            />
        </TouchableOpacity>
        <TouchableOpacity 
            style={[styles.actionButton, { marginLeft: 10 }]}
            onPress={() => copy(props.item)}
        >
            <Ionicons 
                name="copy-outline" 
                size={24} 
                color={colors.black}
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
        alignItems: 'stretch',
        flex: 1,
    },
    actionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})