'use client'
import React, { useState } from 'react'
import Card from '@/component/Card/Card'
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Loading from '@/app/loading'
import Error from '@/app/error'

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false)
  const endpoint = simulateError ? 'https://jsonplaceholder.typicode.com/invalid-posts' : 'https://jsonplaceholder.typicode.com/posts'
  const { data: posts = [], loading, error } = useFetch<any[]>(endpoint, [simulateError])

  return (
    <div>
      <div className="flex items-center justify-between m-5">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex gap-2">
          <button onClick={() => setSimulateError((s) => !s)} className="rounded-full px-3 py-1  bg-gray-500 text-blue-700">Toggle Error</button>
        </div>
      </div>

      {loading && <Loading />}
      {error && <Error error={error} reset={() => setSimulateError(false)} />}

     {!loading && !error && posts && posts.length > 0 && (
      <motion.div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-4">
            {posts.slice(0, 12).map((post: { id: number; title: string; body: string }, i: number) => (
            <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
            >
                <Link href={`/posts/${post.id}`}>
                <Card title={post.title} className="cursor-pointer hover:shadow-md text-white sm:w-80 sm:h-60 md:w-60 lg:w-90 m-4 overflow-none">
                    <p className="text-sm text-white/80">{post.body.slice(0, 120)}...</p>
                </Card>
                </Link>
      </motion.div>
    ))}
  </motion.div>
)}
    </div>
  )
}
