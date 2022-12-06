import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { StatusBar } from 'expo-status-bar'

type Props = {
    children: React.ReactNode
}

const PageContainer = (props: Props) => {
  return (
    <View style={styles.background}>
        <StatusBar 
            style='light' 
            backgroundColor={'black'}
            translucent={false}
        />
        <View style={styles.body}>
            <View style={styles.content}>
                {props.children}
            </View>
        </View>
    </View>
  )
}

export default PageContainer

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
        flex: 1
    },
    body: {
        backgroundColor: colors.secondary,
        flex: 1,
        marginTop: '50%'
    }, 
    content: {
        elevation: 10,
        backgroundColor: colors.secondary,
        padding: 15,
        borderRadius: 20,
        margin: '5%',
        marginTop: '-20%',
        minHeight: '40%'
    }
})