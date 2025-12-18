"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Navbar } from "@/components/navbar"

function HomePageContent() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      if (user.role === "tutor") {
        router.push("/tutor/dashboard")
      } else {
        router.push("/browse")
      }
    } else {
      router.push("/landing")
    }
  }, [user, router])

  if (user === null) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return null
}

export default function Page() {
  return <HomePageContent />;
}
