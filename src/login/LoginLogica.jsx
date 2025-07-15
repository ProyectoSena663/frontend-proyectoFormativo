import "./LoginLogica.css";


export const LoginLogica = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contenedor">
      <div className="contenedorlogin">
        <button className="closeBTN" onClick={onClose}>X</button>
        <h2 style={{color:"black"}}>Iniciar Sesión</h2>
        <form className="formularioLogin">
          <label>Email:</label>
          <input type="email" placeholder="ejemplo@email.com" required />
          <label>Contraseña:</label>
          <input type="password" placeholder="********" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};
