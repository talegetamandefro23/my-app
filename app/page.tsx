import { redirect } from "next/navigation";

export default function page() {
  redirect("/auth/login");
  return  null;
  // return (
  //   // <div>
  //   //   <Dashboard breadcrumb="Home">
  //   //   <Home />
  //   //   </Dashboard>
  //   // </div>
  // )
}
