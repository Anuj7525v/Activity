import axios from "axios";

export const signup = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/auth/signup", data);
        return response;
    }
    catch(error){
        return error;
    }
};


export const login = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/auth/login", data);
        return response;
    }
    catch(error){
        return error;
    }
};

export const  updatepassword = async (data) =>{
    try {
        const response = await axios.patch(
            "http://localhost:4000/api/auth/updatepassword", data);
        return response;
    }
    catch(error){
        return error;
    }
    
}