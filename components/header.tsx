"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, Moon, Router, Sun, User } from "lucide-react";
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
      // Remove localStorage items
      localStorage.removeItem("idToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userRefreshToken");
      localStorage.removeItem("fullname");
      localStorage.removeItem("username");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
   
      Cookies.remove("authToken");
      Cookies.remove("refreshToken");

      router.push("/auth/login");
    };
  


  return (
    <header className="sticky top-0 w-full bg-white dark:bg-gray-900 shadow-md">
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
    </header>
  );
}
