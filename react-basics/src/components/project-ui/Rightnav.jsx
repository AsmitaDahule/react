import React from 'react'

const RightNav = () => {
  return (
    <div className="sticky top-0 z-20 h-16 bg-yellow-200 flex items-center justify-between px-6 font-semibold text-lg shadow-md">
      <span>Dashboard</span>
      <input
        type="text"
        placeholder="Search project..."
        className="p-2 px-5 rounded-2xl border border-gray-500 w-1/3 focus:outline-none"
      />
    </div>
  )
}

export default RightNav
