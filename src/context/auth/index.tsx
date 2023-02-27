import { createContext, useEffect, useState } from "react";
import usePersistUserData from "../../hooks/usePersistUserData";
import { apiService } from "../../service/api.service";

export const AuthContext = createContext<TAuthContext>(null);

const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState<TUserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [allPasswords, setAllPasswords] = useState<TPassword[]>([]);
    const [allCategories, setAllCategories] = useState<TCategory[]>([]);

    const {
        set,
        setAll,
        get,
        getAll
    } = usePersistUserData();

    useEffect(() => {
        // Save data when data has changed
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
            } : null,
            token? {
                name: 'token',
                object: token
            }: null
        ]);

    },[userData, allPasswords, allCategories, token])

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
        // Set default token authorization when update token
        if(!token) return
        
        const api = new apiService({});
        api.setAuthorization(token);

    },[token])

    useEffect(() => {
        // Get user authentication when reload the app
        if(userData) return

        getAll(['userData', 'token', 'allPasswords', 'allCategories'])
            .then(res => {
                const [resUserData, resToken, resAllPasswords, resAllCategories] = res as [TUserData, string, TPassword[], TCategory[]];

                setUserData(resUserData);
                setAllPasswords(
                    resAllPasswords.map(p => {
                        return {
                            ...p, 
                            category: resAllCategories.find(c => c.id == p.categoryId)
                        }
                    })
                );
                setAllCategories(resAllCategories);
                setToken(resToken);
            })

    },[])

    return (
        <AuthContext.Provider 
            value={{
                userData,
                token,
                allPasswords,
                allCategories,
                setUserData,
                setToken,
                setAllPasswords,
                setAllCategories
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;