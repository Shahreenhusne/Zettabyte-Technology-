import React from 'react'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}


const Table = ({
  columns,
  data,
  renderRow,
}: {
  columns: string[]
  data: User[]
  renderRow: (item: User) => React.ReactNode
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 rounded-lg">
        <thead className="bg-[#2f2f2f] text-gray-200 text-sm">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 text-left font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-300">{data.map(renderRow)}</tbody>
      </table>
    </div>
  )
}

export default Table