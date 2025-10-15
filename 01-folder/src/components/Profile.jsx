import React from 'react'

const Profile = (user) => {
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://tse2.mm.bing.net/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?pid=Api&P=0&h=180" alt="" />
        <h1>{user.name}, {user.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Profile
