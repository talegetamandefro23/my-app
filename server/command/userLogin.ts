import { authURL } from '@/service/envService';
import { LoginProps } from '@/types/loginInput';
import axios from 'axios';
import Cookies from "js-cookie"; 

export async function userLogin(data:LoginProps) {
try{

    const res = await axios.post(`${authURL}/api/v1/User/Login`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      });
      const { idToken, refreshToken, firstName, lastName, username } = res.data;
  
      localStorage.setItem("fullname", `${firstName} ${lastName}`);
      localStorage.setItem("username", username);
      localStorage.setItem("userRefreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
  
   
      Cookies.set("authToken", idToken, { expires: 1, path: "/" }); // Expire in 1 day
      Cookies.set("refreshToken", refreshToken, { expires: 7, path: "/" });

      return res;
    }
    catch (err) {
        if (axios.isAxiosError(err)) {
      
          const statusCode = err.response?.status; // HTTP status code
          const errorMessage = err.response?.data?.errors[0] || "Login failed. Please try again."; // Server response message
          throw new Error(`${errorMessage}`);
        } else {
          // Handle non-Axios errors (e.g., network issues, JavaScript errors)
          console.error("Unexpected Error: ", err);
          throw new Error("An unexpected error occurred.");
        }
      }
}
