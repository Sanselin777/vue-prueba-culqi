import axios from 'axios';
import { tokenName } from '../helpers/consts';


const token = localStorage.getItem(tokenName);
export const api = axios.create({
    baseURL: (import.meta as any).env.VITE_API_URL,
    headers: {
        Accept: 'application/json',
        common: {
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Token-Auth, Authorization',
            Authorization: token
        }
    }
});



