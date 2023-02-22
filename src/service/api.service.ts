import axios from "axios";
import { User } from "../models/user";


export class apiService {

    constructor(config: { token?: string }) {
        axios.defaults.baseURL = 'http://10.0.0.103:8080/api/v1';
        axios.defaults.headers.common.Authorization = config.token ? `Bearer ${config.token}` : null
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
}