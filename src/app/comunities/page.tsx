import type { Metadata } from "next"
import { getCommunities } from "@/lib/data"
import AppLayout from "@/components/components/appLayout"
import CommunitiesContent from "@/components/components/comunitiesContent"
import CommunitiesSidebar from "@/components/components/comunitiesSidebar"

export const metadata: Metadata = {
  title: "Communities - MeLi",
  description: "Discover and join communities on MeLi social media app",
}

export default function CommunitiesPage() {
  const communities = getCommunities()

  return (
    <AppLayout rightSidebarContent={<CommunitiesSidebar />}>
      <div className="pb-16 sm:pb-0">
        <CommunitiesContent communities={communities} />
      </div>
    </AppLayout>
  )
}
