import axios from 'axios';

export const createTodo = async (tododata) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/todo/create", tododata, {
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
            "http://localhost:4000/api/todo/all"
        );
        return response;
    }
    catch (error) { return error; }
};

export const updateTodo = async (id, tododata) => {
    try {
        const response = await axios.patch(
            `http://localhost:4000/api/todo/update/${id}`, tododata, {
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
            `http://localhost:4000/api/todo/delete/${id}`, tododata
        );
        return response;
    }
    catch (error) { return error; }
}


