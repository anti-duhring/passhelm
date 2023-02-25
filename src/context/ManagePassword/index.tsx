import { createContext, useContext, useState } from "react";
import { Password } from "../../models/password";
import ManageCategoryContext from "../ManageCategory";
import { apiService } from "../../service/api.service";
import { AuthContext } from "../auth";
import useFetchPasswords from "../../hooks/useFetchPasswords";

const ManagePasswordContext = createContext<TManagePasswordContext>(null);

const ManagePasswordProvider = ({ children, password }) => {
    const currentPassword = new Password(password);
    const { chosedCategoryId } = useContext(ManageCategoryContext);
    const { setAllPasswords, allCategories, userData } =  useContext(AuthContext);
    const { fetch } = useFetchPasswords();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [passwordData, setPasswordData] = useState<TPassword>({
        id: currentPassword.id,
        categoryId: currentPassword.categoryId,
        userId: currentPassword.userId,
        title: currentPassword.title,
        login: currentPassword.login,
        password: currentPassword.password
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

    const submitPassword = async() => {
        setIsLoading(true);
        const api = new apiService({});

        const editedPassword = {...passwordData}
        editedPassword.categoryId = chosedCategoryId;
        
        const updatePasswordResponse = await api.updatePassword(editedPassword);
        const fetchNewPasswordsResponse: { data: TPassword[], error: string } = await fetch({ userID: userData.id });
    
        setPasswordData(updatePasswordResponse.data);
        setAllPasswords(fetchNewPasswordsResponse.data);

        setIsLoading(false);
    }

    return (
        <ManagePasswordContext.Provider 
            value={{
                password: passwordData,
                editPasswordProperty,
                labelErrors,
                submitPassword
            }}
        >
            {children}
        </ManagePasswordContext.Provider>
    )
}

export default ManagePasswordContext;
export { ManagePasswordProvider }