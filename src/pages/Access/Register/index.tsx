import { StyleSheet } from 'react-native'
import React from 'react'
import PageContainer from '../../../components/PageContainer'
import Logo from '../components/Logo'
import Content from '../components/Content'
import Form from './components/Form'

type Props = {}

const Register = (props: Props) => {
  return (
    <PageContainer style={styles.container}>
        <Logo />
        <Content title='Criar conta'>
          <Form />
        </Content>
    </PageContainer>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        padding:0,
    }
})