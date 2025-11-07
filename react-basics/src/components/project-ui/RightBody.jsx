import React from 'react'
import RightNav from './Rightnav.jsx'
import Card from './Card.jsx'
import Table from './Table'
const RightBody = () => {
  return (
    <div className='overflow-y-auto no-scrollbar'>
      <RightNav />
      <div className='overflow-y-auto no-scrollbar flex flex-row gap-5 p-2 m-3'>
        <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
  <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
  <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
  <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
  <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
  <Card img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Asmita Dahule"
  dob="Born: 15 March 2004" />
      </div>
      <Table />
    </div>
  )
}

export default RightBody
