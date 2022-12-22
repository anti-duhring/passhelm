import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants/colors'
import { Button } from 'react-native-ui-lib'

type Props = {}

const images = [
    require('../../../assets/landing1.png'),
    require('../../../assets/landing2.png'),
    require('../../../assets/landing3.png'),
    require('../../../assets/landing4.png')
]

const LandingPage = (props: Props) => {
  return (
    <View style={styles.container}>
        <StatusBar 
            style="dark" 
            backgroundColor={'white'}
            translucent={false}
        />
        <View style={styles.content}>
            <Image
                source={images[3]}
                style={styles.heroImage}
                resizeMode='contain'
            />
            <Button 
                label={'Próximo'} 
                size='large' 
                backgroundColor={colors.highlight}
                style={styles.buttonNext}
            />
            <Button 
                label={'Pular'} 
                size='large' 
                backgroundColor={colors.secondary}
                style={styles.buttonNext}
            />
        </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        padding: '5%',
    },
    heroImage: {
        width: '100%',
        height: 300
    },
    buttonNext: {
        width: '100%',
        // borderRadius: 10
    },
    buttonSkip: {
        width: '100%',
        color: 'black'
    }
})