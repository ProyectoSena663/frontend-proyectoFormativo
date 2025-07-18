import "./LoginLogica.css";
import { useState } from "react";
import { loginUser } from "../api/authApi";

export const LoginLogica = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (!isOpen) return null;

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await loginUser({ email, password });
      alert(`bienvenido ${response}`); // Imprimir el mensaje de bienvenida en la consola del navegadorresponse);
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <div className="contenedor">
      <div className="contenedorlogin">
        <button className="closeBTN" onClick={onClose}>
          X
        </button>
        <h2 style={{ color: "black" }}>Iniciar Sesión</h2>
        <form className="formularioLogin">
          <label>Email:</label>
          <input
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={HandleSubmit}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
