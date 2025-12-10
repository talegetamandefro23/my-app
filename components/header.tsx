"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Moon,Sun, User } from "lucide-react";
import Cookies from "js-cookie"; 
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
const router = useRouter();
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
    const logout = () => {
      localStorage.removeItem("lastname");
      localStorage.removeItem("firstname");
      localStorage.removeItem("username");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
   
      Cookies.remove("authToken");
      Cookies.remove("userRefreshToken");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // router.push("/auth/login");
    };
  


  return (
      <div className="">

        {/* Right Side (Theme Toggle + User Menu) */}
        <div className="flex items-center gap-4 justify-end">
          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log("Profile Clicked")}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Settings Clicked")}>Settings</DropdownMenuItem>
              <Separator />
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  );
}
