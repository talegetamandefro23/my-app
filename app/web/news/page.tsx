import PublicLayout from "@/components/web/layout/page";
import NewsPage from "@/components/web/news/page";
import React from "react";

export default function page() {
  return (
    <PublicLayout>
      <NewsPage />
    </PublicLayout>
  );
}
