import React, { useState, useContext } from 'react'
import Toast from '../component/ui/Toast';
import { createContext } from 'react';

export const ToastContext = createContext();

export default function TostProvider({children}) {
    const [toasts, setToasts] = useState([]);

    function addToast(message, type = 'info') {
        const id = Date.now();
        setToasts((prev) => [...prev, {id, message, type}])

        setTimeout(() => {
            removeToast(id)
        }, 3000);
    }
    
    function removeToast(id) {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <Toast toasts={toasts}/>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
    const context = useContext(ToastContext);
    return context.addToast;
}