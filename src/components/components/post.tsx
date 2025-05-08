"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, ChevronDown, ChevronUp, Copy, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { PostType, Reply } from "@/lib/data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "../../../hooks/use-toast"
import ImageViewer from "./imageViewer"
import ReplyDialog from "./replyDialog"

interface PostProps extends PostType {}

export default function Post({ id, user, content, engagement, timestamp, replies = [] }: PostProps) {
  const [showReplies, setShowReplies] = useState(false)
  const [replyDialogOpen, setReplyDialogOpen] = useState(false)
  const [replyingTo, setReplyingTo] = useState<{
    id: string
    username: string
    text: string
    isPost?: boolean
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // State for likes and shares
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(engagement.likes)
  const [shareCount, setShareCount] = useState(engagement.shares)

  // State for image viewer
  const [imageViewerOpen, setImageViewerOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handlePostClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on a button or link
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest("a")) {
      return
    }

    router.push(`/post/${id}`)
  }

  const handleReplyToPost = (e: React.MouseEvent) => {
    e.stopPropagation()
    setReplyingTo({
      id,
      username: user.username,
      text: content.text,
      isPost: true,
    })
    setReplyDialogOpen(true)
  }

  const handleReplyToComment = (replyId: string, username: string, text: string) => {
    setReplyingTo({
      id: replyId,
      username,
      text,
    })
    setReplyDialogOpen(true)
  }

  const handleSubmitReply = (text: string, media: File[]) => {
    if ((!text.trim() && media.length === 0) || !replyingTo) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Reply submitted:", { text, media, replyingTo })
      setIsSubmitting(false)
      setReplyDialogOpen(false)
      setReplyingTo(null)
      // In a real app, you would add the reply to the post
    }, 1000)
  }

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked(!liked)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))

    // Show toast notification
    if (!liked) {
      toast({
        title: "Post liked",
        description: "You've liked this post",
      })
    }
  }

  const handleShare = (platform: string) => {
    // Increase share count
    setShareCount((prev) => prev + 1)

    // In a real app, you would implement actual sharing functionality
    const shareUrl = `${window.location.origin}/post/${id}`

    // Show toast based on share type
    toast({
      title: `Shared on ${platform}`,
      description: platform === "copy" ? "Link copied to clipboard!" : `Post shared on ${platform}`,
    })

    // If copying to clipboard
    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl)
    } else {
      console.log(`Sharing to ${platform}: ${shareUrl}`)
      // In a real app, you would open the respective sharing dialog
    }
  }

  const handleImageClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImageIndex(index)
    setImageViewerOpen(true)
  }

  // Function to render media grid for replies
  const renderReplyMediaGrid = (images?: string[], replyId?: string) => {
    if (!images || images.length === 0) return null

    return (
      <div
        className={`grid gap-1 mt-2 rounded-lg overflow-hidden ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
              ? "grid-cols-2"
              : images.length >= 3
                ? "grid-cols-2"
                : ""
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${
              images.length === 3 && index === 0 ? "col-span-2 row-span-2" : images.length === 4 ? "aspect-square" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImageIndex(index)
              setImageViewerOpen(true)
            }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Reply image ${index + 1}`}
              className={`w-full h-full object-cover ${
                images.length === 1 ? "max-h-[200px]" : "aspect-square"
              } cursor-pointer hover:opacity-90 transition-opacity`}
            />
          </div>
        ))}
      </div>
    )
  }

  // Function to render replies with proper nesting
  const renderReplies = (replies: Reply[], level = 0, parentId?: string) => {
    // For the feed, only show first level replies and limit to 2
    if (level > 0 || replies.length === 0) return null

    const displayReplies = replies.slice(0, 2)

    return (
      <div className="border-l-2 border-gray-200 pl-4 ml-6 mt-2 space-y-4">
        {displayReplies.map((reply) => (
          <div
            key={reply.id}
            className="pt-2 relative cursor-pointer hover:bg-slate-100 rounded-md transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/post/${id}/reply/${reply.id}`)
            }}
          >
            {/* Horizontal connecting line */}
            <div className="absolute w-4 h-0.5 bg-slate-200 left-[-16px] top-[30px]" />

            <div className="flex gap-3">
              <Link href={`/user/${reply.user.username}`} onClick={(e) => e.stopPropagation()}>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={reply.user.avatar || "/placeholder.svg"} alt={reply.user.name} />
                  <AvatarFallback>{reply.user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </Link>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/user/${reply.user.username}`}
                    className="font-semibold text-sm hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {reply.user.name}
                  </Link>
                  <Link
                    href={`/user/${reply.user.username}`}
                    className="text-xs text-muted-foreground hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    @{reply.user.username}
                  </Link>
                  <span className="text-xs text-muted-foreground">· {reply.timestamp}</span>
                </div>
                {reply.replyingTo && (
                  <p className="text-xs text-muted-foreground">
                    Replying to <span className="text-blue-500">@{reply.replyingTo.username}</span>
                  </p>
                )}
                <p className="text-sm mt-1">{reply.content.text}</p>

                {/* Render media grid for reply */}
                {reply.content.images && renderReplyMediaGrid(reply.content.images, reply.id)}
                {reply.content.image && !reply.content.images && renderReplyMediaGrid([reply.content.image], reply.id)}

                <div className="flex gap-4 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs gap-1 text-muted-foreground"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart className="h-3 w-3" />
                    <span>{reply.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-muted-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleReplyToComment(reply.id, reply.user.username, reply.content.text)
                    }}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>

            {/* Show indicator if this reply has nested replies */}
            {reply.replies && reply.replies.length > 0 && (
              <div className="ml-8 mt-2 text-xs text-blue-500">
                <Link
                  href={`/post/${id}/reply/${reply.id}`}
                  className="hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Show {reply.replies.length} more {reply.replies.length === 1 ? "reply" : "replies"}
                </Link>
              </div>
            )}
          </div>
        ))}

        {/* Show "View more" link if there are more replies */}
        {replies.length > 2 && (
          <Link
            href={`/post/${id}`}
            className="text-sm text-blue-500 hover:underline block pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            Show all {replies.length} replies
          </Link>
        )}
      </div>
    )
  }

  // Function to render media grid
  const renderMediaGrid = () => {
    // If there's no image, return null
    if (!content.images && !content.image) return null

    // Convert single image to array for consistent handling
    const images = content.images || (content.image ? [content.image] : [])
    if (images.length === 0) return null

    return (
      <div
        className={`grid gap-1 mt-3 rounded-lg overflow-hidden ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
              ? "grid-cols-2"
              : images.length >= 3
                ? "grid-cols-2"
                : ""
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${
              images.length === 3 && index === 0 ? "col-span-2 row-span-2" : images.length === 4 ? "aspect-square" : ""
            }`}
            onClick={(e) => handleImageClick(index, e)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Post image ${index + 1}`}
              className={`w-full h-full object-cover ${
                images.length === 1 ? "max-h-[400px]" : "aspect-square"
              } cursor-pointer hover:opacity-90 transition-opacity`}
            />
          </div>
        ))}
      </div>
    )
  }

  // Get all images for the image viewer
  const getAllImages = () => {
    return content.images || (content.image ? [content.image] : [])
  }

  return (
    <>
      <Card className="mb-4 cursor-pointer hover:bg-slate-50 transition-colors" onClick={handlePostClick}>
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <Link href={`/user/${user.username}`} onClick={(e) => e.stopPropagation()}>
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link
                href={`/user/${user.username}`}
                className="font-bold hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {user.name}
              </Link>
              <Link
                href={`/user/${user.username}`}
                className="text-muted-foreground hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                @{user.username}
              </Link>
              {content.verified && (
                <Badge variant="outline" className="ml-auto bg-green-50 text-green-600 border-green-200">
                  Postingan diverifikasi
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Dokter spesialis klinik kesehatan GMC UGM</p>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="mb-3">{content.text}</p>
          {renderMediaGrid()}
          <p className="text-xs text-muted-foreground mt-2">{timestamp}</p>
        </CardContent>
        <CardFooter className="flex justify-between pt-2 flex-wrap gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-1 ${liked ? "text-rose-500" : "text-muted-foreground"}`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-rose-500" : ""}`} />
            <span>Like {likeCount}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-muted-foreground"
            onClick={(e) => {
              e.stopPropagation()
              if (replies.length > 0) {
                setShowReplies(!showReplies)
              } else {
                router.push(`/post/${id}`)
              }
            }}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{engagement.replies} Replies</span>
            {replies.length > 0 &&
              (showReplies ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />)}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-muted-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                <Share2 className="h-4 w-4" />
                <span>{shareCount}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
              <DropdownMenuItem onClick={() => handleShare("copy")}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("Facebook")}>
                <Facebook className="h-4 w-4 mr-2" />
                Share on Facebook
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("Twitter")}>
                <Twitter className="h-4 w-4 mr-2" />
                Share on Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("LinkedIn")}>
                <Linkedin className="h-4 w-4 mr-2" />
                Share on LinkedIn
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="text-blue-500" onClick={handleReplyToPost}>
            Reply
          </Button>
        </CardFooter>

        {/* Replies section */}
        {showReplies && replies.length > 0 && (
          <div className="px-4 pb-4" onClick={(e) => e.stopPropagation()}>
            {renderReplies(replies)}
          </div>
        )}
      </Card>

      {/* Reply Dialog */}
      <ReplyDialog
        open={replyDialogOpen}
        onOpenChange={setReplyDialogOpen}
        replyingTo={replyingTo}
        onSubmitReply={handleSubmitReply}
        isSubmitting={isSubmitting}
      />

      {/* Image Viewer */}
      <ImageViewer
        images={getAllImages()}
        initialIndex={selectedImageIndex}
        open={imageViewerOpen}
        onOpenChange={setImageViewerOpen}
      />
    </>
  )
}
