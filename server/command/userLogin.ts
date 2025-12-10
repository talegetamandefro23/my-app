"use server"
import { authURL,clientId, clientSecret  } from '@/service/envService';
import { LoginProps } from '@/types/loginInput';
import axios from 'axios';
import { cookies } from 'next/headers';


const Url = `${authURL}/api/v1/Client/login`;

export async function clientLogin() {
  const cookiesStore = await cookies(); // ✅ Call inside the function
  const accessToken = cookiesStore.get("accessToken")?.value;

  if (!accessToken) {
      try {
          const response = await axios.post(Url, {
              clientId: clientId,
              clientSecret: clientSecret,
          });
          return {
              data: response.data,
              status: true,
              message: "Client Login Successfully",
          };
      } catch (error: any) {
          return {
              data: null,
              status: false,
              message: error.response?.data?.errors?.[0] || "Client Login failed. Please try again.",
          };
      }
  }
}
export async function userLogin(data:LoginProps) {
try{
  const cookiesStore = await cookies()
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

 export async function forgotPassword(data?:string)
 {
try{
  const cookiesStore = await cookies()
  const response = await axios.post(`${authURL}/api/v1/forgotpassword`,data,{
    headers: {
      accessToken: cookiesStore.get("accessToken")?.value, // Read token from cookies
    },
  });
  return{
  data: response.data,
   status: true,
   message:"Secsses"
  };

}
catch(error: any)
{
return{
  data: null,
  status: false,
  message: error.response?.data?.message||"error occured"
}
}
 }