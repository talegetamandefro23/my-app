"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // For notifications
import { authURL, clientId, clientSecret } from "@/service/envService";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // 🔹 Track error messages
  const router = useRouter();

  const authUrl = `${authURL}/api/v1/Client/login`;

  // 🔹 Auto-login to get access token
  const clientLogin = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      try {
        const response = await axios.post(authUrl, {
          clientId: clientId,
          clientSecret: clientSecret,
        });

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      } catch (error) {
        toast.error("Authentication failed. Please check credentials.");
      }
    }
  };

  useEffect(() => {
    clientLogin();
  }, []);

  // 🔹 Handle user login
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginInput.username || !loginInput.password) {
      setError("Username and password are required.");
      toast.error("Username and password are required.");
      return;
    }

    try {
      const res = await axios.post(`${authURL}/api/v1/User/Login`, loginInput, {
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

      toast.success("Login successful!");
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || "Invalid Username or Password";
        
        setError(errorMessage); // 🔹 Set error message to state
        toast.error(errorMessage); // 🔹 Show error toast
      } else {
        setError("An unexpected error occurred.");
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={loginInput.username}
            onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginInput.password}
            onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* 🔹 Display error messages below the form */}
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
