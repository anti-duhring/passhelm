import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { colors } from '../../../constants/colors';
import { Button } from 'react-native-ui-lib';
import TextFieldStyled from '../components/TextFieldStyled';
import Safe from '../../../components/Svg/Safe';
import AddCategory from '../components/AddCategory';
import { CreateCategoryContext } from '../../../context/createCategory';
import { TCreateCategoryContext } from '../../../context/createCategory/createCategory';
import { TPassword } from '../../../constants/password';
import { PasswordDataContext } from '../../../context/passwordData';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    item: TPassword
}

const Form = (props: Props) => {
    const {
        validateLogin,
        validatePassword,
        loginError,
        passwordError,
        setChosenCategory
    } = useContext(CreateCategoryContext) as TCreateCategoryContext;
    const {
        onChangeProperty,
        passwordData,
        setPasswordData
    } = useContext(PasswordDataContext);

    useEffect(() => {
        if(!props.item) return

        setChosenCategory(props.item.category)
        setPasswordData(props.item)
    },[])

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
                placeholder='Título'
                validate={['required', (value) => validateLogin(value)]}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={loginError}
                value={passwordData.title}
                onChange={(e) => onChangeProperty('title', e)}
            />
            <TextFieldStyled
                placeholder='Login da conta'
                validate={['required', (value) => validateLogin(value)]}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={loginError}
                value={passwordData.login}
                onChange={(e) => onChangeProperty('login', e)}
            />
            <TextFieldStyled
                placeholder='Senha'
                validate={['required', (value) => validatePassword(value)]}
                validationMessage={['Preencha a senha', 'Preencha uma senha válida']}
                error={passwordError}
                value={passwordData.password}
                onChange={(e) => onChangeProperty('password', e)}
            />
            <AddCategory />
        </View>
        <Button 
            enableShadow
            label={'Salvar'} 
            size={Button.sizes.large} 
            backgroundColor={colors.highlight}
            style={styles.button}
            onPress={() => console.log(passwordData)}
            iconSource={() => <MaterialIcons name="file-download-done" size={24} color={colors.white} style={styles.updateIcon} />}
            iconOnRight
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
        minHeight: 350,
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
    },
    updateIcon: {
        marginLeft: 5
    },
})