import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mealsy",
  description: "Find recipes based on ingredients you have at home",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-background w-full custom-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
