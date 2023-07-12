import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

async function getData() {
  const tags = await prisma.tag.findMany()

  return tags
}


export default async function Home() {

  const tags = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        {JSON.stringify(tags)}
      </p>
    </main>
  )
}




