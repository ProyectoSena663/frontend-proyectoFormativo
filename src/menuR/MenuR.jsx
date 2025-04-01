import "./MenuR.css"
import { useState } from "react";
import { CirclePlus, BookOpen, Save, Download, Share2, CircleX, CircleHelp} from 'lucide-react'

export const MenuR = () => {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);



  return (
    <div className="hover-area2" onMouseEnter={() => setVisible(true)}>
        <div className={`MenuR ${visible ? "show" : ""}`} onMouseLeave={() => setVisible(false)}>

        <ul className="UL2">
            <li className="LI2" ><CirclePlus /></li>
            <li className="LI2" ><BookOpen /></li>
            <li className="LI2" ><Save /></li>
            <li className="LI2" ><Download /></li>
            <li className="LI2" ><Share2 /></li>
            <li className="LI2" ><CircleX /></li>
            <li className="LI2" onClick={() => setModal(true)}>
              <CircleHelp />
            </li>
        </ul>
        </div>
        {modal && (
          <div className="Modal-Overlay1" onClick={() => setModal(false)}>
            <div className="Modal-Content1" onClick={(e) => e.stopPropagation()}>

              <div className="infoo">
              <div className="info" >Info1</div>
              <div className="info" >Info3</div>
              <div className="info" >Info3</div>
              <div className="info" >Info4</div>
              <div className="info" >Info5</div>
              <div className="info" >Info6</div>
              <div className="info" >Info7</div>
              <div className="info" >Info8</div>
              <div className="info" >Info9</div>
              </div>

              <div className="lorem">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae, voluptates cum cumque, 
                  enim neque aperiam modi maiores 
                  aspernatur quae odit libero 
                  nostrum nam repudiandae veritatis? Consectetur itaque suscipit id. Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Quos quis repellendus et laboriosam aperiam. Quas, ipsa voluptas. Quidem blanditiis ex quasi saepe 
                  aliquam eius 
                  eaque laboriosam dolores, ut voluptatibus sapiente.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae, voluptates cum cumque, 
                  enim neque aperiam modi maiores 
                  aspernatur quae odit libero 
                  nostrum nam repudiandae veritatis? Consectetur itaque suscipit id. Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Quos quis repellendus et laboriosam aperiam. Quas, ipsa voluptas. Quidem blanditiis ex quasi saepe 
                  aliquam eius 
                  eaque laboriosam dolores, ut voluptatibus sapiente
                  </p>
              <button className="closee" onClick={() => setModal(false)}>X</button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
