import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors';
import TextStyled from '../TextStyled';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    item: any;
}

const SwipeButtons = (props: Props) => {
    const navigation = useNavigation()

  return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('EditPassword' as never, {
                    item: props.item
                } as never)}
                style={[styles.button]}
            >
                <Feather name="edit" size={24} color={colors.primary} />
                <TextStyled 
                    variant='medium' 
                    style={{
                        color: colors.primary
                    }}
                >
                    Editar
                </TextStyled>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
                style={[styles.button, styles.lastButton]}
            >
                <Ionicons name="trash-outline" size={24} color={colors.red} />
                <TextStyled 
                    variant='medium' 
                    style={{
                        color: colors.red
                    }}
                >
                    Excluir
                </TextStyled>
            </TouchableOpacity>
        </>
  )
}

export default SwipeButtons

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1
    },
    lastButton: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
})