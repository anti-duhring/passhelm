import { View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import TextStyled from '../TextStyled';
import Informations from './Informations';
import FilterChip from './FilterChip';

type Props = {}


const Header = (props: Props) => {
  return (
    // <View style={styles.container}>
      <ImageBackground 
        // source={require('../../../assets/header.png')}
        resizeMode='contain'
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: colors.primary
        }}
      >
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
      </ImageBackground>
    // </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.primary,
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 20,
        paddingBottom: 17,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flex: 1,
    },
    title: {
      fontSize: 25
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
})