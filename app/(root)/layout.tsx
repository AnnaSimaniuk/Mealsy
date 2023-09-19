import { ReactNode } from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`font-montserrat bg-background w-full custom-scrollbar`}>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
}
