import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import TextStyled from './TextStyled';
import { Avatar } from 'react-native-ui-lib';

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
        <View>
          <Avatar 
            source={{uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg'}} 
            label={'MV'}
            size={50} 
          />
        </View>
      <TextStyled 
        style={styles.title}
        color='light'
        variant='bold'
      >
        Senhas
      </TextStyled>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 150,
        padding: 15,
        justifyContent: 'flex-end'
    },
    title: {
      fontSize: 30
    }
})