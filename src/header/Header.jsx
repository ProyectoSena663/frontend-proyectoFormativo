import React from 'react'
import "./Header.css"
import {Sun } from 'lucide-react'
import { NavLink}  from 'react-router-dom'


export const Header = () => {
  return (
    <div className='Header'>
        <div className='cabecera'>
          <div className='circulo'></div>
          <h2>Craft your Style</h2>
        </div>
        <nav>
          <ul className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/camisa">Camisa</NavLink>
            <Sun/> 
          </ul>
        </nav>
    </div>
  );
};
