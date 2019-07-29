import React from 'react'

const Icon = (props) => {
  return (
    <div className='icon'>
      <img className='icon-image' src={props.image} alt='Icon' />
      <h2 className='icon-title'>{props.title}</h2>
      <p className='icon-description'>{props.description}</p>
    </div>
  )
}

export default Icon
