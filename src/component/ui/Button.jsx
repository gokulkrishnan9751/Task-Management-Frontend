import React from 'react'

export default function Button({children, onClick, type}) {
  return (
    <button className='btn' onClick={onClick}>Button</button>
  )
}
