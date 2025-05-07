"use client"

import { CirclePlus, Home, LogOut, Settings, User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import PostCreatorDialog from "./postCreatorDialog";
import { useState } from "react";


export default function Sidebar() {
  const [dialogOpen, setDialogOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
  
    const handleSubmitPost = (text: string, media: File[]) => {
      setIsSubmitting(true)
  
      // Simulate API call
      setTimeout(() => {
        console.log("Post submitted:", { text, media })
        setIsSubmitting(false)
        setDialogOpen(false)
        // In a real app, you would add the post to the feed
      }, 1500)
    }
  
    const openDialog = () => {
      setDialogOpen(true)
    }
  return (
    <>
      <div className="flex flex-col gap-6 p-4 h-full">
        <div className="flex flex-col items-center text-center py-4">
          <Avatar className="h-10 w-10 md:h-20 md:w-20 mb-3">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Steve Rogers" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold hidden md:block">Steve Rogers</h2>
        </div>

        <Button variant="outline" className="w-full  gap-2 justify-center rounded-full hidden md:flex">
          <span className="font-medium text-gradient">Explore panel</span>
        </Button>

        <Button variant="outline" className="w-10 h-10 p-0 rounded-full flex md:hidden mx-auto">
          <Home className="h-5 w-5" />
        </Button>

        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start gap-2 text-slate-700 sm:px-2 md:px-4">
            <User className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">Profil</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-700 sm:px-2 md:px-4">
            <Users className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">Cari Relasi</span>
          </Button>
          <Button variant="ghost" onClick={openDialog} className="justify-start gap-2 text-slate-700 sm:px-2 md:px-4">
            <CirclePlus className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">Buat Postingan</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-slate-700 sm:px-2 md:px-4">
            <Settings className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">Pengaturan</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2 text-red-600 sm:px-2 md:px-4">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span className="hidden md:inline">Log out</span>
          </Button>
        </nav>
      </div>
      <PostCreatorDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmitPost={handleSubmitPost}
        isSubmitting={isSubmitting}
      />
    </>
  )
}
