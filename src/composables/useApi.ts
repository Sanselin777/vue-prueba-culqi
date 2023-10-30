import { api } from '../api/api';
const useApi = () => {
    const getApi = async (url: string, params?: any) => {
        try {
            const response = await api.get(url, { params });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    const postApi = async (url: string, data: any) => {
        try {
            const response = await api.post(url, data);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    return {
        getApi,
        postApi
    }
}
export default useApi