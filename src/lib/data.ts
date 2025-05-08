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

export interface UserProfile {
  id: string
  name: string
  username: string
  avatar: string
  coverImage: string
  bio: string
  location: string
  website?: string
  joinDate: string
  following: number
  followers: number
  isVerified?: boolean
  profession?: string
  posts: string[] // IDs of posts by this user
  communities: string[] // IDs of communities this user is part of
}

export interface Community {
  id: string
  name: string
  slug: string
  description: string
  coverImage: string
  avatar: string
  memberCount: number
  postCount: number
  category: string
  isPrivate: boolean
  createdAt: string
  admins: string[] // usernames of admins
  members: string[] // usernames of members
  tags: string[]
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

// Get user profiles
export function getUserProfiles(): UserProfile[] {
  return [
    {
      id: "user1",
      name: "Tony Stark",
      username: "tony_stark_3000",
      avatar: "/placeholder.svg?height=200&width=200&text=TS",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Tony's%20Cover",
      bio: "Genius, billionaire, playboy, philanthropist. CEO of Stark Industries.",
      location: "New York, USA",
      website: "https://starkindustries.com",
      joinDate: "April 2008",
      following: 42,
      followers: 4200000,
      isVerified: true,
      profession: "Medical Doctor, Specialist at GMC UGM",
      posts: ["post1"],
      communities: ["comm1", "comm3"],
    },
    {
      id: "user2",
      name: "Steve Rogers",
      username: "steve_rogers",
      avatar: "/placeholder.svg?height=200&width=200&text=SR",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Steve's%20Cover",
      bio: "Super soldier, World War II veteran, and former Avenger. I believe in freedom, justice, and the American way.",
      location: "Brooklyn, NY",
      website: "https://shield.gov",
      joinDate: "July 1918",
      following: 256,
      followers: 4200000,
      isVerified: true,
      posts: ["post3"],
      communities: ["comm1", "comm2"],
    },
    {
      id: "user3",
      name: "Thor Odinson",
      username: "god_of_thunder",
      avatar: "/placeholder.svg?height=200&width=200&text=TO",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Thor's%20Cover",
      bio: "God of Thunder, Asgardian, Avenger. I'm still worthy.",
      location: "New Asgard, Norway",
      joinDate: "May 2011",
      following: 89,
      followers: 7500000,
      isVerified: true,
      posts: ["post4"],
      communities: ["comm2"],
    },
    {
      id: "user4",
      name: "Wanda Maximoff",
      username: "scarlet_witch",
      avatar: "/placeholder.svg?height=200&width=200&text=WM",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Wanda's%20Cover",
      bio: "Enhanced individual with reality manipulation abilities.",
      location: "Westview, NJ",
      joinDate: "May 2015",
      following: 74,
      followers: 3800000,
      isVerified: true,
      posts: ["post5"],
      communities: ["comm3", "comm4"],
    },
    {
      id: "user5",
      name: "Bruce Banner",
      username: "hulk_smash",
      avatar: "/placeholder.svg?height=200&width=200&text=BB",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Bruce's%20Cover",
      bio: "Scientist with anger management issues. Seven PhDs.",
      location: "Unknown",
      website: "https://gamma-research.org",
      joinDate: "June 2008",
      following: 103,
      followers: 2900000,
      isVerified: true,
      profession: "Nuclear Physicist, Gamma Radiation Expert",
      posts: [],
      communities: ["comm1", "comm4"],
    },
    {
      id: "user6",
      name: "Natasha Romanoff",
      username: "black_widow",
      avatar: "/placeholder.svg?height=200&width=200&text=NR",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Natasha's%20Cover",
      bio: "Former KGB, former SHIELD. Avenger.",
      location: "Classified",
      joinDate: "December 2010",
      following: 28,
      followers: 3100000,
      isVerified: true,
      posts: [],
      communities: ["comm2", "comm3"],
    },
    {
      id: "user7",
      name: "Paul Rudd",
      username: "antman_wasp",
      avatar: "/placeholder.svg?height=200&width=200&text=PR",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Paul's%20Cover",
      bio: "Actor, comedian, and part-time superhero. I can get really small.",
      location: "San Francisco, CA",
      website: "https://x-con.org",
      joinDate: "July 2015",
      following: 421,
      followers: 1800000,
      isVerified: true,
      posts: ["post2"],
      communities: ["comm4"],
    },
  ]
}

// Get user profile by username
export function getUserProfileByUsername(username: string): UserProfile | undefined {
  return getUserProfiles().find((profile) => profile.username === username)
}

// Get communities
export function getCommunities(): Community[] {
  return [
    {
      id: "comm1",
      name: "Avengers Initiative",
      slug: "avengers-initiative",
      description: "Earth's Mightiest Heroes. We discuss strategies, missions, and share battle stories.",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Avengers",
      avatar: "/placeholder.svg?height=200&width=200&text=A",
      memberCount: 12,
      postCount: 1458,
      category: "Superheroes",
      isPrivate: false,
      createdAt: "May 2012",
      admins: ["tony_stark_3000", "steve_rogers"],
      members: ["tony_stark_3000", "steve_rogers", "hulk_smash", "god_of_thunder", "black_widow"],
      tags: ["heroes", "shield", "defense", "teamwork"],
    },
    {
      id: "comm2",
      name: "Science Bros",
      slug: "science-bros",
      description: "For those who love science, technology, and occasional gamma radiation accidents.",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Science%20Bros",
      avatar: "/placeholder.svg?height=200&width=200&text=SB",
      memberCount: 8743,
      postCount: 12567,
      category: "Science & Technology",
      isPrivate: false,
      createdAt: "June 2013",
      admins: ["tony_stark_3000", "hulk_smash"],
      members: ["tony_stark_3000", "hulk_smash", "steve_rogers", "god_of_thunder", "black_widow"],
      tags: ["science", "technology", "research", "innovation"],
    },
    {
      id: "comm3",
      name: "Quantum Realm Explorers",
      slug: "quantum-realm",
      description: "Discussing the mysteries of the quantum realm and its applications.",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Quantum%20Realm",
      avatar: "/placeholder.svg?height=200&width=200&text=QR",
      memberCount: 3421,
      postCount: 5632,
      category: "Science & Technology",
      isPrivate: false,
      createdAt: "August 2018",
      admins: ["antman_wasp"],
      members: ["antman_wasp", "tony_stark_3000", "hulk_smash", "scarlet_witch", "black_widow"],
      tags: ["quantum", "physics", "time-travel", "particles"],
    },
    {
      id: "comm4",
      name: "Enhanced Individuals Support",
      slug: "enhanced-support",
      description: "A safe space for enhanced individuals to share experiences and support each other.",
      coverImage: "/placeholder.svg?height=600&width=1200&text=Enhanced%20Support",
      avatar: "/placeholder.svg?height=200&width=200&text=ES",
      memberCount: 1876,
      postCount: 8943,
      category: "Support & Wellness",
      isPrivate: true,
      createdAt: "January 2016",
      admins: ["scarlet_witch", "hulk_smash"],
      members: ["scarlet_witch", "hulk_smash", "antman_wasp"],
      tags: ["support", "enhanced", "abilities", "mental-health"],
    },
  ]
}

// Get community by slug
export function getCommunityBySlug(slug: string): Community | undefined {
  return getCommunities().find((community) => community.slug === slug)
}

// Get posts by username
export function getPostsByUsername(username: string): PostType[] {
  return getPosts().filter((post) => post.user.username === username)
}

// Get posts by community
export function getPostsByCommunity(communityId: string): PostType[] {
  // In a real app, posts would have a communityId field
  // For now, we'll just return some posts as a simulation
  return getPosts().slice(0, 3)
}
