import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, LinkIcon } from "lucide-react"
import Post from "@/components/ui/post"

export default function ProfileContent() {
  const posts = [
    {
      id: "post1",
      user: {
        name: "Steve Rogers",
        username: "steve_rogers",
        avatar: "/placeholder.svg?height=48&width=48&text=SR",
      },
      content: {
        text: "Just finished my morning run. 10 miles in 30 minutes. Not bad for someone who was frozen for 70 years!",
      },
      engagement: {
        likes: 120,
        replies: 25,
        shares: 15,
      },
      timestamp: "8 jam yang lalu",
      replies: [],
    },
    {
      id: "post2",
      user: {
        name: "Steve Rogers",
        username: "steve_rogers",
        avatar: "/placeholder.svg?height=48&width=48&text=SR",
      },
      content: {
        text: "Throwback to the 1940s. Things were simpler back then.",
        image: "/placeholder.svg?height=400&width=600",
      },
      engagement: {
        likes: 250,
        replies: 42,
        shares: 30,
      },
      timestamp: "2 hari yang lalu",
      replies: [],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg"></div>
        <div className="absolute -bottom-16 left-4 border-4 border-white rounded-full">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128&text=SR" alt="Steve Rogers" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-end p-4">
          <Button>Edit Profile</Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-4">
        <h1 className="text-2xl font-bold">Steve Rogers</h1>
        <p className="text-muted-foreground">@steve_rogers</p>

        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Joined July 4, 1918</span>
          </div>
          <div className="flex items-center gap-1">
            <LinkIcon className="h-4 w-4" />
            <a href="#" className="text-blue-500 hover:underline">
              shield.gov
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div>
            <span className="font-bold">256</span> <span className="text-muted-foreground">Following</span>
          </div>
          <div>
            <span className="font-bold">4.2M</span> <span className="text-muted-foreground">Followers</span>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="posts"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none py-3"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="replies"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none py-3"
          >
            Replies
          </TabsTrigger>
          <TabsTrigger
            value="media"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none py-3"
          >
            Media
          </TabsTrigger>
          <TabsTrigger
            value="likes"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none py-3"
          >
            Likes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-6 space-y-4">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </TabsContent>
        <TabsContent value="replies">
          <div className="py-8 text-center text-muted-foreground">No replies yet.</div>
        </TabsContent>
        <TabsContent value="media">
          <div className="py-8 text-center text-muted-foreground">No media yet.</div>
        </TabsContent>
        <TabsContent value="likes">
          <div className="py-8 text-center text-muted-foreground">No likes yet.</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
