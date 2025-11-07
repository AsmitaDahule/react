import React from 'react'
import Profile from './Profile.jsx'
import LeftNav from './LeftNav.jsx'

const Left = () => {
  return (
    <div className="w-1/4 bg-amber-300 flex flex-col items-center py-6">
      <Profile />
      <LeftNav />
    </div>
  )
}

export default Left
