import { useState } from 'react';
import { apiService } from '../service/api.service';

const useCreateCategory = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string  | null>(null);
    const api = new apiService({});

    const create = async(category: TCategory) => {
        setIsLoading(true);

        const response = await api.createCategory(category);
        setIsLoading(false);
        if(response.error) {
            console.log(response.error);
            setError(response.error);

            return
        }

        return response.data;
    }

    return { create, isLoading, error }
}

export default useCreateCategory;