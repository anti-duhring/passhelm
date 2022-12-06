import React, { createContext, useState, useEffect } from 'react';
import { ChipProps, Colors } from 'react-native-ui-lib';
import { colors } from '../../constants/colors';
import { passwordCategories } from '../../constants/password';
import { returnAllChategories } from '../../functions/AddCategory';
import { TCategory, TCreateCategoryContext } from './createCategory';

export const CreateCategoryContext = createContext<TCreateCategoryContext | null>(null);

const CreateCategoryProvider = ({ children }) => {
    const [loginError, setLoginError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [chosenCategory, setChosenCategory] = useState<TCategory | null>(null);
    const [allPasswordCategories, setAllPasswordCategories] = useState<TCategory[] | null>([...passwordCategories])
    const [categories, setCategories] = useState<ChipProps[] | null>(null);
    const [chosenColor, setChosenColor] = useState<string>('#075ff9');
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const categoriesColors = [
        colors.highlight, 
        Colors.green30, 
        Colors.yellow30, 
        Colors.red30,
        Colors.purple30,
        Colors.cyan30,
        Colors.dark,
        Colors.violet30,
        Colors.grey30,
        Colors.orange30
    ]

    const handleClickChip = (category: any) => {
        setChosenCategory(old => ({...category}))
    }

    const validateLogin = (value: string) => {
        return true
    }
    const validatePassword = (value: string) => {
        return true
    }

    const handleDeleteChips = (deletedChip: ChipProps) => {

        setAllPasswordCategories(oldCategories => [
            ...oldCategories.filter(category => category.label != deletedChip.label)
        ])
        setCategories(oldCategories => [
            ...oldCategories.filter(category => category.label != deletedChip.label)
        ])        
    }

    const handleChangeChips = (newChips: ChipProps[]) => {
        let newCategories = [...newChips]
        let highestID = Math.max(...allPasswordCategories.map((cat) => cat.id));
        const newCategory: ChipProps = {
            ...newCategories.pop(),
            backgroundColor: chosenColor,
            dismissColor: 'white',
            labelStyle: { color: 'white' },
            containerStyle: { borderColor: chosenColor },
        }
        const newPasswordCategory: TCategory = {
            label: newCategory.label,
            id: highestID + 1,
            color: chosenColor
        }

        newCategory.onPress = () => handleClickChip(newPasswordCategory);

        setAllPasswordCategories(oldCategories => [
            ...oldCategories,
            newPasswordCategory
        ])
        setCategories([
            ...newCategories,
            newCategory
        ])
    }

    useEffect(() => {
        setCategories(
            returnAllChategories(
                allPasswordCategories,
                chosenCategory,
                setChosenCategory
        ))
    },[chosenCategory])

    return (
        <CreateCategoryContext.Provider 
            value={{
                loginError,
                setLoginError,
                passwordError,
                setPasswordError,
                chosenCategory,
                setChosenCategory,
                categories,
                setCategories,
                chosenColor,
                setChosenColor,
                showDialog,
                setShowDialog,
                categoriesColors,
                validateLogin,
                validatePassword,
                handleChangeChips,
                handleDeleteChips
            }}
        >
            {children}
        </CreateCategoryContext.Provider>
    )
}

export default CreateCategoryProvider;