import Dashboard from "@/components/dashboard";
import NewsPage from "@/components/dashboard/master-data/news/page";
import React from "react";

const Page = () => {
  return (
    <Dashboard breadcrumb="News">
      <NewsPage />
    </Dashboard>
  );
};

export default Page;
