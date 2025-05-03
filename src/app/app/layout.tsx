import AppLayout from "@/components/components/appLayout"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppLayout>
        {children}
    </AppLayout>
  )
}