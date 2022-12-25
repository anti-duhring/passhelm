import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import PageControl from './components/PageControl'
import Buttons from './components/Buttons'
import HeroImage from './components/HeroImage'
import { LandingPageContext, LandingPageContextProvider } from '../../context/LandingPage'

type Props = {}

const LandingPage = (props: Props) => {


  return (
    <View style={styles.container}>
        <StatusBar 
            style="dark" 
            backgroundColor={'white'}
            translucent={false}
        />
        <LandingPageContextProvider>
            <PageControl />
            <View style={styles.content}>
                <HeroImage />
                <Buttons />
            </View>
        </LandingPageContextProvider>
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