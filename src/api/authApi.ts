import { decodeToken } from "../utils/tokenUtils";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:10101/usuario/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  console.log(data.token);
  console.log(decodeToken(data.token));

  if (!response.ok) {
    const mensaje = data.errors
      ? data.errors.map((err: any) => err.errores.join(", ")).join("\n")
      : data.message || "Error desconocido al iniciar sesion";
    throw new Error(mensaje);
  }

  return {
    token: data.token,
  };
};

export const registerUser = async (userInfo: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:10101/usuario/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();

  if (!response.ok) {
    const mensaje = data.errors
      ? data.errors.map((err: any) => err.errores.join(", ")).join("\n")
      : data.message || "Error desconocido al registrar";
    throw new Error(mensaje);
  }

  return {
    message: data.message,
  };
};
