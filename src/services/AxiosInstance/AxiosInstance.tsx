import axios from "axios";

const AlertAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_RECIPE_API}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AlertAxios;
