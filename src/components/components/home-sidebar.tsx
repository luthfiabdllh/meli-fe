import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Calendar } from "lucide-react"

export default function HomeSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Rekomendasi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${i}`} alt="User" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Tony Stark</p>
                <p className="text-xs text-muted-foreground">I am a metal man, who saves lots...</p>
                <p className="text-xs font-medium text-blue-500">6M+ Followers</p>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Lihat Semua
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-purple-600">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-600 rounded-md p-2">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Tech Conference 2023</p>
              <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
              <p className="text-xs text-blue-500 mt-1">12 friends going</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-purple-100 text-purple-600 rounded-md p-2">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Product Launch</p>
              <p className="text-xs text-muted-foreground">May 15, 2:00 PM</p>
              <p className="text-xs text-blue-500 mt-1">5 friends going</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            View Calendar
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-purple-600">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="bg-amber-100 text-amber-600 rounded-md p-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">#{["Technology", "Health", "Science"][i - 1]}</p>
                <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 100) + 1}K posts</p>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            See More
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-purple-600">Groups You Might Like</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 rounded-md p-2">
              <Users className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium">UI/UX Designers</p>
              <p className="text-xs text-muted-foreground">15.2K members</p>
              <Button size="sm" variant="outline" className="mt-1 h-7 text-xs">
                Join
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 text-pink-600 rounded-md p-2">
              <Users className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Frontend Developers</p>
              <p className="text-xs text-muted-foreground">8.7K members</p>
              <Button size="sm" variant="outline" className="mt-1 h-7 text-xs">
                Join
              </Button>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Discover Groups
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
