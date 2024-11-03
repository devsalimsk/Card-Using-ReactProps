import React from 'react'
import './UserCard.css'


const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>
            {props.name}
        </p>
      <img id='user-img' src={props.image} alt="tiger" />
      <p id='user-desc'>
            {props.desc}
        </p>
    </div>
  )
}

export default UserCard
