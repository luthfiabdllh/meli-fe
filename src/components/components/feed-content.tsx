
import { getPosts } from "@/lib/data"
import Post from "./post"
import PostCreator from "./post-creator"

export default function FeedContent() {
  const posts = getPosts()

  return (
    <div>
      <PostCreator />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
