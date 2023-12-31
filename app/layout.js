import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";
export const metadata = {
  title: "BrandBot",
  description: "The best brand monitoring application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
