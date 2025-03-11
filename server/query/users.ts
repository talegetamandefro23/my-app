  "use server"
  
import { axiosInstance } from "@/service/axiosService";
import { apiURL } from "@/service/envService";

export  async function getAllUsers (url :string){
  console.log(apiURL + url)
    const response = await axiosInstance.get(`${url}`)
    return response.data;
}
