import { AuthContext } from "../context/auth";
import usePersistUserData from "./usePersistUserData"
import { useContext } from 'react';

const useLogout = () => {
    const { removeAll } = usePersistUserData();
    const {
        setUserData,
        setAllPasswords,
        setAllCategories
    } = useContext(AuthContext);

    const logout = () => {
        removeAll(['userData', 'allPasswords', 'allCategories'])
        .then(() => {
            setUserData(null);
            setAllPasswords([]);
            setAllCategories([]);
        });
    }

    return { logout }
}

export default useLogout;