import { useContext, useState } from "react"
import { apiService } from "../service/api.service";
import { AuthContext } from "../context/auth";
import useFetchPasswords from "./useFetchPasswords";
import useFetchCategories from "./useFetchCategories";

const useLogin = () => {
    const { 
        setUserData, 
        setAllPasswords,
        setAllCategories,
        setToken
    } = useContext(AuthContext);
    const [error, setError] = useState<String | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchPasswords = useFetchPasswords();
    const fetchCategories = useFetchCategories();
    const api = new apiService({});

    const login = async(credentials: TCredentials) => {
        setIsLoading(true);

        const response = await api.login(credentials);
        
        if(response.error) {
            setError(response.error);
            setIsLoading(false);
            return
        }

        setToken(response.data.token);
        setUserData(response.data.user);

        await getPasswords(response.data.user.id);
        await getCategories(response.data.user.id);

        setIsLoading(false);
    }

    const getPasswords = async(userID: string | number) => {
        const allPasswords = await fetchPasswords.fetch({ userID })

        if(allPasswords.error) {
            setError(allPasswords.error);
            return
        }

        setAllPasswords(allPasswords.data);
    }

    const getCategories = async(userID: string | number) => {
        const allCategories = await fetchCategories.fetch({ userID })

        if(allCategories.error) {
            setError(allCategories.error);
            return
        }

        setAllCategories(allCategories.data);
    }

    return { login, error, isLoading }
}

export default useLogin