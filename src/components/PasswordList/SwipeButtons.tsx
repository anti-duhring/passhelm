import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../constants/colors';
import usePassword from '../../hooks/usePassword';
import TextStyled from '../TextStyled';

type Props = {
    item: any;
}

const SwipeButtons = (props: Props) => {
    const navigation = useNavigation();
    const { remove } = usePassword();

  return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('EditPassword' as never, {
                    item: props.item
                } as never)}
                // onPress={() => console.log(props.item)}
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
                onPress={() => remove(props.item.id)}
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