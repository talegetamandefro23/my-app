// import Dashboard from "@/components/dashboard";
// import { redirect } from "next/navigation";

// export default function page() {
//   // redirect("/auth/login");
//   // return  null;
//   redirect("/website");
//   // return (
//   //   <div>
//   //   </div>
//   // )
// }
import HomePage from "@/components/web/home/page";
import PublicLayout from "@/components/web/layout/page"; // Adjust path if needed

export default function Page() {
  return (
    <PublicLayout>
      <HomePage />
    </PublicLayout>
  );
}
