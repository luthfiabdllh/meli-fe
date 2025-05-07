"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, X, Video, Loader2 } from "lucide-react"
import MediaPreviewSlider from "./mediaPreviewSlider"

interface ReplyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  replyingTo: {
    id: string
    username: string
    text: string
    isPost?: boolean
  } | null
  onSubmitReply: (text: string, media: File[]) => void
  isSubmitting: boolean
}

export default function ReplyDialog({ open, onOpenChange, replyingTo, onSubmitReply, isSubmitting }: ReplyDialogProps) {
  const [replyText, setReplyText] = useState("")
  const [mediaFiles, setMediaFiles] = useState<File[]>([])
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (!replyText.trim() && mediaFiles.length === 0) return
    onSubmitReply(replyText, mediaFiles)
    resetForm()
  }

  const resetForm = () => {
    setReplyText("")
    setMediaFiles([])
    setMediaPreviews([])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles: File[] = []
    const newPreviews: string[] = []

    // Only add files if we're under the limit of 4
    for (let i = 0; i < files.length; i++) {
      if (mediaFiles.length + newFiles.length >= 4) break

      const file = files[i]
      newFiles.push(file)

      // Create preview URL
      const previewUrl = URL.createObjectURL(file)
      newPreviews.push(previewUrl)
    }

    setMediaFiles([...mediaFiles, ...newFiles])
    setMediaPreviews([...mediaPreviews, ...newPreviews])

    // Reset the input so the same file can be selected again
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const removeMedia = (index: number) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(mediaPreviews[index])

    const newFiles = [...mediaFiles]
    const newPreviews = [...mediaPreviews]

    newFiles.splice(index, 1)
    newPreviews.splice(index, 1)

    setMediaFiles(newFiles)
    setMediaPreviews(newPreviews)
  }

  const isImage = (file: File) => file.type.startsWith("image/")
  const isVideo = (file: File) => file.type.startsWith("video/")

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen && !isSubmitting) {
          resetForm()
        }
        onOpenChange(newOpen)
      }}
    >
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Reply</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {replyingTo && (
            <div className="bg-slate-50 p-3 rounded-md text-sm">
              <p className="font-medium">
                Replying to <span className="text-blue-500">@{replyingTo.username}</span>
              </p>
              <p className="text-muted-foreground mt-1 line-clamp-2">{replyingTo.text}</p>
            </div>
          )}
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40&text=SR" alt="Your avatar" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder={replyingTo ? `Reply to @${replyingTo.username}...` : "Write your reply..."}
              className="flex-1 resize-none border-none shadow-none focus-visible:ring-0"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={3}
              autoFocus
            />
          </div>

          {/* Media previews */}
          {/* Media previews slider */}
          {mediaPreviews.length > 0 && (
            <MediaPreviewSlider mediaPreviews={mediaPreviews} mediaFiles={mediaFiles} onRemove={removeMedia} />
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2 sm:justify-between items-center">
          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,video/*"
              multiple
              className="hidden"
              disabled={mediaFiles.length >= 4 || isSubmitting}
            />
            <Button
              variant="outline"
              size="sm"
              className="text-blue-500"
              onClick={() => fileInputRef.current?.click()}
              disabled={mediaFiles.length >= 4 || isSubmitting}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photo
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-500"
              onClick={() => fileInputRef.current?.click()}
              disabled={mediaFiles.length >= 4 || isSubmitting}
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </Button>
            <div className="text-xs text-muted-foreground">{mediaFiles.length}/4</div>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={(!replyText.trim() && mediaFiles.length === 0) || isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Replying...
              </>
            ) : (
              "Reply"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
