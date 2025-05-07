import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, FileText, Award } from "lucide-react"
import Image from "next/image"

export default function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">About</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Super soldier, World War II veteran, and former Avenger. I believe in freedom, justice, and the American
            way.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Super Soldier</Badge>
            <Badge variant="secondary">Avenger</Badge>
            <Badge variant="secondary">Shield Enthusiast</Badge>
            <Badge variant="secondary">Time Traveler</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Photos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-slate-100 flex items-center justify-center overflow-hidden"
              >
                <Image
                  width={800}
                  height={800}
                  src={`/placeholder.svg?height=100&width=100&text=${i}`}
                  alt={`Photo ${i}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-3 text-sm">
            <ImageIcon className="h-4 w-4 mr-2" />
            See all photos
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-amber-100 text-amber-600 rounded-md p-2">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Medal of Honor</p>
              <p className="text-xs text-muted-foreground">Awarded for exceptional bravery in combat</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-600 rounded-md p-2">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">World Saver</p>
              <p className="text-xs text-muted-foreground">Saved the world multiple times</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full text-sm">
            <FileText className="h-4 w-4 mr-2" />
            View all achievements
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Similar Profiles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Tony Stark", username: "iron_man", avatar: "TS" },
            { name: "Natasha Romanoff", username: "black_widow", avatar: "NR" },
            { name: "Bruce Banner", username: "hulk", avatar: "BB" },
          ].map((user) => (
            <div key={user.username} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${user.avatar}`} alt={user.name} />
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">@{user.username}</p>
              </div>
              <Button size="sm" variant="outline" className="h-8">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
