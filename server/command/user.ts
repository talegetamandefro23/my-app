import { axiosInstance } from '@/service/axiosService'
export async function createUser(url:string,data: any) {
    const response = await axiosInstance.post(`${url}`, data)
  return response.data;
 
}
