import './App.css'
import { Header } from './header/Header'
import { MenuL } from './menuL/MenuL'
import { MenuR } from './menuR/MenuR'
import { ShirtScene } from "./Shirt/ShirtEscene"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home' // Ensure you have a Home component in the specified path

export const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/camisa" element={<ShirtScene />} />
        </Routes>
      </BrowserRouter>
      <MenuL />
      <MenuR />
    </div>
  )
}

