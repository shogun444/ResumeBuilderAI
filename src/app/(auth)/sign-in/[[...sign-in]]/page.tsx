
"use client"
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return  (
  <main className='min-h-screen min-w-full flex justify-center items-center '>
        <SignIn />
    </main>)
}