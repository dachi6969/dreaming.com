"use client"

import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();

  const showFooter = pathname !== "/cart";

  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
