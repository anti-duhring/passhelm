import { StyleSheet, View } from 'react-native'
import React from 'react'
import Item from './Item'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import useLogout from '../../hooks/useLogout';

type Props = {}

const List = (props: Props) => {
    const { logout } = useLogout();
  return (
    <View style={styles.container}>
        <Item 
            text='Segurança'
            icon={<Ionicons name="shield-outline" size={24} color={colors.black} />}
        />
        <Item 
            text='Sobre nós'
            icon={<Ionicons name="document-text-outline" size={24} color={colors.black} />}
        />
        <Item 
            text='Sair do aplicativo'
            icon={<Ionicons name="exit-outline" size={24} color={colors.black} />}
            onPress={logout}
        />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})