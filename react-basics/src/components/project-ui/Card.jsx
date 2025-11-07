import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-white w-60 rounded-2xl shadow-md p-4 flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300">
      <img
        src={props.img}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-300"
      />
      <h2 className="text-lg font-semibold text-gray-800">{props.name}</h2>
      <p className="text-sm text-gray-500">{props.dob}</p>

      <div className="w-full h-[1px] bg-gray-300"></div>

      <div className="flex gap-3 mt-2">
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full hover:bg-gray-300 transition">
          Skip
        </button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition">
          Message
        </button>
      </div>
    </div>
  )
}

export default Card
