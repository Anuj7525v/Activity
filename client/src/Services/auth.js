import axios from "axios";
import {BACKEND_URL} from "../constant";


export const signup = async (data) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/auth/signup`, data);
        return response;
    }
    catch(error){
        return error;
    }
};


export const login = async (data) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/auth/login`, data);
        return response;
    }
    catch(error){
        return error;
    }
};

export const  updatepassword = async (data) =>{
    try {
        const response = await axios.patch(
            `${BACKEND_URL}/api/auth/updatepassword`, data);
        return response;
    }
    catch(error){
        return error;
    }
    
}