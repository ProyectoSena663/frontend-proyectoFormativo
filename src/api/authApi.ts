// export const authApi = async () => {
//     const response = await fetch('http://localhost:10101/Usuario/login', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//     });
    
//     if (!response.ok) {
//         throw new Error('Failed to fetch authentication status');
//     }
    
//     return response.json();
// }

// api.ts
export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await fetch('http://localhost:10101/usuario/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    const mensaje = data.errors ? data.errors.map((err:any) => err.errores.join(', ')).join('\n') : data.message || 'Error desconocido al iniciar sesion';
    throw new Error(mensaje);
  }

  return data.message || 'Inicio de sesión exitoso';
};
