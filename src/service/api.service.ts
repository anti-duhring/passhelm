import axios from "axios";
import { User } from "../models/user";

export class apiService {
    // TODO: You attempted attempted to import the Node standard library module "https" from "src\service\api.service.ts". 
    constructor(config: { token?: string }) {
        axios.defaults.baseURL = 'http://10.0.0.104:8080/api/v1';

        if(config.token) {
            axios.defaults.headers.common.Authorization = `Bearer ${config.token}`
        }
    }

    setAuthorization(token: string) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    async login(credentials: TCredentials): Promise<TResponse> {
        try {
            const res = await axios.post('/login', credentials)
            const token = res.data.token;
            const user = new User(res.data);

            axios.defaults.headers.common.Authorization = `Bearer ${token}`

            return {
                data: { token, user },
                error: null
            }
        } catch(err) {
            console.log(err)

            return {
                data: null,
                error: err
            }
        }
        
    }

    async getAllPasswordsFromUser(userID: string | number): Promise<TResponse> {
        try {
            const res = await axios.get(`/password?userId=${userID}`)
            const allPasswords: TPassword[] = res.data;

            return {
                data: allPasswords,
                error: null
            }

        } catch(err) {
            console.log(err)

            return {
                data: null,
                error: err
            }
        }
    }

    async getAllCategoriesFromUser(userID: string | number): Promise<TResponse> {
        try {
            const res = await axios.get(`/category?userId=${userID}`)
            const allCategories: TCategory[] = res.data;

            return {
                data: allCategories,
                error: null
            }

        } catch(err) {
            console.log(err)

            return {
                data: null,
                error: err
            }
        }
    }

    async createCategory(category: TCategory) {
        try {
            const res = await axios.post(`/category`, category)
            const newCategory: TCategory = res.data;

            return {
                data: newCategory,
                error: null
            }
            
        } catch(err) {
            console.log(err)

            return {
                data: null,
                error: err
            }
        }
    }

    async createPassword(password: TPassword) {
        try {
            const res = await axios.post(`/password`, password);
            const newPassword: TPassword = res.data;

            return {
                data: newPassword,
                error: null
            }
        } catch(err) {
            console.log(err);

            return {
                data: null,
                error: err
            }
        }
    }

    async updatePassword(password: TPassword) {
        try {
            const res = await axios.put(`/password/${password.id}`, password);
            const newPassword: TPassword = res.data;

            return {
                data: newPassword,
                error: null
            }
        } catch(err) {
            console.log(err);

            return {
                data: null,
                error: err
            }
        }
    }

    async deletePassword(passwordID: string | number) {
        try {
            const res = await axios.delete(`/password/${passwordID}`);

            return {
                data: {
                    success: true
                },
                error: null
            }
        } catch(err) {
            console.log(err);

            return {
                data: null,
                error: err
            }
        }
    }
}