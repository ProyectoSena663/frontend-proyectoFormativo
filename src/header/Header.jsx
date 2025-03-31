import React from 'react'
import "./Header.css"
import {Sun } from 'lucide-react'

export const Header = () => {
  return (
    <div className='Header'>
        <div className='cabecera'>
        <div className='circulo'></div>
        <h2>Craft your Style</h2>
        </div>
        <div className='divv'><Sun /></div>
    </div>
  )
}

