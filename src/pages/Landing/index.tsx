import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import PageControl from './components/PageControl'
import Buttons from './components/Buttons'
import HeroImage from './components/HeroImage'

type Props = {}

const images = [
    require('../../../assets/landing4.png'),
    require('../../../assets/landing1.png'),
    require('../../../assets/landing3.png'),
]

const LandingPage = (props: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const numOfPages = 3;

  return (
    <View style={styles.container}>
        <StatusBar 
            style="dark" 
            backgroundColor={'white'}
            translucent={false}
        />
        <PageControl
            numOfPages={numOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        <View style={styles.content}>
            <HeroImage
                image={images[currentPage]}
                currentPage={currentPage}
            />
            <Buttons
                setCurrentPage={setCurrentPage}
                numOfPages={numOfPages}
            />
        </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: '5%',
    },
    content: {
        justifyContent: 'space-between',
        flex: 1
    },
})