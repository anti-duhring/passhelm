import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageContainer from '../../components/PageContainer'
import Logo from './components/Logo'
import Title from './components/Title'
import Content from './components/Content'

type Props = {}

const Login = (props: Props) => {
  return (
    <PageContainer style={styles.container}>
        <Logo />
        <Content />
    </PageContainer>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding:0,
    }
})