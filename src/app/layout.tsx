import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Exo, NewAlenia, Visby } from "@/assets/fonts";

export const metadata = {
  title: "Aqela Technologies",
  description: "Aqela Technologies Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-primaryBlack ${Exo.variable} ${NewAlenia.variable} ${Visby.variable}`}>
        <Header />
        <main className="relative flex min-h-screen flex-col items-center justify-between 2xl:container lg:p-4 2xl:mx-auto 2xl:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
