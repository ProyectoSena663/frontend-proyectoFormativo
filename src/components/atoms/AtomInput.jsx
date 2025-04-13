import React from 'react'

export const AtomInput = ({type, label, icon, onclick}) => {
    
  return (
    <>
        <label onClick={onclick}>
            <input type={type} />
            <span>{label}</span>
            {icon && <span>{icon}</span>}

        </label>
    </>
  )
}
