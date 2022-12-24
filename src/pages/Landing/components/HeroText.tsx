import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextStyled from '../../../components/TextStyled'
import { heroTexts } from '../../../constants/heroText';

type Props = {
    currentPage: number;
}

const HeroText = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextStyled 
            style={styles.title}
            variant='bold'
        >
           { heroTexts.titles[props.currentPage] }
        </TextStyled>
        <TextStyled 
            style={styles.legend}
            variant='light'
        >
            { heroTexts.legends[props.currentPage] }
        </TextStyled>
    </View>
  )
}

export default HeroText

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    legend: {
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center'
    }
})