"use client";

import AuthLayout from "@/components/components/authLayout";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
