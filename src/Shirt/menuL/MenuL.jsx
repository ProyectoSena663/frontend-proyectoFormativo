import { useState } from "react";
import {
  Palette,
  UserPen,
  Ellipsis,
  VenusAndMars,
  Shirt,
} from "lucide-react";
import { ShirtIcon } from "../../assets/svg/Cap/L-Items/Shirt_Icon";
import { HoodieIcon } from "../../assets/svg/Cap/L-Items/Hoodie_Icon";
import { JacketIcon } from "../../assets/svg/Cap/L-Items/Jacket_Icon";
import { T_Shirt_Icon } from "../../assets/svg/Cap/L-Items/T_Shirt_Icon";
import { Tank_Top_Icon } from "../../assets/svg/Cap/L-Items/Tank_Top_Icon";

import "./MenuL.css";

export const MenuL = ({ onTipoPrendaChange, onColorChange, color }) => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);

  const newColor = (color) => {
    onColorChange(color);
  };

  return (
    <div id="hover-areaa2" onMouseEnter={() => setVisible(true)}>
      <div
        className={`MenuL ${visible ? "show" : ""}`}
        onMouseLeave={() => setVisible(false)}
      >
        <ul className="UL">
          <li className="LI" onClick={() => setModalOpen(true)}><Palette /></li>
          <li className="LI" onClick={() => setModalOpen2(true)}><UserPen /></li>
          <li className="LI" onClick={() => setModalOpen3(true)}><Ellipsis /></li>
          <li className="LI" onClick={() => setModalOpen4(true)}><VenusAndMars /></li>
          <li className="LI" onClick={() => setModalOpen5(true)}><Shirt /></li>
        </ul>
      </div>

      {/* MODAL 1 - Color Picker */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Color</h2>
            <div className="colores">
              <button className="bt" onClick={() => newColor("blue")} style={{ backgroundColor: "blue" }} />
              <button className="bt" onClick={() => newColor("green")} style={{ backgroundColor: "green" }} />
              <button className="bt" onClick={() => newColor("red")} style={{ backgroundColor: "red" }} />
              <input
                type="color"
                className="bt"
                value={color}
                onChange={(e) => newColor(e.target.value)}
              />
              <button className="close" onClick={() => setModalOpen(false)}>X</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2 - Personalización */}
      {modalOpen2 && (
        <div className="modal-overlay2" onClick={() => setModalOpen2(false)}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="contenedor">
              <button className="close2" onClick={() => setModalOpen2(false)}>X</button>
              <label className="LA"><input type="checkbox" /> Cuello</label>
              <label className="LA"><input type="checkbox" /> Brazalete</label>
              <label className="LA"><input type="checkbox" /> Dobladillo inferior</label>
              <label className="LA"><input type="checkbox" /> Mangas</label>
              <label className="LA"><input type="checkbox" /> Interior</label>
              <label className="LA"><input type="checkbox" /> Fondo</label>
              <div className="personalizar">Personalizar</div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3 - Animación */}
      {modalOpen3 && (
        <div className="modal-overlay3" onClick={() => setModalOpen3(false)}>
          <div className="modal-content3" onClick={(e) => e.stopPropagation()}>
            <h2 className="h2o">Velocidad de animación</h2>
            <input type="range" />
            <div className="N">
              {[0, 45, 90, 135, 180, 225, 270, 315, 360].map((deg) => (
                <button className="numeros" key={deg}>{deg}°</button>
              ))}
            </div>
            <div className="Rot">
              <button className="rotar">Izquierda</button>
              <button className="rotar">Derecha</button>
            </div>
            <button className="close3" onClick={() => setModalOpen3(false)}>X</button>
          </div>
        </div>
      )}

      {/* MODAL 4 - Género */}
      {modalOpen4 && (
        <div className="modal-overlay4" onClick={() => setModalOpen4(false)}>
          <div className="modal-content4" onClick={(e) => e.stopPropagation()}>
            <button className="genero">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M10 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                <path d="M19 5l-5.4 5.4M19 5h-5M19 5v5" />
              </svg>
            </button>
            <button className="genero">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 9a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                <path d="M12 14v7M9 18h6" />
              </svg>
            </button>
            <button className="close4" onClick={() => setModalOpen4(false)}>X</button>
          </div>
        </div>
      )}

      {/* MODAL 5 - Tipo de prenda */}
      {modalOpen5 && (
        <div className="modal-overlay5" onClick={() => setModalOpen5(false)}>
          <div className="modal-content5" onClick={(e) => e.stopPropagation()}>
            <div className="tipoRopa">
              <button className="btm" onClick={() => onTipoPrendaChange("camiseta")}>
                Camiseta <ShirtIcon />
              </button>
              <button className="btm" onClick={() => onTipoPrendaChange("camibuso")}>
                Camibuso <JacketIcon />
              </button>
              <button className="btm" onClick={() => onTipoPrendaChange("camisa")}>
                Camisa <T_Shirt_Icon />
              </button>
              <button className="btm" onClick={() => onTipoPrendaChange("buso")}>
                Buso <HoodieIcon />
              </button>
              <button className="btm" onClick={() => onTipoPrendaChange("esqueleto")}>
                Esqueleto <Tank_Top_Icon />
              </button>
              <button className="close5" onClick={() => setModalOpen5(false)}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
