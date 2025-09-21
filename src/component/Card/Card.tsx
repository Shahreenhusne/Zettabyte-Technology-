 'use client'
import React from 'react'
import { motion } from 'framer-motion'


type CardProps = {
title?: string
className?: string
children?: React.ReactNode
}


export default function Card({ title, children, className = '' }: CardProps) {
return (
        <motion.article
        layout
        initial={{ opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
         whileHover={{y: -5, boxShadow: "0px 25px 50px rgba(0,0,0,0.5)"}}
        className={`rounded-2xl p-4 shadow-sm border border-slate-100 bg-[#1e1e1e]   m-4 ${className}`}
        >
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <div>{children}</div>
        </motion.article>
)
}
