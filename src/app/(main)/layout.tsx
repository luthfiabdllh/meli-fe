"use client";

import Navbar from "@/components/components/navbar";
import { Footer } from "@/components/components/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
