import { jwtDecode } from "jwt-decode";

export const decodeToken = (token: string): any | null => {
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    console.log(`token decodificado : ${JSON.stringify(decoded)}`);
    return decoded;
  } catch (error) {
    console.error(`error al decodificar el token : ${error}`);
    return null;
  }
};
