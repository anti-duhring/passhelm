import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { Button, Incubator } from 'react-native-ui-lib';
import TextFieldStyled from './TextFieldStyled';
import Safe from '../../components/Svg/Safe';
const { ChipsInput } = Incubator;

type Props = {}

const Form = (props: Props) => {
    const [loginError, setLoginError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const validateLogin = (value: string) => {
        return true
    }
    const validatePassword = (value: string) => {
        return true
    }
  return (
    <KeyboardAvoidingView 
        style={styles.container}
        contentContainerStyle={{ flex: 1}}
    >
        <View style={styles.icon}>
            <Safe width={50} height={50} />
        </View>
        <View style={styles.fieldContainer}>
            <TextFieldStyled
                placeholder='Login da conta'
                validate={['required', (value) => validateLogin(value)]}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={loginError}
                maxLength={40}
            />
            <TextFieldStyled
                placeholder='Senha'
                validate={['required', (value) => validatePassword(value)]}
                validationMessage={['Preencha a senha', 'Preencha uma senha válida']}
                error={passwordError}
            />
            <ChipsInput
                placeholder={'Escolha uma categoria'}
                chips={[{label: 'Trabalho'}, {label: 'Pessoal'}, {label: 'Rede Social'}]}
            />
        </View>
        <Button 
            enableShadow
            label={'Salvar'} 
            size={Button.sizes.large} 
            backgroundColor={colors.highlight}
            style={styles.button}
        />
    </KeyboardAvoidingView>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        elevation: 10,
        backgroundColor: colors.secondary,
        padding: 15,
        borderRadius: 20,
        marginTop: -70,
        height: 300,
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 0,
        position: 'relative'
    },
    textinput: {
        borderColor: colors.gray.main,
        borderBottomWidth: 1,
    },
    label: {
        color: colors.black
    },
    charcounter: {
        color: colors.gray.main,
    },
    button: {
        elevation: 5
    },
    fieldContainer: {

    },
    icon: {
        position: 'absolute',
        left: '45%',
        top: -25,
        // backgroundColor: 'white',
        // width: 50,
        // height: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 50,
        // borderColor: 'black',
        // borderWidth: 2
    }
})