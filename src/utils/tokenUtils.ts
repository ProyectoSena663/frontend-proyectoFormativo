import { jwtDecode } from "jwt-decode";

export function getTokenExpiration(token: string): Date | null {
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    if (typeof decoded.exp === "number") {
      return new Date(decoded.exp * 1000); // Convert seconds to milliseconds
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }

  return null;
}