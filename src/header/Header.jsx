import "./Header.css";
import { Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LoginLogica } from "../login/LoginLogica";  // importa el componente

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="Header">
      <div className="cabecera">
        <div className="circulo"></div>
        <div className="loader">
          <h2 className="word-container group-1">
            <span className="word">Craft</span>
            <span className="word">Shape</span>
            <span className="word">Build</span>
            <span className="word">Create</span>
          </h2>

          <h2 className="word-container group-2">
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
          </h2>

          <h2 className="word-container group-3">
            <span className="word">Identity</span>
            <span className="word">Vibe</span>
            <span className="word">Essence</span>
            <span className="word">Image</span>
          </h2>
        </div>
      </div>

      <nav>
        <ul className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/camisa">Camisa</NavLink>
          <NavLink to="/gorra">Gorra</NavLink>
          <NavLink to="/pantalon">Pantalon</NavLink>
          <NavLink to="/outfit">Outfit</NavLink>
          <li style={{ cursor: "pointer" }} onClick={() => setIsModalOpen(true)}>
            <Sun />
          </li>
        </ul>
      </nav>

      <LoginLogica isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
