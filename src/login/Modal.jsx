import "./Modal.css";
import { useState } from "react";
import { LoginLogica } from "./LoginIn/LoginLogica"; // Importa el componente de inicio de sesión
import { Registro } from "./registro/Registro";

export const Modal = ({ isOpen, onClose }) => {
  const [isLoginActive, setIsLoginActive] = useState(true); // Login por defecto
  if (!isOpen) return null;

  const handleChangeForm = () => {
    setIsLoginActive((prev) => !prev);
  };

  return (
    <div className="contenedorM">
      <div className="contenedorModal">
        <button className="closeBTN" onClick={onClose}>
          X
        </button>
        {isLoginActive ? (
          <LoginLogica onChangeForm={handleChangeForm} />
        ) : (
          <Registro onChangeForm={handleChangeForm} />
        )}
      </div>
    </div>
  );
};
