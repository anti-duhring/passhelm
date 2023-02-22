import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<TAuthContext>(null);

const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState<TUserData | null>(null);
    const [allPasswords, setAllPasswords] = useState<TPassword[]>([]);
    const [allCategories, setAllCategories] = useState<TCategory[]>([]);

    useEffect(() => {
        console.log(allCategories);
    },[allCategories])

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