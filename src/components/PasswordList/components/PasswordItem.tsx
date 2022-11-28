import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextStyled from '../../TextStyled/TextStyled'
import { colors } from '../../../constants/colors'

type Props = {
    item: any
}

const Chip = (props: Props) => {
    return (
        <View
            style={[
                styles.chip,
                styles.flexItem,
                {
                    // backgroundColor: colors.password_category[props.item.category].dark
                }
            ]}
        >
            <TextStyled 
                style={{
                    color: colors.password_category[props.item.category].dark
                }}
            >
                {props.item.category_name}
            </TextStyled>
        </View>
    )
}

const PasswordItem = (props: Props) => {
  return (
    <View 
        style={[
            styles.container,
            {
                backgroundColor: colors.password_category[props.item.category].light
            }
        ]}
    >
        <Chip item={props.item} />
        <View>
            <TextStyled variant='bold'>{props.item.title}</TextStyled>
        </View>
        <View>
            <TextStyled 
                style={{
                    color: 'gray'
                }}
            >
                {props.item.login}
            </TextStyled>
        </View>
    </View>
  )
}

export default PasswordItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    flexItem: {
        marginBottom: 5
    },
    chip: {
        // width: 90,
        // padding: 3,
        // borderRadius: 5,
    },
    chipText: {
        textAlign: 'center'
    }
})