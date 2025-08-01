"use server"
import { auth } from '@/auth'
import AddRecipeComponent from '@/components/AddTipComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <AddRecipeComponent session={session}/>
    </main>
  )
}

export default page
