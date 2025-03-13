"use server"
import { authURL } from '@/service/envService';
import { LoginProps } from '@/types/loginInput';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function userLogin(data:LoginProps) {
try{
const cookiesStore = await cookies()
// console.log("accessToken:", cookiesStore.get("accessToken")?.value); // Read token from cookies

      const res = await axios.post(`${authURL}/api/v1/User/Login`, data, {
        headers: {
          accessToken: cookiesStore.get("accessToken")?.value, // Read token from cookies
        },
      });
      return {
        data :  res.data,
        status : true,
        message : "Login Successfully"
      };
    }
    catch (err : any) {
      return {
        data :  null,
        status : false,
        message :  err.response?.data?.errors[0]|| "Login failed. Please try again."
      };

    }
}
