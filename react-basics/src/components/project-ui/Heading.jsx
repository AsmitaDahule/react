import React from 'react'

const Heading = () => {
  return (
   <div className="flex justify-between bg-gray-200 p-3 rounded-t-lg font-semibold text-gray-700">
    <div className="w-1/5 text-center">Name</div>
    <div className="w-1/5 text-center">Email</div>
    <div className="w-1/5 text-center">User Type</div>
    <div className="w-1/5 text-center">Joined</div>
    <div className="w-1/5 text-center">Status</div>
  </div>
  )
}

export default Heading
