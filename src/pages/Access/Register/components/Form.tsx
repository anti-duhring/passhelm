import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextFieldStyled from '../../../../components/TextFieldStyled'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { links } from '../../../../constants/links'

type Props = {}

type TLoginData = {
    email: string;
    login: string;
    password: string;
    repeatedPassword: string;
}

const Form = (props: Props) => {
    const navigation = useNavigation();
    const [loginData, setLoginData] = useState<TLoginData>({
        email: '',
        login: '',
        password: '',
        repeatedPassword: ''
    })

    const handleInputChange = (value: string, input: string) => {
        setLoginData(oldData => {
            let newData = {...oldData}
            newData[input] = value

            return { ...newData }
        })
    }

    const handleSubmit = () => {
        console.log(loginData)
    }

  return (
    <View style={styles.container}>
        <TextFieldStyled
            placeholder='E-mail'
            style={styles.textField}
            value={loginData.email}
            onChange={(e) => handleInputChange(e, 'email')}
        />
        <TextFieldStyled
            placeholder='Nome de usuário'
            style={styles.textField}
            value={loginData.login}
            onChange={(e) => handleInputChange(e, 'login')}
        />
        <TextFieldStyled
            placeholder='Senha'
            style={styles.textField}
            value={loginData.password}
            onChange={(e) => handleInputChange(e, 'password')}
        />
        <TextFieldStyled
            placeholder='Repetir senha'
            style={styles.textField}
            value={loginData.repeatedPassword}
            onChange={(e) => handleInputChange(e, 'repeatedPassword')}
        />
        <View style={styles.buttonContainer}>
            <Button 
                label={'Cadastrar'} 
                size={Button.sizes.large} 
                backgroundColor={colors.highlight}
                style={styles.button}
                onPress={handleSubmit}
            />
            <Button 
                label={'Fazer login'} 
                size={Button.sizes.large} 
                backgroundColor={'transparent'}
                color={colors.black}
                style={styles.button}
                onPress={() => navigation.navigate(links.login)}
            />
        </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        marginTop: -5
    },
    textField: {
        marginTop: 10
    },
    buttonContainer: {
        marginTop: 50
    },
    button: {
        marginTop: 10
    }
})