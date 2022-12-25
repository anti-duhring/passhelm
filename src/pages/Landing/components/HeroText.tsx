import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import TextStyled from '../../../components/TextStyled'
import { LandingPageContext } from '../../../context/LandingPage';

type Props = {
}

const HeroText = (props: Props) => {
    const { currentText } = useContext(LandingPageContext);

  return (
    <View style={styles.container}>
        <TextStyled 
            style={styles.title}
            variant='bold'
        >
           { currentText.title }
        </TextStyled>
        <TextStyled 
            style={styles.legend}
            variant='light'
        >
            { currentText.legend }
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