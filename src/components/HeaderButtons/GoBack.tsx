import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type Props = {
    navigation: any,
    color: 'black' | 'white'
}

const GoBack = (props: Props) => {
  return (
    <TouchableOpacity 
        style={[
          styles.container,
          {
            backgroundColor: props.color == 'black' ? '#232323' : colors.gray.light
          }
        ]}
        onPress={() => props.navigation.goBack()}
    >
      <Entypo name="chevron-left" size={30} color={
        props.color == 'black' ? 'white' : 'black'
      } />
    </TouchableOpacity>
  )
}

export default GoBack

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})