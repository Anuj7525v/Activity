import axios from 'axios';
import { BACKEND_URL } from '../constant';

export const createTodo = async (tododata) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/todo/create`, tododata, {
            headers: {
                "Content-Type": "application/json",
                authorization: `${localStorage.getItem("token")}`,
            },
        }

        );
        return response;
    }

    catch (error) { return error; }
};

export const allTodo = async () => {
    try {
        const response = await axios.get(
            `${BACKEND_URL}/api/todo/all`
        );
        return response;
    }
    catch (error) { return error; }
};

export const updateTodo = async (id, tododata) => {
    try {
        const response = await axios.patch(
            `${BACKEND_URL}/api/todo/update/${id}`, tododata, {
            headers: {
                "Content-Type": "application/json",
                authorization: `${localStorage.getItem("token")}`,
            },
        }

        );
        return response;
    }
    catch (error) { return error; }
};
export const deleteTodo = async (id, tododata) => {
    try {
        const response = await axios.delete(
            `${BACKEND_URL}/api/todo/delete/${id}`, tododata
        );
        return response;
    }
    catch (error) { return error; }
}


