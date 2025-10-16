import React from 'react'
import {Bookmark} from 'lucide-react'

const PropP = (props) => {
  return (
      <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={14}/></button>
        </div>

        <div className="center">
            <h3>{props.name} <span>{props.date}</span></h3>
            <h2 className='job-role'>{props.post}</h2>
            <div className='job-type'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
        </div>
        </div>

        <div className="bottom">
              <div className='btndiv'>
                <h3 id='salary'>{props.salary}</h3>
                <p id='location'>{props.location}</p>
              </div>
            <button>Apply Now</button> 
        </div>
      </div>
  )
}

export default PropP
