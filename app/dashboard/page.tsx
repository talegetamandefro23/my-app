"use client";
import Dashboard from "@/components/dashboard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Home from "@/components/dashboard/page"

export default function Page() {
  const router = useRouter();

  useEffect(() => {
  
  }, [ router]);


  return (
    <Dashboard breadcrumb="Dashboard">
    <div className="">
    <Home />
    </div>
    </Dashboard>
  );
}
