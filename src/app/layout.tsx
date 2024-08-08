import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/common/NavbarComponent";
import { Toaster } from 'react-hot-toast';
import MainProvider from "@/components/Providers/MainProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cobalt Meals",
  description: "Get Your Meal at one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>
          <NavbarComponent />
          <main>{children}</main>
          <Toaster position="top-right" />
        </MainProvider>
      </body>
    </html>
  );
}
