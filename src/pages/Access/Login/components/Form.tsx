import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextFieldStyled from '../../../../components/TextFieldStyled'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { links } from '../../../../constants/links'
import useLogin from '../../../../hooks/useLogin'

type Props = {}

type TLoginData = {
    login: string;
    password: string;
}

const Form = (props: Props) => {
    const navigation = useNavigation();
    const { login, error, isLoading } = useLogin();
    const [loginData, setLoginData] = useState<TLoginData>({
        login: '',
        password: ''
    })

    const handleInputChange = (value: string, input: string) => {
        setLoginData(oldData => {
            let newData = {...oldData}
            newData[input] = value

            return { ...newData }
        })
    }

    const handleSubmit = async() => {
         await login({...loginData});
    }

  return (
    <View style={styles.container}>
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
        <View style={styles.buttonContainer}>
            <Button 
                label={'Entrar'} 
                size={Button.sizes.large} 
                backgroundColor={colors.highlight}
                style={styles.button}
                onPress={handleSubmit}
                disabled={isLoading}
            />
            <Button 
                label={'Criar conta'} 
                size={Button.sizes.large} 
                backgroundColor={'transparent'}
                color={colors.black}
                style={styles.button}
                onPress={() => navigation.navigate(links.register)}
                disabled={isLoading}
            />
        </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        marginTop: 0
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