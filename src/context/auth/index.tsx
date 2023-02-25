import { createContext, useEffect, useState } from "react";
import usePersistUserData from "../../hooks/usePersistUserData";

export const AuthContext = createContext<TAuthContext>(null);

const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState<TUserData | null>(null);
    const [allPasswords, setAllPasswords] = useState<TPassword[]>([]);
    const [allCategories, setAllCategories] = useState<TCategory[]>([]);

    const {
        set,
        setAll,
        get,
        getAll
    } = usePersistUserData();

    useEffect(() => {

        setAll([
            userData ? {
                name: 'userData',
                object: userData
            } : null,
            allPasswords.length ? {
                name: 'allPasswords',
                object: allPasswords
            } : null,
            allCategories.length ? {
                name: 'allCategories',
                object: allCategories
            } : null
        ]).then(res => console.log('set', res));

    },[userData, allPasswords, allCategories])

    useEffect(() => {
        if(!allPasswords.length || !allCategories.length) return

        const everyPasswordHasACategoryNested = allPasswords.every(p => p.hasOwnProperty('category'));

        if(everyPasswordHasACategoryNested) return 
        
        setAllPasswords(oldItens => 
            oldItens.map(p => {
                return {
                    ...p, 
                    category: allCategories.find(c => c.id == p.categoryId)
                }
            })
        )

    },[allCategories, allPasswords])

    useEffect(() => {
    
        // TODO: verify why category object returns as [Object]
        if(userData) return

        getAll(['userData', 'allPasswords', 'allCategories'])
            .then(res => {
                const [resUserData, resAllPasswords, resAllCategories] = res as [TUserData, TPassword[], TCategory[]];

                setUserData(resUserData);
                setAllPasswords(resAllPasswords);
                setAllCategories(resAllCategories);

                console.log('get', res)
            })

    },[])

    return (
        <AuthContext.Provider 
            value={{
                userData,
                allPasswords,
                allCategories,
                setUserData,
                setAllPasswords,
                setAllCategories
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;