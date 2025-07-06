import { test, expect } from '@playwright/test';

test.describe('Página de Inicio - Animación', () => { // Describe el conjunto de pruebas

  test('Debe tener el título correcto y contener palabras en el carrusel', async ({ page }) => { // Test principal

    await page.goto('/'); // Navega al inicio

    await expect(page).toHaveTitle(/Craft Your Style/i); // Verifica el título

    const carrusel = page.locator('.word-carousel'); // Busca el contenedor del carrusel
    await expect(carrusel).toBeVisible(); // Asegura que esté visible

    const palabras = await carrusel.locator('.wordd').allTextContents(); // Obtiene todos los textos dentro de .wordd

    // Verifica que al menos haya una palabra presente
    expect(palabras.length).toBeGreaterThan(0); // Debe haber al menos una palabra animada

    console.log('Palabras encontradas:', palabras); // Muestra en consola qué palabras encontró
  });

});
