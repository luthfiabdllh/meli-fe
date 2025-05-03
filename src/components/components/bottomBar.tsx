"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, User, Users, Settings } from "lucide-react"

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-2">
      <div className="flex items-center justify-around">
        <Button variant="ghost" size="icon" asChild className="flex flex-col items-center gap-1 h-auto py-1">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="flex flex-col items-center gap-1 h-auto py-1">
          <Link href="/profile">
            <User className="h-5 w-5" />
            <span className="text-xs">Profil</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="flex flex-col items-center gap-1 h-auto py-1">
          <Link href="/connections">
            <Users className="h-5 w-5" />
            <span className="text-xs">Relasi</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="flex flex-col items-center gap-1 h-auto py-1">
          <Link href="/settings">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Pengaturan</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
