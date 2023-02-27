import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../constants/colors';
import { Button } from 'react-native-ui-lib';
import TextFieldStyled from '../components/TextFieldStyled';
import Safe from '../../../components/Svg/Safe';
import AddCategory from '../components/AddCategory';
import { MaterialIcons } from '@expo/vector-icons';
import ManagePasswordContext from '../../../context/ManagePassword';

type Props = {}

const Form = (props: Props) => {
    const { 
        password, 
        editPasswordProperty,
        labelErrors,
        createPassword
    } = useContext(ManagePasswordContext);

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
                validate={['required']}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={labelErrors.title}
                onChange={(e) => editPasswordProperty('title', e)}
            />
            <TextFieldStyled
                placeholder='Login da conta'
                validate={['required']}
                validationMessage={['Preencha o login', 'Preencha um login válido']}
                error={labelErrors.login}
                onChange={(e) => editPasswordProperty('login', e)}
            />
            <TextFieldStyled
                placeholder='Senha'
                validate={['required']}
                validationMessage={['Preencha a senha', 'Preencha um login válido']}
                error={labelErrors.password}
                onChange={(e) => editPasswordProperty('password', e)}
            />
            <AddCategory />
        </View>
        <Button 
            enableShadow
            label={'Salvar'} 
            size={Button.sizes.large} 
            backgroundColor={colors.highlight}
            style={styles.button}
            onPress={createPassword}
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