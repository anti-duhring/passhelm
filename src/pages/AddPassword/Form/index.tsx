import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../../constants/colors'
import { Button, ChipProps } from 'react-native-ui-lib';
import TextFieldStyled from './TextFieldStyled';
import Safe from '../../../components/Svg/Safe';
import { passwordCategories } from '../../../constants/password';
import AddCategory from './AddCategory';
import TextStyled from '../../../components/TextStyled';
import { returnAllChategories } from '../../../functions/AddCategory';
import { TCategory } from './category';

type Props = {}

const Form = (props: Props) => {
    const [loginError, setLoginError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [chosenCategory, setChosenCategory] = useState<TCategory | null>(null);
    const [categories, setCategories] = useState<ChipProps[] | null>(null);
    const [chosenColor, setChosenColor] = useState<string>('#075ff9')

    const validateLogin = (value: string) => {
        return true
    }
    const validatePassword = (value: string) => {
        return true
    }
    const handleChangeChips = (newChips: ChipProps[]) => {
        let newCategories = [...newChips]
        newCategories[newCategories.length - 1].backgroundColor = '#000000'

        setCategories([...newCategories])
    }

    useEffect(() => {
        setCategories(
            returnAllChategories(
                passwordCategories,
                chosenCategory,
                setChosenCategory
        ))
    },[chosenCategory])

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
            <AddCategory
                categories={categories}
                onChange={handleChangeChips}
                chosenCategory={chosenCategory}
                chosenColor={chosenColor}
                setChosenColor={setChosenColor}
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