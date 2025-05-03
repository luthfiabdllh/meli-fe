import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 md:pb-0">
      {/* <Header /> */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4">
        <div className="hidden md:block md:col-span-3 lg:col-span-2">
          {/* <LeftSidebar /> */}
        </div>
        <main className="md:col-span-9 lg:col-span-7">{children}</main>
        <div className="hidden lg:block lg:col-span-3">
          {/* <RightSidebar /> */}
        </div>
      </div>
      <div className="md:hidden">
        {/* <BottomBar /> */}
      </div>
    </div>
  )
}
