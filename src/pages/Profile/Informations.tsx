import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextStyled from '../../components/TextStyled'
import TextFieldStyled from '../../components/TextFieldStyled'

type Props = {}

type UserData = {
  name: string,
  login: string,
  email: string
}

const Informations = (props: Props) => {
  const [userData, setUserData] = useState<UserData | null>({
    name: 'Mateus Vinícius',
    login: 'mateusvinicius',
    email: 'mateusvnlima@gmail.com'
  })

  const setName = (value: string) => {
    setUserData(oldData => {
      return {
        ...oldData,
        name: value
      }
    })
  }

  const setLogin = (value: string) => {
    setUserData(oldData => {
      return {
        ...oldData,
        login: value
      }
    })
  }

  const setEmail = (value: string) => {
    setUserData(oldData => {
      return {
        ...oldData,
        email: value
      }
    })
  }

  return (
    <View style={styles.container}>
      <TextFieldStyled
        placeholder='Nome'
        value={userData.name}
        onChange={setName}
        style={styles.textField}
      />
      <TextFieldStyled
        placeholder='Login'
        value={userData.login}
        onChange={setLogin}
        style={styles.textField}
      />
      <TextFieldStyled
        placeholder='Email'
        value={userData.email}
        onChange={setEmail}
        style={styles.textField}
      />
    </View>
  )
}

export default Informations

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginTop: 20
    },
    textField: {
      marginBottom: 5
    }
})