import axios from 'axios';

const baseUrl = '/api/projects';
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAllProject = async (): Promise<any> => {
    try {
        let result = await axios.get(`${baseUrl}`);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}

export const getProjectById = async (id: number): Promise<any> => {
    try {
        let result = await axios.get(`${baseUrl}?id=${id}`);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}

export const createProject = async (values: any): Promise<any> => {
    try {
        let result = await axios.post(`${baseUrl}`, values);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}
