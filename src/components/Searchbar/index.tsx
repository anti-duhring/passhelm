import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Pesquisar...'}
      />
      <TouchableOpacity 
        style={styles.icon}
        onPress={() => console.log('Searched')}
      >
        <Ionicons 
            name="search" 
            size={24} 
            color={colors.black}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom: 30,
        height: 60,
        elevation: 30,
        borderRadius: 30,
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: '100%',
        width: '85%',
        fontFamily: 'MontserratLight',
        paddingHorizontal: 20,
        paddingRight: 0,
        color: colors.black
    },
    icon: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20
    }
})