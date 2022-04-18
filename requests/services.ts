import axios from 'axios';

const baseUrl = '/api/services';
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAllService = async (): Promise<any> => {
    try {
        let result = await axios.get(`${baseUrl}`);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}

export const createService = async (values: any): Promise<any> => {
    try {
        let result = await axios.post(`${baseUrl}`, values);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}
