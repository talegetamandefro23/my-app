import axios from "axios"
import { apiURL } from "./envService"
export const axiosInstance = axios.create({
    baseURL: apiURL
})