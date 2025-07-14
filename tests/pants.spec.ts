import { test, expect } from '@playwright/test';

// Agrupamos este test bajo el nombre "Página de Pantalón"
test.describe('Página de Pantalón (/pantalon)', () => {

  // Definimos el caso de prueba
  test('Renderiza pantalón, muestra menús y cambia el color', async ({ page }) => {
    // Abre la ruta correspondiente a la prenda "pantalón"
    await page.goto('/pantalon');

    // Verifica que el título incluya "Craft Your Style"
    await expect(page).toHaveTitle(/Craft Your Style/i);

    // Selecciona el primer canvas del DOM (modelo 3D del pantalón)
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible(); // Asegura que el modelo está visible

    // -------- Hover en área izquierda para mostrar el menú --------

    // Simula el hover sobre la zona que activa el menú izquierdo
    await page.hover('#hover-areaa2');

    // Verifica que el menú izquierdo sea visible
    const menuL = page.locator('.MenuL.show');
    await expect(menuL).toBeVisible();

    // Haz clic en el primer botón del menú izquierdo (ícono de colores)
    await menuL.locator('.LI').nth(0).click();

    // Verifica que el modal de color se muestre correctamente
    const colorModal = page.locator('.modal-overlay');
    await expect(colorModal).toBeVisible();

    // Captura imagen de la vista antes de cambiar el color
    const beforeScreenshot = await page.screenshot();

    // Clic en el primer botón de color (azul u otro)
    const colorBtn = colorModal.locator('button.bt').nth(0);
    await colorBtn.click();

    // Espera un momento para que el cambio visual se aplique
    await page.waitForTimeout(1000);

    // Captura imagen después del cambio de color
    const afterScreenshot = await page.screenshot();

    // Compara ambas imágenes para confirmar que hubo cambio visual
    expect(beforeScreenshot).not.toEqual(afterScreenshot);

    // Cierra el modal de color (clic en "X")
    await page.locator('button.close').click();

    // -------- Hover en área derecha para mostrar el menú derecho --------

    // Realiza hover sobre el área que activa el menú derecho
    await page.hover('.hover-area2');

    // Verifica que el menú derecho esté visible
    const menuR = page.locator('.MenuR.show');
    await expect(menuR).toBeVisible();

    // Clic en el último ítem del menú derecho (ícono de ayuda)
    await menuR.locator('.LI2').last().click();

    // Asegúrate de que el modal de ayuda se haya mostrado
    await expect(page.locator('.Modal-Overlay1')).toBeVisible();

    // Cierra el modal de ayuda
    await page.locator('.closee').click();

    // Marca el test como exitoso
    expect(true).toBe(true);
  });

});
