import axios from 'axios';
import { createURL, createError } from './utils';

export async function  signUp(username, contact , password){

    try {
        const url = createURL('user/register')
        const body = {
            username,
            contact,
            password
        };
        const response = await axios.post(url,body);
        // const resonse = await axios.post(url,body)
        return response.data;
        
    } catch (error) {
    return createError(error)     
    }
}


export async function  signIn(username, password){

    try {
        const url = createURL('user/login')
        const body = {
            username,
            password
        };
        const response = await axios.post(url,body);
        // const resonse = await axios.post(url,body)
        return response.data;
        
    } catch (error) {
    return createError(error)     
    }
}