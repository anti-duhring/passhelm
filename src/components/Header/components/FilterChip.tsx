import { StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../constants/colors';
import { Chip } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const FilterChip = (props: Props) => {
  return (
        <Chip 
          label={'Filtrar'} 
          onPress={() => console.log('pressed')}
          leftElement={<Ionicons name="filter" size={20} color={colors.secondary} />}
          labelStyle={styles.labelStyle}
          containerStyle={styles.containerStyle}
          backgroundColor={colors.primary_light}
        />
  )
}

export default FilterChip

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 0,
        paddingLeft: 10
    },
    labelStyle: {
        color: colors.secondary
    }
})