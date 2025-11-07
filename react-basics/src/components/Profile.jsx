import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile-card'>
      <img src={props.img} alt="" />
      <h2 className='profile-name'>{props.name}</h2>
      <p className='dob'>{props.dob}</p>
      
      <div className='line'></div>
      <div className='button'>
        <button className='btn1'>Skip</button>
        <button className='btn2'>Message</button>
      </div>
    </div>
  )
}

export default Profile

