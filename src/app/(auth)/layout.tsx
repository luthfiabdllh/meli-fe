// app/(auth)/layout.tsx
"use client";

import AuthLayout from "@/components/components/authLayout";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
