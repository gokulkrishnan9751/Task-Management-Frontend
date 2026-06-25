import React from 'react'

export default function Toast({toasts}) {
  return (
    <div>
        {toasts && toasts.map((toast, index) => (
            <div key={index} className={`toast ${toast.type}`}>
                {toast.message}
            </div>
        ))}
    </div>
  )
}
