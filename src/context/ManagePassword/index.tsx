import { createContext, useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import { Password } from "../../models/password";
import ManageCategoryContext from "../ManageCategory";
import { apiService } from "../../service/api.service";
import { AuthContext } from "../auth";
import useFetchPasswords from "../../hooks/useFetchPasswords";

const ManagePasswordContext = createContext<TManagePasswordContext>(null);

// TODO: sort passwords by category
// TODO: chosed category is not correct
const ManagePasswordProvider = ({ children, password }) => {
    const currentPassword = new Password(password);
    const { chosedCategoryId } = useContext(ManageCategoryContext);
    const { setAllPasswords, allCategories, userData } =  useContext(AuthContext);
    const { fetch } = useFetchPasswords();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [passwordData, setPasswordData] = useState<TPassword>({
        id: currentPassword.id ?? 0,
        categoryId: currentPassword.categoryId ?? allCategories[0].id,
        userId: userData.id,
        title: currentPassword.title ?? '',
        login: currentPassword.login ?? '',
        password: currentPassword.password ?? ''
    })
    const [labelErrors, setLabelErrors] = useState({
        title: false,
        login: false,
        password: false
    })

    const editPasswordProperty = (property: string, value: string) => {
        setPasswordData(oldData => {
            oldData[property] = value
            return {
                ...oldData
            }
        })
    }

    const editPassword = async() => {
        setIsLoading(true);
        const api = new apiService({});

        const editedPassword = {...passwordData}
        editedPassword.categoryId = chosedCategoryId;
        
        const updatePasswordResponse = await api.updatePassword(editedPassword);
        const fetchNewPasswordsResponse: { data: TPassword[], error: string } = await fetch({ userID: userData.id });
    
        setPasswordData(updatePasswordResponse.data);
        setAllPasswords(fetchNewPasswordsResponse.data);

        ToastAndroid.showWithGravity(
            'Conta atualizada com sucesso',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

        setIsLoading(false);
    }

    const createPassword = async() => {
        setIsLoading(true);
        const api = new apiService({});

        const newPassword = {...passwordData}
        newPassword.categoryId = chosedCategoryId;
        delete newPassword.id;
        
        const createPasswordResponse = await api.createPassword(newPassword);
        const fetchNewPasswordsResponse: { data: TPassword[], error: string } = await fetch({ userID: userData.id });
    
        setPasswordData(createPasswordResponse.data);
        setAllPasswords(fetchNewPasswordsResponse.data);

        ToastAndroid.showWithGravity(
            'Conta criada com sucesso',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

        setIsLoading(false);
    }

    return (
        <ManagePasswordContext.Provider 
            value={{
                password: passwordData,
                editPasswordProperty,
                labelErrors,
                editPassword,
                createPassword
            }}
        >
            {children}
        </ManagePasswordContext.Provider>
    )
}

export default ManagePasswordContext;
export { ManagePasswordProvider }