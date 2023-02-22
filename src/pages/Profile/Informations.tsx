import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import TextFieldStyled from '../../components/TextFieldStyled'
import { AuthContext } from '../../context/auth'

type Props = {}

type UserData = {
  name: string,
  login: string,
  email: string
}

const Informations = (props: Props) => {
  const { userData } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <TextFieldStyled
        placeholder='Nome'
        value={userData.name}
        style={styles.textField}
      />
      <TextFieldStyled
        placeholder='Login'
        value={userData.username}
        style={styles.textField}
      />
      <TextFieldStyled
        placeholder='Email'
        value={userData.email}
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