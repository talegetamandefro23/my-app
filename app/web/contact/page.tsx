import type { Metadata } from "next";
import ContactPage from "@/components/web/contact/page";
import PublicLayout from "@/components/web/layout/page";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return <PublicLayout><ContactPage /></PublicLayout>;
}
