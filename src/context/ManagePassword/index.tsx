import { createContext, useContext, useState } from "react";
import { Password } from "../../models/password";
import ManageCategoryContext from "../ManageCategory";

const ManagePasswordContext = createContext<TManagePasswordContext>(null);

const ManagePasswordProvider = ({ children, password }) => {
    const currentPassword = new Password(password);
    const { chosedCategoryId } = useContext(ManageCategoryContext);
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

    const submitPassword = () => {
        const editedPassword = {...passwordData}
        editedPassword.categoryId = chosedCategoryId;
        
        console.log(editedPassword);
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