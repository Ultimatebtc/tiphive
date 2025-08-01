"use server"
import { auth } from '@/auth'
import CategoryComponent from '@/components/CategoryComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <CategoryComponent session={session}/>
    </main>
  )
}

export default page