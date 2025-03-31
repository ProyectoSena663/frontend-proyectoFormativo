import "./MenuR.css"
import { useState } from "react";
import { CirclePlus, BookOpen, Save, Download, Share2, CircleX, CircleHelp} from 'lucide-react'

export const MenuR = () => {
  const [visible, setVisible] = useState(false);


  return (
        <div className="hover-area2" onMouseEnter={() => setVisible(true)}>

        <div 
        className={`MenuR ${visible ? "show" : ""}`} 
        onMouseLeave={() => setVisible(false)}
      >
        <ul className="UL2">
            <li className="LI2" ><CirclePlus /></li>
            <li className="LI2" ><BookOpen /></li>
            <li className="LI2" ><Save /></li>
            <li className="LI2" ><Download /></li>
            <li className="LI2" ><Share2 /></li>
            <li className="LI2" ><CircleX /></li>
            <li className="LI2" ><CircleHelp /></li>
        </ul>
        </div>
    </div>
  )
}
