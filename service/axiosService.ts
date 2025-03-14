
import axios from "axios";

import { apiURL, authURL } from "./envService";

export const axiosLogin = axios.create({
    baseURL: authURL,
    headers: {
        "Access-Control-Allow-Credentials": true,
        "access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "accesstoken, clientclaim",
    },
});

export const axiosInstance = axios.create({
    baseURL: apiURL,
});
