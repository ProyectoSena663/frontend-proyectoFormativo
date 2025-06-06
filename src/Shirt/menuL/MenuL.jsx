import { useState } from "react";
import { ShirtModel} from "../Shirt/ShirtModel";
import { Palette, UserPen, Ellipsis, VenusAndMars, Shirt } from "lucide-react";
import "./MenuL.css";

export const MenuL = () => {
  const [color, setColor] = useState("#ffffff"); // Estado para el color
  const [visible, setVisible] = useState(false); // Estado para la visibilidad del menú
  // Estados para los modales
  const [modalOpen, setModalOpen] = useState(false); // Modal para el color
  const [modalOpen2, setModalOpen2] = useState(false); // Modal para la personalización
  const [modalOpen3, setModalOpen3] = useState(false); 
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);

  const newColor = (color) => {
    setColor(color);
  }

  const handleModal2Click = (e) => {
    e.stopPropagation();
    setModalOpen2(true);
  };

  const handleCloseModal2 = (e) => {
    e.stopPropagation();
    setModalOpen2(false);
  };

  return (
    //  esta es la area de deteccion del mause
    <div id="hover-areaa2" onMouseEnter={() => setVisible(true)}>
      <div className={`MenuL ${visible ? "show" : ""}`}
      // esta es la parte visible del menu y la condicion para que se muestre.  
      onMouseLeave={() => setVisible(false)}> 
        <ul className="UL">
        {/* con esto se activa el modal mediante el click en el icono */}
          <li className="LI" onClick={() => setModalOpen(true)}>
            <Palette />
          </li>
          <li className="LI" onClick={handleModal2Click}>
            <UserPen />
          </li>
          <li className="LI" onClick={() => setModalOpen3(true)}>
            <Ellipsis />
          </li>
          <li className="LI" onClick={() => setModalOpen4(true)}>
            <VenusAndMars />
          </li>
          <li className="LI" onClick={() => setModalOpen5(true)}>
            <Shirt />
          </li>
        </ul>
      </div>

      {modalOpen && (
        // esta es la parte de la ventana emergente
      <div className="modal-overlay" onClick={() => setModalOpen(false)}> 
        {/* esta es la parte de la ventana emergente */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
            <h2>BackgrouColor</h2>
            <div className=" colores">
            <button className="bt" onClick={() => newColor("blue")} style={{backgroundColor: "blue"}}></button>
            <button className="bt" onClick={() => newColor("green")} style={{backgroundColor: "green"}} ></button>
            <button className="bt" onClick={() => newColor("red")} style={{backgroundColor: "red"}} ></button>
            <input type="color" className="bt" name="col" id="col" value={color} onChange={(e => setColor(e.target.value))}/>
            <button className = "close" onClick={() => setModalOpen(false)}>X</button>
            </div>
            <div className="editor"></div>
            <div className="tools">
              <div className="Design" >Upload Design</div>
              <div className="Design" >Delete Desing</div>
              <div className="Design" >Delete Background</div>
            </div>
          </div>
        </div>
      )}

      {modalOpen2 && (
        <div className="modal-overlay2" onClick={handleCloseModal2}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="contenedor">
              <button className="close2" onClick={handleCloseModal2}>X</button>
              <label className="LA">
                <input type="checkbox"/>
                Cuello
              </label>
              <label className="LA">
                <input type="checkbox"/>
                Brazalete
              </label>
              <label className="LA">
                <input type="checkbox"/>
                Dobladillo inferior
              </label>
              <label className="LA">
                <input type="checkbox"/>
                Mangas
              </label>
              <label className="LA">
                <input type="checkbox"/>
                Interior
              </label>
              <label className="LA">
                <input type="checkbox"/>
                Fondo
              </label>
              <div className="personalizar">Personalizar</div>
            </div>
          </div>
        </div>
      )}

      {modalOpen3 && (
        <div className="modal-overlay3" onClick={() => setModalOpen3(false)}>
          <div className="modal-content3" onClick={(e) => e.stopPropagation()}>
          <h2 className="h2o">Velocidad de animacion</h2>
            <input type="range" />
            <div className="N">
            <button className="numeros" >0°</button>
            <button className="numeros" >45°</button>
            <button className="numeros" >90°</button>
            <button className="numeros" >135°</button>
            <button className="numeros" >180°</button>
            <button className="numeros" >225°</button>
            <button className="numeros" >270°</button>
            <button className="numeros" >315°</button>
            <button className="numeros" >360°</button>
            </div>
            <div className="Rot">
            <button className="rotar">Izquierda</button>
            <button className="rotar">Derecha</button>
            </div>
            <button className="close3" onClick={() => setModalOpen3(false)}>X</button>
          </div>
        </div>
      )}
      {modalOpen4 && (
        <div className="modal-overlay4" onClick={() => setModalOpen4(false)}>
          <div className="modal-content4" onClick={(e) => e.stopPropagation()}>
            <button className="genero">
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="48"  
                height="48"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="white"  
                stroke-width="2"  
                stroke-linecap="round"  
                stroke-linejoin="round"  
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                <path d="M19 5l-5.4 5.4" />
                <path d="M19 5h-5" />
                <path d="M19 5v5" />
              </svg>
            </button>
            
            <button className="genero">
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="48"  
                height="48"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="white"  
                stroke-width="2"  
                stroke-linecap="round"  
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                <path d="M12 14l0 7" />
                <path d="M9 18l6 0" />
              </svg>
            </button>

            <button className="close4" onClick={() => setModalOpen4(false)}>X</button>
          </div>
        </div>
      )}
      {modalOpen5 && (
        <div className="modal-overlay5" onClick={() => setModalOpen5(false)}>
          <div className="modal-content5" onClick={(e) => e.stopPropagation()}>
            <div className="tipoRopa">
              <button className="btm">Camiseta <span>👕</span></button>
              <button className="btm">Camibuso <span>👚</span></button>
              <button className="btm">Camisa <span>👔</span></button>
              <button className="btm">Buso <span>🧥</span></button>
              <button className="btm">Esqueleto <span>🦺</span></button>
            <button className="close5" onClick={() => setModalOpen5(false)}>X</button>
            </div>
          </div>
        </div>
      )}
      {/* Pasamos el color a la escena */}
      <ShirtModel color={color} />
      
    </div>
  );
};
