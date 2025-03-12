// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Cookies from "js-cookie"; // Import js-cookie

// export default function Logout() {
//   const router = useRouter();

//   useEffect(() => {
//     // Remove from localStorage
//     localStorage.removeItem("idToken");
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("userRefreshToken");
//     localStorage.removeItem("fullname");
//     localStorage.removeItem("username");
//     localStorage.removeItem("user");
//     localStorage.removeItem("isAuthenticated");
 
//     Cookies.remove("authToken");
//     Cookies.remove("refreshToken");

//     // Redirect to login page
//     router.replace("/auth/login");
//   }, [router]);

//   return null;
// }
