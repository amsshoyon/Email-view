import axios from 'axios';

const baseUrl = '/api/templates';
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

export const getServiceById = async (id: number): Promise<any> => {
    try {
        let result = await axios.get(`${baseUrl}?id=${id}`);
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}

export const createTemplate = async (values: any): Promise<any> => {
    console.log('values:', values)
    // var formData = new FormData();
    // formData.append("title", values.title);
    // formData.append("templateName", values.templateName);
    // formData.append("data", values.data);
    // formData.append("cc", values.cc);
    // formData.append("scc", values.bcc);
    try {
        let result = await axios.post(`${baseUrl}`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        if(result.data) return result.data;
        return null
    } catch (error) {
        console.log('error:', error)
        return null
    }
}
