import React from 'react'

export default function FeildSet({onChange, value, type, errMSg, label}) {
  return (
    <div>
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange}/>
        <label className='err-msg'>{errMSg}</label>
    </div>
  )
}
