import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Weyn Amba Trading PLC | Ethiopia", template: "%s | Weyn Amba Trading PLC" },
  description: "Weyn Amba Trading PLC is an Ethiopian company working across coffee export, agriculture, trade and logistics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
