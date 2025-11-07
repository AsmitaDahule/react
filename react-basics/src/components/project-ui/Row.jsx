import React from 'react'

const Row = () => {
  return (
  <div className="flex justify-between items-center bg-white p-3 mt-3 border-b rounded-b-md shadow-sm">
    <div className="w-1/5 text-center">Asmita Dah</div>
    <div className="w-1/5 text-center">dahuleasmita@gmail.com</div>
    <div className="w-1/5 text-center">Active</div>
    <div className="w-1/5 text-center">9th April 2025</div>
    <div className="w-1/5 text-center">
      <button className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-black">
        Pending
      </button>
    </div>
  </div>
  )
}

export default Row
