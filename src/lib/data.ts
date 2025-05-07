export interface Reply {
  id: string
  user: {
    name: string
    username: string
    avatar: string
  }
  content: {
    text: string
    image?: string
    images?: string[] // Support for multiple images
  }
  timestamp: string
  likes: number
  replies?: Reply[] // Add support for nested replies
  replyingTo?: {
    id: string
    username: string
  }
}

export interface PostType {
  id: string
  user: {
    name: string
    username: string
    avatar: string
  }
  content: {
    text: string
    image?: string
    images?: string[] // Support for multiple images
    verified?: boolean
  }
  engagement: {
    likes: number
    replies: number
    shares: number
  }
  timestamp: string
  replies: Reply[]
}

export function getPosts(): PostType[] {
  return [
    {
      id: "post1",
      user: {
        name: "Tony Stark",
        username: "tony_stark_3000",
        avatar: "/placeholder.svg?height=48&width=48&text=TS",
      },
      content: {
        text: "Hati-hati saat makan di luar ruangan terbuka !! Risiko terkena penyakit hepatitits !!",
        images: ["/placeholder.svg?height=400&width=600&text=1", "/placeholder.svg?height=400&width=600&text=2"],
        verified: true,
      },
      engagement: {
        likes: 30,
        replies: 8,
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
            images: ["/placeholder.svg?height=200&width=300&text=R1"],
          },
          timestamp: "1 jam yang lalu",
          likes: 8,
          replyingTo: {
            id: "post1",
            username: "tony_stark_3000",
          },
          replies: [
            {
              id: "reply1_1",
              user: {
                name: "Tony Stark",
                username: "tony_stark_3000",
                avatar: "/placeholder.svg?height=48&width=48&text=TS",
              },
              content: {
                text: "Sama-sama Bruce, senang bisa membantu. Kesehatan adalah hal yang paling penting.",
              },
              timestamp: "55 menit yang lalu",
              likes: 5,
              replyingTo: {
                id: "reply1",
                username: "hulk_smash",
              },
            },
            {
              id: "reply1_2",
              user: {
                name: "Peter Parker",
                username: "spiderman",
                avatar: "/placeholder.svg?height=32&width=32&text=PP",
              },
              content: {
                text: "Dr. Banner, apakah Anda pernah mengalami masalah kesehatan seperti ini sebelumnya?",
                images: [
                  "/placeholder.svg?height=200&width=300&text=R2-1",
                  "/placeholder.svg?height=200&width=300&text=R2-2",
                ],
              },
              timestamp: "50 menit yang lalu",
              likes: 3,
              replyingTo: {
                id: "reply1",
                username: "hulk_smash",
              },
            },
          ],
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
          replyingTo: {
            id: "post1",
            username: "tony_stark_3000",
          },
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
            images: [
              "/placeholder.svg?height=200&width=300&text=R3-1",
              "/placeholder.svg?height=200&width=300&text=R3-2",
              "/placeholder.svg?height=200&width=300&text=R3-3",
            ],
          },
          timestamp: "30 menit yang lalu",
          likes: 12,
          replyingTo: {
            id: "reply2",
            username: "black_widow",
          },
          replies: [
            {
              id: "reply3_1",
              user: {
                name: "Natasha Romanoff",
                username: "black_widow",
                avatar: "/placeholder.svg?height=32&width=32&text=NR",
              },
              content: {
                text: "Terima kasih atas tipsnya, Tony. Akan saya terapkan mulai sekarang.",
              },
              timestamp: "25 menit yang lalu",
              likes: 4,
              replyingTo: {
                id: "reply3",
                username: "tony_stark_3000",
              },
            },
            {
              id: "reply3_2",
              user: {
                name: "Clint Barton",
                username: "hawkeye",
                avatar: "/placeholder.svg?height=32&width=32&text=CB",
              },
              content: {
                text: "Saya juga selalu membawa hand sanitizer kemana-mana. Sangat berguna.",
                images: [
                  "/placeholder.svg?height=200&width=300&text=R4-1",
                  "/placeholder.svg?height=200&width=300&text=R4-2",
                  "/placeholder.svg?height=200&width=300&text=R4-3",
                  "/placeholder.svg?height=200&width=300&text=R4-4",
                ],
              },
              timestamp: "20 menit yang lalu",
              likes: 6,
              replyingTo: {
                id: "reply3",
                username: "tony_stark_3000",
              },
            },
          ],
        },
      ],
    },
    // Keep other posts as they were...
    {
      id: "post2",
      user: {
        name: "Paul Rudd",
        username: "antman_wasp",
        avatar: "/placeholder.svg?height=48&width=48&text=PR",
      },
      content: {
        text: "Exploring the amazing nature with my loved daughter and wife. These kind of visuals can soothen your mind, no matter what is your problem and it makes you to forget all your pains.",
        images: [
          "/placeholder.svg?height=400&width=600&text=1",
          "/placeholder.svg?height=400&width=600&text=2",
          "/placeholder.svg?height=400&width=600&text=3",
          "/placeholder.svg?height=400&width=600&text=4",
        ],
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
          replyingTo: {
            id: "post2",
            username: "antman_wasp",
          },
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
            images: ["/placeholder.svg?height=200&width=300&text=R5"],
          },
          timestamp: "3 jam yang lalu",
          likes: 7,
          replyingTo: {
            id: "post2",
            username: "antman_wasp",
          },
        },
      ],
    },
    // Other posts remain the same...
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
        images: [
          "/placeholder.svg?height=400&width=600&text=1",
          "/placeholder.svg?height=400&width=600&text=2",
          "/placeholder.svg?height=400&width=600&text=3",
        ],
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
}

// Helper function to find a reply by ID (recursively)
export function findReplyById(replies: Reply[], replyId: string): Reply | null {
  for (const reply of replies) {
    if (reply.id === replyId) {
      return reply
    }

    if (reply.replies && reply.replies.length > 0) {
      const nestedReply = findReplyById(reply.replies, replyId)
      if (nestedReply) {
        return nestedReply
      }
    }
  }

  return null
}

// Helper function to get all replies flattened (for display purposes)
export function getAllReplies(replies: Reply[]): Reply[] {
  let allReplies: Reply[] = []

  for (const reply of replies) {
    allReplies.push(reply)

    if (reply.replies && reply.replies.length > 0) {
      allReplies = [...allReplies, ...getAllReplies(reply.replies)]
    }
  }

  return allReplies
}
