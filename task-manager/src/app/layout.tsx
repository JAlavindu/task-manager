import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-4/5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
