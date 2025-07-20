import { useState } from "react";
import "./Registro.css";

export const Registro = ({ onChangeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
  };

  return (
    
      <form className="formularioRegistro">
        <h2 className="hh22" style={{ color: "#ccc" }}>Registrarse</h2>
        
        <section className="inputsss">
          <label>Usuario:</label>
          <input
            className="inputEmail"
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Contraseña:</label>
          <input
            className="inputEmail"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirmar contraseña:</label>
          <input
            className="inputEmail"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </section>
        <section className="redesSociales">
          <button className="botonRegistrar" type="submit" onClick={HandleSubmit}>
            Registrarse
          </button>
        </section>
        <section className="footerRegistro">
          <p className="pes">¿Ya tienes cuenta?</p>
          <p className="pes2" onClick={onChangeForm}>
            iniciar Sesion
          </p>
        </section>
      </form>
  );
};
