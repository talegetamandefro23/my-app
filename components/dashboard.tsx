import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
 
export default function Dashboard({
  breadcrumb,
  children,
}: {
  breadcrumb?:string
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
     
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="z-10 sticky top-0 left-0 w-full mb-3 bg-white dark:bg-gray-950">
        <header className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList className="flex items-center justify-between">
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#" className="text-primary">{breadcrumb}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <Header />
        </div>
      </header>


        </div>
        <div className="mx-5">{children}</div>
       
      </SidebarInset>
    </SidebarProvider>
    </div>
    <div>
    <Footer /> {/* ✅ Add Footer here */}
    </div>
    </div>
  );
}