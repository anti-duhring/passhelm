import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextFieldStyled from '../../../components/TextFieldStyled'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../../constants/colors'

type Props = {}

const Form = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextFieldStyled
            placeholder='Nome de usuário'
            style={styles.textField}
        />
        <TextFieldStyled
            placeholder='Senha'
            style={styles.textField}
        />
        <View style={styles.buttonContainer}>
            <Button 
                label={'Entrar'} 
                size={Button.sizes.large} 
                backgroundColor={colors.highlight}
                style={styles.button}
            />
            <Button 
                label={'Criar conta'} 
                size={Button.sizes.large} 
                backgroundColor={'transparent'}
                color={colors.black}
                style={styles.button}
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