import axios from "axios";
import { useEffect } from "react";
import { apiURL, authURL, clientId, clientSecret } from "./envService";

const Url = `${authURL}/api/v1/Client/login`;

export const clientLogin = async () => {
    debugger;
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        try {
            const response = await axios.post(Url, {
                clientId: clientId,
                clientSecret: clientSecret,
            });

            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
        } catch (error) {
            console.error("Login error:", error);
        }
    }
};

export const logoutUser = () => {
    localStorage.clear();
};

// Custom Hook for handling authentication
export const useClientLogin = () => {
    useEffect(() => {
        clientLogin();
    }, []);
};

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
