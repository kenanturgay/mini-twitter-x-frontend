
import axios from "axios";

export const createApiInstance = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "http://localhost:3001/",
        headers: {
            Authorization: `Bearer ${token}`,
            "X-LANG": "TR",
        },
    });
};

export let API = createApiInstance();