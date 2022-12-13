import { StyleSheet, View } from 'react-native'
import React from 'react'
import Item from './Item'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type Props = {}

const List = (props: Props) => {
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