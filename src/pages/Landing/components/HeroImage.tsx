import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import TextStyled from '../../../components/TextStyled';
import HeroText from './HeroText';

type Props = {
    image: HTMLImageElement;
    currentPage: number;
}

const HeroImage = (props: Props) => {
  return (
    <View style={styles.container}>
        <Image
            source={props.image}
            style={styles.heroImage}
            resizeMode='contain'
        />
        <HeroText
            currentPage={props.currentPage}
        />
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