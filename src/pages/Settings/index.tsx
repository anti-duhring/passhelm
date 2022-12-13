import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageContainer from '../../components/PageContainer'
import Gear from '../../components/Svg/Gear'
import List from './List'

type Props = {}

const Settings = (props: Props) => {
  return (
    <PageContainer style={styles.container}>
        <View style={styles.icon}>
            <Gear width={60} height={60} />
        </View>
        <List />
    </PageContainer>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        minHeight: '28%'
    },
    icon: {
        marginTop: -45,
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center'
    }
})