import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-ui-lib'
import { colors } from '../../constants/colors'

type Props = {
    item: any
}

const Chips = (props: Props) => {
  return (
    <View style={styles.container}>
        <Chip 
            label={props.item.category_name} 
            onPress={() => console.log('pressed')}
            labelStyle={styles.label}
            backgroundColor={colors.password_category[props.item.category].dark}
            containerStyle={styles.chip}
        />
    </View>
  )
}

export default Chips

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    label: {
        fontFamily: 'MontserratRegular',
        color: 'white'
    },
    chip: {
        borderWith: 0,
        borderColor: 'transparent'
    }
})