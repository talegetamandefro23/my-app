"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { userLogin ,clientLogin } from "@/server/command/userLogin";
import { LoginProps } from "@/types/loginInput";
import Cookies from "js-cookie";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState<LoginProps>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const router = useRouter();

  useEffect(() =>  {
    const fetchData = async () => {
        setLoading(true);
        const response = await clientLogin(); 
      if(response?.status)
      {
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken);
      }
      else{
        setError(response?.message);
        
      }
      setLoading(false);
    }
    fetchData(); 
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); 
    setLoading(true); // ✅ Show loading state

    if (!loginInput.username || !loginInput.password) {
      setError("Username and password are required.");
      toast.error("Username and password are required.");
      setLoading(false); // ✅ Reset loading state
      return;
    }

    // try {
      const response = await userLogin(loginInput);
      if (response.status) {
        Cookies.set("authToken", response.data.idToken);
        Cookies.set("userRefreshToken", response.data.refreshToken);
        localStorage.setItem("firstname", response.data.firstName);
        localStorage.setItem("lastname", response.data.lastName);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("isAuthenticated", JSON.stringify(true));

        toast.success("Login successful!");
        router.push("/");
      } else {
        setError(response.message);
        toast.error(response.message);
        setLoading(false);
      }
  };

  return (
    <div>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="">
        {/* <h2 className="text-2xl font-bold text-center mb-6">Login</h2> */}
        <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
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

            <div className="flex items-center gap-2">
              <Checkbox className="border-2 border-black peer" id="remember" />
              <Label htmlFor="remember">Remember me</Label>
              <button
                type="button"
                className="ml-auto text-sm underline-offset-4 hover:underline text-blue-500"
                onClick={() => router.push("/auth/forgotPassword")} // ✅ Redirect when clicked
              >
                Forgot your password?
              </button>
            </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white flex justify-center items-center ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading} // ✅ Disable button when loading
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" opacity="0.3" />
                  <path fill="white" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
