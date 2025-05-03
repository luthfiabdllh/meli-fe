import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, ImageIcon, Video } from "lucide-react"

export default function PostCreator() {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex-1 gap-2 bg-amber-50 hover:bg-amber-100 border-amber-200">
            <Pencil className="h-4 w-4" />
            <span>Write a post</span>
          </Button>
          <Button variant="outline" className="flex-1 gap-2 bg-amber-50 hover:bg-amber-100 border-amber-200">
            <ImageIcon className="h-4 w-4" />
            <span>Upload photo</span>
          </Button>
          <Button variant="outline" className="flex-1 gap-2 bg-amber-50 hover:bg-amber-100 border-amber-200">
            <Video className="h-4 w-4" />
            <span>Upload video</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
