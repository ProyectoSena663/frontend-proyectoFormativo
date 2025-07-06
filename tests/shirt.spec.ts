import { test, expect } from '@playwright/test';

test.describe('Página de Camisa (/camisa)', () => {

  test('Renderiza, muestra menús y cambia el color de la camisa', async ({ page }) => {
    await page.goto('/camisa'); // Abre la ruta /camisa

    await expect(page).toHaveTitle(/Craft Your Style/i); // Verifica el título correcto

    const canvas = page.locator('canvas'); // Localiza el canvas
    await expect(canvas).toBeVisible(); // Asegura que se muestre la camisa

    // -------- Hover izquierdo y menú izquierdo visible --------
    await page.hover('#hover-areaa2'); // Hover sobre la zona del menú izquierdo
    const menuL = page.locator('.MenuL.show'); // Selecciona menú izquierdo
    await expect(menuL).toBeVisible(); // Verifica visibilidad

    // -------- Abre el modal de color --------
    await menuL.locator('.LI').nth(0).click(); // Clic en el ícono de paleta
    const colorModal = page.locator('.modal-overlay'); // Modal de color
    await expect(colorModal).toBeVisible(); // Verifica que se abre

    // -------- Verifica cambio de color --------
    // Haz clic en el botón azul
    const colorBtn = colorModal.locator('button.bt').nth(0); // Botón azul
    const beforeScreenshot = await page.screenshot(); // Captura antes del cambio
    await colorBtn.click(); // Clic en azul
    await page.waitForTimeout(1000); // Espera para que el color cambie
    const afterScreenshot = await page.screenshot(); // Captura después del cambio

    expect(beforeScreenshot).not.toEqual(afterScreenshot); // Verifica que haya un cambio visual

    // Cierra el modal
    await page.locator('button.close').click(); // Botón de cerrar (X)

    // -------- Hover derecho y prueba de menú derecho --------
    await page.hover('.hover-area2'); // Hover sobre la zona del menú derecho
    const menuR = page.locator('.MenuR.show');
    await expect(menuR).toBeVisible(); // Verifica visibilidad

    // Clic en ayuda (último ítem)
    await menuR.locator('.LI2').last().click(); // Clic en botón de ayuda
    await expect(page.locator('.Modal-Overlay1')).toBeVisible(); // Verifica modal
    await page.locator('.closee').click(); // Cierra modal

    expect(true).toBe(true); // Marca el test como exitoso
  });

});
