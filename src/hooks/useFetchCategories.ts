import { useState } from "react";
import { apiService } from "../service/api.service";

type TConfig = { 
    token?: string | null, 
    userID?: string | number 
}

const useFetchCategories = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const api = new apiService({});

    const fetch = async(config: TConfig) => {
        setIsLoading(true);

        const response = await api.getAllCategoriesFromUser(config.userID);

        setIsLoading(false);

        return response
    }

    return { fetch, isLoading }
}

export default useFetchCategories;