'use client'
import useFetch from '@/hooks/useFetch'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Table from '@/component/Table/Table'
import Modal from '@/component/Model/Model'
import Loading from '../loading'
import Error from '../error'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

const UserList = () => {
  const [simulateError, setSimulateError] = useState(false)
  const endpoint = simulateError ? 'https://jsonplaceholder.typicode.com/invalid-users' :'https://jsonplaceholder.typicode.com/users'
    const { data: users = [], loading, error } = useFetch<User[]>(endpoint)
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const columns = ['Name', 'Username', 'Email', 'Phone', 'Website']

  const renderRow = (item: User) => (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      key={item.id}
      className="border-b border-gray-700 even:bg-[#252525] hover:bg-gray-800 text-sm"
      onClick={() => setSelectedUser(item)}
    >
      <td className="px-4 py-2">{item.name}</td>
      <td className="px-4 py-2">{item.username}</td>
      <td className="px-4 py-2">{item.email}</td>
      <td className="px-4 py-2">{item.phone}</td>
      <td className="px-4 py-2">{item.website}</td>
    </motion.tr>
  )

  return (
    <>
     <div className="flex items-center justify-between m-5">
            <h2 className="text-xl font-semibold"></h2>
            <div className="flex gap-2">
              <button onClick={() => setSimulateError((s) => !s)} className="rounded-full px-3 py-1  bg-gray-500 text-blue-700">Toggle Error</button>
            </div>
          </div>
    
          {loading && <Loading/>}
          {error && <Error error={error} reset={() => setSimulateError(false)} />}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-[#1e1e1e] mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 text-center sm:text-left">
          User List
        </h2>
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-400"
            size={18}
          />
        </div> */}
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">Error: {error}</p>}
      {!loading && !error && (
        <Table columns={columns} data={users ?? []} renderRow={renderRow} />
      )}
    </motion.div>
       <Modal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        user={selectedUser}
      />
      </>
  )
}

export default UserList