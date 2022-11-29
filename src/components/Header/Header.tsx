import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import TextStyled from '../TextStyled/TextStyled';
import Informations from './components/Informations';
import FilterChip from './components/FilterChip';

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
        <Informations />
      <View style={styles.titleContainer}>
        <TextStyled 
          style={styles.title}
          color='light'
          variant='medium'
        >
          Contas
        </TextStyled>
        <FilterChip />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 170,
        padding: 15,
        justifyContent: 'space-between'
    },
    title: {
      fontSize: 25
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})