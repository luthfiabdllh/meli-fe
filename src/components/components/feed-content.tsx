import Post from "@/components/ui/post"
import PostCreator from "./post-creator"

export default function FeedContent() {
  const posts = [
    {
      id: "post1",
      user: {
        name: "Tony Stark",
        username: "tony_stark_3000",
        avatar: "/placeholder.svg?height=48&width=48&text=TS",
      },
      content: {
        text: "Hati-hati saat makan di luar ruangan terbuka !! Risiko terkena penyakit hepatitits !!",
        image: "/placeholder.svg?height=400&width=600",
        verified: true,
      },
      engagement: {
        likes: 30,
        replies: 5,
        shares: 34,
      },
      timestamp: "2 jam yang lalu",
      replies: [
        {
          id: "reply1",
          user: {
            name: "Bruce Banner",
            username: "hulk_smash",
            avatar: "/placeholder.svg?height=32&width=32&text=BB",
          },
          content: {
            text: "Terima kasih atas informasinya dok! Sangat bermanfaat untuk kita semua.",
          },
          timestamp: "1 jam yang lalu",
          likes: 8,
        },
        {
          id: "reply2",
          user: {
            name: "Natasha Romanoff",
            username: "black_widow",
            avatar: "/placeholder.svg?height=32&width=32&text=NR",
          },
          content: {
            text: "Apakah ada tips khusus untuk menghindari risiko ini selain tidak makan di luar ruangan?",
          },
          timestamp: "45 menit yang lalu",
          likes: 5,
        },
        {
          id: "reply3",
          user: {
            name: "Tony Stark",
            username: "tony_stark_3000",
            avatar: "/placeholder.svg?height=48&width=48&text=TS",
          },
          content: {
            text: "Pastikan makanan tertutup dan terjaga kebersihannya. Cuci tangan sebelum makan juga sangat penting.",
          },
          timestamp: "30 menit yang lalu",
          likes: 12,
        },
      ],
    },
    {
      id: "post2",
      user: {
        name: "Paul Rudd",
        username: "antman_wasp",
        avatar: "/placeholder.svg?height=48&width=48&text=PR",
      },
      content: {
        text: "Exploring the amazing nature with my loved daughter and wife. These kind of visuals can soothen your mind, no matter what is your problem and it makes you to forget all your pains.",
        image: "/placeholder.svg?height=400&width=600",
      },
      engagement: {
        likes: 45,
        replies: 12,
        shares: 8,
      },
      timestamp: "5 jam yang lalu",
      replies: [
        {
          id: "reply4",
          user: {
            name: "Scott Lang",
            username: "ant_thief",
            avatar: "/placeholder.svg?height=32&width=32&text=SL",
          },
          content: {
            text: "Beautiful scenery! Where was this taken?",
          },
          timestamp: "4 jam yang lalu",
          likes: 3,
        },
        {
          id: "reply5",
          user: {
            name: "Hope van Dyne",
            username: "the_wasp",
            avatar: "/placeholder.svg?height=32&width=32&text=HV",
          },
          content: {
            text: "Nature is the best healer. Looks like a perfect family day!",
            image: "/placeholder.svg?height=200&width=300",
          },
          timestamp: "3 jam yang lalu",
          likes: 7,
        },
      ],
    },
    // Add more posts to demonstrate scrolling
    {
      id: "post3",
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
      id: "post4",
      user: {
        name: "Thor Odinson",
        username: "god_of_thunder",
        avatar: "/placeholder.svg?height=48&width=48&text=TO",
      },
      content: {
        text: "I still think Mjolnir is better than Stormbreaker. Change my mind.",
        image: "/placeholder.svg?height=400&width=600",
      },
      engagement: {
        likes: 250,
        replies: 85,
        shares: 42,
      },
      timestamp: "1 hari yang lalu",
      replies: [],
    },
    {
      id: "post5",
      user: {
        name: "Wanda Maximoff",
        username: "scarlet_witch",
        avatar: "/placeholder.svg?height=48&width=48&text=WM",
      },
      content: {
        text: "Reality is often disappointing. That's why I create my own.",
        image: "/placeholder.svg?height=400&width=600",
      },
      engagement: {
        likes: 320,
        replies: 45,
        shares: 78,
      },
      timestamp: "2 hari yang lalu",
      replies: [],
    },
  ]

  return (
    <div>
      <PostCreator />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
