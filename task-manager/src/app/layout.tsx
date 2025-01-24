import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider
      clientId={
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "your-default-client-id"
      }
    >
      <html lang="en">
        <body>
          <Navbar />
          <div className="w-4/5 mx-auto">{children}</div>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
