'use client'
import React from 'react'
import Card from '@/component/Card/Card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card title="Welcome">
        <p>Hello! This is a small dashboard demo built with Next.js 15, TypeScript, Tailwind, and Framer Motion.</p>
      </Card>

      <Card title="Placeholder Stats">
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-xs text-slate-500">Visitors</div>
           </div>
          <div className="text-center">
            <div className="text-2xl font-bold">456</div>
            <div className="text-xs text-slate-500">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">78</div>
            <div className="text-xs text-slate-500">Users</div>
          </div>
        </div>
      </Card>

      <Card title="Animated Element">
        <motion.div
          className="w-full h-40 rounded-lg flex items-center justify-center bg-gradient-to-r from-slate-100 to-white"
          initial={{ rotate: -6 }}
          animate={{ rotate: 6 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-center  bg-blue-500/80">
            <div className="text-lg font-semibold">Live widget</div>
            <div className="text-xs text-slate-500">subtle rotation animation</div>
          </div>
        </motion.div>
      </Card>
    </div>
  )
}
