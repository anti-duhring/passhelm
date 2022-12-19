import React, { createContext, useContext, useState, useEffect } from 'react'
import { TPassword } from '../../constants/password';
import { CreateCategoryContext } from '../createCategory';
import { TPasswordDataContext } from './passwordData';

export const PasswordDataContext = createContext<TPasswordDataContext | null>(null);

const PasswordDataProvider = ({ children }) => {
    const [passwordData, setPasswordData] = useState<TPassword>({
        category: null,
        category_name: '',
        login: '',
        password: '',
        title: ''
    })
    const { chosenCategory } = useContext(CreateCategoryContext);

    const onChangeProperty = (property: string, value: string) => {
        setPasswordData(oldData => {
            oldData[property] = value
            return {
                ...oldData
            }
        })
    }

    const handleChosenCategory = (category: TPassword['category']) => {
        setPasswordData(oldData => {
            return {
                ...oldData,
                category: category
            }
        })
    }

    useEffect(() => {
        handleChosenCategory(chosenCategory)
    },[chosenCategory])

    return (
        <PasswordDataContext.Provider
            value={{
                passwordData,
                setPasswordData,
                onChangeProperty,
                handleChosenCategory
            }}
        >
            {children}
        </PasswordDataContext.Provider>
    )
}

export default PasswordDataProvider