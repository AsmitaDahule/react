import React from 'react'
import Left from './Left'
import Right from './Right'

const ProjectUi = () => {
  return (
    <div className="flex w-[90%] h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden">
      <Left />
      <Right />
    </div>
  )
}

export default ProjectUi
