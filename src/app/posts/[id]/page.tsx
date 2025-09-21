'use client'
import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { usePathname } from 'next/navigation'
import Card from '@/component/Card/Card'

export default function PostDetail() {
  const pathname = usePathname()
  const id = pathname?.split('/')?.pop() || ''
  const { data: post, loading, error } = useFetch(id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null, [id])

  return (
    <div>
      <div className="m-4">
        <h2 className="text-xl font-semibold">Post Details</h2>
      </div>

      {loading && <div>Loading post...</div>}
      {error && <div className="text-rose-600">Failed to load post: {error}</div>}

      {post && (
        <Card title={post.title}>
          <p className="text-white/80">{post.body}</p>
          <div className="mt-4 text-sm text-red-500">Post ID: {post.id}</div>
        </Card>
      )}
    </div>
  )
}
