import { StyleSheet, Image, View } from 'react-native'
import React, { useContext } from 'react'
import TextStyled from '../../../components/TextStyled';
import HeroText from './HeroText';
import { LandingPageContext } from '../../../context/LandingPage';

type Props = {
}

const HeroImage = (props: Props) => {
    const { currentImage } = useContext(LandingPageContext)
  return (
    <View style={styles.container}>
        <Image
            source={currentImage}
            style={styles.heroImage}
            resizeMode='contain'
        />
        <HeroText />
    </View>
  )
}

export default HeroImage

const styles = StyleSheet.create({
    container: {
        height: '80%',
        paddingTop: 40
    },
    heroImage: {
        width: '100%',
        height: 250
    }
})