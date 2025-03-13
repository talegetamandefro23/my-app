"use client";
import Dashboard from "@/components/dashboard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
  
  }, [ router]);


  return (
    <Dashboard breadcrumb="Dashboard">
    <div className="">
      <p>Dashboard</p>

    </div>
    </Dashboard>
  );
}
