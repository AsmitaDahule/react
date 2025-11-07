import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mb-6">
      <img
        src="https://randomuser.me/api/portraits/women/65.jpg"
        alt="profile"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
      />
      <h2 className="text-lg font-semibold text-white">Asmita Dahule</h2>
      <p className="text-sm text-white/90">Frontend Developer</p>
    </div>
  )
}

export default Profile
