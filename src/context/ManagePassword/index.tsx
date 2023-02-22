import { createContext, useState } from "react";
import { Password } from "../../models/password";

const ManagePasswordContext = createContext<any>(null);

const ManagePasswordProvider = ({ children, password }) => {
    const currentPassword = new Password(password);
    const [passwordData, setPasswordData] = useState<TPassword>({
        id: currentPassword.id,
        categoryId: currentPassword.categoryId,
        userId: currentPassword.userId,
        title: currentPassword.title,
        login: currentPassword.login,
        password: currentPassword.password
    })

    const editPasswordProperty = (property: string, value: string) => {
        setPasswordData(oldData => {
            oldData[property] = value
            return {
                ...oldData
            }
        })
    }

    return (
        <ManagePasswordContext.Provider 
            value={{
                password: passwordData,
                editPasswordProperty
            }}
        >
            {children}
        </ManagePasswordContext.Provider>
    )
}

export default ManagePasswordContext;
export { ManagePasswordProvider }