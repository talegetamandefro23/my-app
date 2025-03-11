import { axiosInstance } from '@/service/axiosService'
import React from 'react'

export async function createUser(url:string,data: any) {
    const response = await axiosInstance.post(`${url}`, data)
  return response.data;
 
}
