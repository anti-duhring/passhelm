import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../constants/colors'
import { Button } from 'react-native-ui-lib';
import TextFieldStyled from './TextFieldStyled';
import Safe from '../../../components/Svg/Safe';
import AddCategory from './AddCategory';
import { CreateCategoryContext } from '../../../context/createCategory';
import { TCreateCategoryContext } from '../../../context/createCategory/createCategory';

type Props = {}

const Form = (props: Props) => {
    const {
        validateLogin,
        validatePassword,
        loginError,
        passwordError,
    } = useContext(CreateCategoryContext) as TCreateCategoryContext;

  return (
    <>
    <View style={styles.icon}>
        <Safe width={50} height={50} />
    </View>
    <KeyboardAvoidingView 
        style={styles.container}
        contentContainerStyle={{ flex: 1}}
    >
        <View style={styles.fieldContainer}>
            <TextFieldStyled
                placeholder='Login da conta'
                validate={['required', (value) => validateLogin(value)]}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={loginError}
            />
            <TextFieldStyled
                placeholder='Senha'
                validate={['required', (value) => validatePassword(value)]}
                validationMessage={['Preencha a senha', 'Preencha uma senha válida']}
                error={passwordError}
            />
            <AddCategory />
        </View>
        <Button 
            enableShadow
            label={'Salvar'} 
            size={Button.sizes.large} 
            backgroundColor={colors.highlight}
            style={styles.button}
        />
    </KeyboardAvoidingView>
    </>
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
        marginHorizontal: 20,
        height: 350,
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
        top: -100,
        width: '100%',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center'
    }
})