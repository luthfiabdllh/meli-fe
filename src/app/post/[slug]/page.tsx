import type { Metadata } from "next"
import { getPosts } from "@/lib/data"
import AppLayout from "@/components/components/appLayout"
import PostDetail from "@/components/components/postDetail"
import PostDetailSidebar from "@/components/components/postDetailSidebar"


export const metadata: Metadata = {
  title: "Post - MeLi",
  description: "View post and replies on MeLi social media app",
}

interface PostPageProps {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const posts = getPosts()
  const post = posts.find((post) => post.id === slug)
  

  if (!post) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-lg text-muted-foreground">Post not found</p>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout rightSidebarContent={<PostDetailSidebar post={post} />}>
      <div className="pb-16 sm:pb-0">
        <PostDetail post={post} />
      </div>
    </AppLayout>
  )
}
