import "./LoginLogica.css";
import { useState } from "react";
import { loginUser } from "../../api/authApi";
import {decodeToken}  from "../../utils/tokenUtils";


export const LoginLogica = ({ onChangeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await loginUser({ email, password });
      const token = response.token;
      sessionStorage.setItem("token", token);

      const payload = decodeToken(token);
      if (!payload) {
        alert("Token inválido o expirado.");
        return;
      }

      sessionStorage.setItem("usuario", JSON.stringify(payload))
      alert(`bienvenido ${payload.nombre}`);

    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <form className="formularioLogin">
      <h2 style={{ color: "#ccc" }}>Iniciar Sesión</h2>
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
      </section>
      <section className="redesSociales">
        <button className="botonEntrar" type="submit" onClick={HandleSubmit}>
          Iniciar Sesión
        </button>
        <fieldset className="divider-legend">
          <legend>O continua con</legend>
        </fieldset>
      </section>
      <section className="botonesGoogleYFacebook">
        <button className="redes">Google</button>
        <button className="redes">Facebook</button>
      </section>
      <section className="footerLogin">
        <p className="pes">¿No tienes cuenta?</p>
        <p className="pes2" onClick={onChangeForm}>
          Regístrate aquí
        </p>
      </section>
    </form>
  );
};
