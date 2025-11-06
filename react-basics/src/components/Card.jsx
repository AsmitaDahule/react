import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src={props.img} alt="" />
        <h2 className='name'>{props.name}, {props.age}</h2>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipi.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
