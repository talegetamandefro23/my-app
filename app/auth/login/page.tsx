"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 
import { clientLogin } from "@/service/axiosService";
import { userLogin } from "@/server/command/userLogin";
import { LoginProps } from "@/types/loginInput";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState<LoginProps>({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); 
  const router = useRouter();

  useEffect(() => {
    clientLogin(); // ✅ Corrected function call
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!loginInput.username || !loginInput.password) {
      setError("Username and password are required.");
      toast.error("Username and password are required.");
      return;
    }
  
    try {
      const response = await userLogin(loginInput); // ✅ Await response
      if (response) {
        router.push("/"); // Only navigate if login is successful
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Show specific error message
        toast.error(err.message); // Show error notification
      } else {
        setError("An unexpected error occurred.");
        toast.error("An unexpected error occurred."); // Show general error
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

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
