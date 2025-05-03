import type { ReactNode } from "react"
import Header from "./header"
import Sidebar from "./sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed Header */}
      <Header />

      <div className="flex">
        {/* Left Sidebar - Fixed on desktop, hidden on mobile */}
        <aside className="hidden md:block w-64 lg:w-72 fixed left-0 top-16 bottom-0 bg-white border-r overflow-y-auto">
          {/* <LeftSidebar /> */}
        </aside>

        {/* Main Content - Adjusts based on sidebar visibility */}
        <main className="flex-1 min-h-[calc(100vh-64px)] md:ml-64 lg:ml-72 lg:mr-80 p-4">
          <div className="max-w-2xl mx-auto">{children}</div>
        </main>

        {/* Right Sidebar - Fixed on large screens, hidden on smaller screens */}
        <aside className="hidden lg:block w-80 fixed right-0 top-16 bottom-0 bg-white border-l overflow-y-auto">
          {/* <div className="p-4">{rightSidebarContent || <DefaultRightSidebar />}</div> */}
        </aside>
      </div>

      {/* Mobile Bottom Bar - Only visible on mobile */}
      <div className="md:hidden">
        {/* <BottomBar /> */}
      </div>
    </div>
  )
}
