import './App.css'
import { Header } from './header/Header'
import { MenuL } from './menuL/MenuL'
import { MenuR } from './menuR/MenuR'
// import { Prototipo } from './prototipo/Prototipo'
import { ShirtScene } from "./Shirt/ShirtEscene"


// export const App = () => {

//   return (
//     <div className='App'>
//       <Header/>
//       <Prototipo/>
//     </div>
//   )
// }


export const App = () => {

  return (
    <div className='App'>
      <Header/>
      <MenuL />
      <MenuR />
      <ShirtScene/>
    </div>
  )
}

