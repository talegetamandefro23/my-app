"use client";
import Dashboard from "@/components/dashboard";
// import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  // const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // if (status === "unauthenticated") {
    //   router.push("/login"); // Redirect to login if not authenticated
    // }
  }, [ router]);

  // if (status === "loading") return <p className="text-center mt-10">Loading...</p>;

  return (
    <Dashboard breadcrumb="Dashboard">

    <div className="">
      <p>Dashboard</p>
      {/* <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome, {session?.user?.name || "User"}!
        </h1>
        <p className="text-center text-gray-600">This is your dashboard.</p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div> */}
    </div>
    </Dashboard>
  );
}
