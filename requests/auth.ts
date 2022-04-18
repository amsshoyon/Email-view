import { AuthResponse } from '@types/user';
import axios from 'axios';

const baseUrl = '/api/auth';

interface AuthProps {
    username: string;
    password: string
}

axios.defaults.headers.post["Content-Type"] = "application/json";

export const signUp = async (values: AuthProps): Promise<AuthResponse | null> => {
    try {
        let result = await axios.post(`${baseUrl}/signup`, values);
        if(result.data) return result.data;
        return null
    } catch (error){
        console.log('error:', error)
        return null
    }
}

export const login = async (values: AuthProps): Promise<AuthResponse | null> => {
    try {
        let result = await axios.post(`${baseUrl}/login`, values);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}
