import { useState } from "react";
import { Scene } from "../Cap-3D/Cap-Scene";
import { Palette, UserPen, Ellipsis, VenusAndMars, Shirt } from "lucide-react";
import { Cap } from "../../assets/svg/Cap/L-Items/Cap";
import { Size } from "../../assets/svg/Cap/L-Items/Size";
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
  };

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
      <div
        className={`MenuL ${visible ? "show" : ""}`}
        // esta es la parte visible del menu y la condicion para que se muestre.
        onMouseLeave={() => setVisible(false)}
      >
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
            <Size />
          </li>
          <li className="LI" onClick={() => setModalOpen5(true)}>
            <Cap />
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
              <button
                className="bt"
                onClick={() => newColor("blue")}
                style={{ backgroundColor: "blue" }}
              ></button>
              <button
                className="bt"
                onClick={() => newColor("green")}
                style={{ backgroundColor: "green" }}
              ></button>
              <button
                className="bt"
                onClick={() => newColor("red")}
                style={{ backgroundColor: "red" }}
              ></button>
              <input
                type="color"
                className="bt"
                name="col"
                id="col"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <button className="close" onClick={() => setModalOpen(false)}>
                X
              </button>
            </div>
            <div className="editor"></div>
            <div className="tools">
              <div className="Design">Upload Design</div>
              <div className="Design">Delete Desing</div>
              <div className="Design">Delete Background</div>
            </div>
          </div>
        </div>
      )}

      {modalOpen2 && (
        <div className="modal-overlay2" onClick={handleCloseModal2}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="contenedor">
              <button className="close2" onClick={handleCloseModal2}>
                X
              </button>
              <label className="LA">
                <input type="checkbox" />
                Color
              </label>
              <label className="LA">
                <input type="checkbox" />
                Vicera
              </label>
              <label className="LA">
                <input type="checkbox" />
                Agregar imagenes
              </label>
              <label className="LA">
                <input type="checkbox" />
                Agregar texto
              </label>
              <label className="LA">
                <input type="checkbox" />
                Material
              </label>
              <label className="LA">
                <input type="checkbox" />
                Patron
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
              <button className="numeros">0°</button>
              <button className="numeros">45°</button>
              <button className="numeros">90°</button>
              <button className="numeros">135°</button>
              <button className="numeros">180°</button>
              <button className="numeros">225°</button>
              <button className="numeros">270°</button>
              <button className="numeros">315°</button>
              <button className="numeros">360°</button>
            </div>
            <div className="Rot">
              <button className="rotar">Izquierda</button>
              <button className="rotar">Derecha</button>
            </div>
            <button className="close3" onClick={() => setModalOpen3(false)}>
              X
            </button>
          </div>
        </div>
      )}
      {modalOpen4 && (
        <div className="modal-overlay4" onClick={() => setModalOpen4(false)}>
          <div className="Cap-modal-content4" onClick={(e) => e.stopPropagation()}>
            <h3>Talla</h3>
            <button className="close4" onClick={() => setModalOpen4(false)}>
              X
            </button>

            <button className="size_items">6 7/8</button>
            <button className="size_items">7</button>
            <button className="size_items">7 1/8</button>
            <button className="size_items">7 1/4</button>
            <button className="size_items">7 3/8</button>
            <button className="size_items">7 1/2</button>
            <button className="size_items">7 5/8</button>
            <button className="size_items">7 3/4</button>
            <button className="size_items">7 7/8</button>
            <button className="size_items">8</button>
          </div>
        </div>
      )}
      {modalOpen5 && (
        <div className="modal-overlay5" onClick={() => setModalOpen5(false)}>
          <div className="modal-content5" onClick={(e) => e.stopPropagation()}>
            <div className="tipoRopa">
              <button className="btm">Camionera</button>
              <button className="btm">Drill</button>
              <button className="btm">Sombrero</button>
              <button className="btm">Arabe tapa cuello</button>
              <button className="btm">Visera</button>
              <button className="btm">Taslam</button>
              <button className="close5" onClick={() => setModalOpen5(false)}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Pasamos el color a la escena */}
      <Scene color={color} />
    </div>
  );
};
