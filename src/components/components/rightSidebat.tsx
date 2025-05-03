import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DefaultRightSidebar() {
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Article</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden">
            <img src="/placeholder.svg?height=200&width=300" alt="Article image" className="w-full h-44 object-cover" />
          </div>
          <div>
            <p className="font-medium text-sm">@steve_rogers</p>
            <p className="text-sm text-muted-foreground">
              Liur Anjing dapat menyebabkan penyakit langka yang disebut de...
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-600">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border-b pb-2 last:border-0">
              <p className="font-medium">#{["Technology", "Health", "Science", "Entertainment", "Sports"][i - 1]}</p>
              <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 100) + 1}K posts</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
