import { test, expect } from '@playwright/test';

// Agrupa el test bajo el nombre "Página de Gorra"
test.describe('Página de Gorra (/gorra)', () => {

  // Define el test específico
  test('Renderiza gorra, muestra menús y cambia el color', async ({ page }) => {
    // Abre la página de la gorra
    await page.goto('/gorra');

    // Verifica que el título incluya "Craft Your Style"
    await expect(page).toHaveTitle(/Craft Your Style/i);

    // Localiza el primer canvas en la página (el del modelo 3D)
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible(); // Asegura que esté visible

    // -------- Interacción con el menú izquierdo --------

    // Pasa el mouse por encima del área que muestra el menú izquierdo
    await page.hover('#hover-areaa2');

    // Verifica que el menú izquierdo se muestre
    const menuL = page.locator('.MenuL.show');
    await expect(menuL).toBeVisible();

    // Clic en el primer ícono (paleta de colores)
    await menuL.locator('.LI').nth(0).click();

    // Verifica que el modal de colores se muestre
    const colorModal = page.locator('.modal-overlay');
    await expect(colorModal).toBeVisible();

    // Captura una imagen de la pantalla antes de cambiar el color
    const beforeScreenshot = await page.screenshot();

    // Clic en el primer botón de color (ejemplo: azul)
    const colorBtn = colorModal.locator('button.bt').nth(0);
    await colorBtn.click();

    // Espera un segundo para que se aplique el cambio de color
    await page.waitForTimeout(1000);

    // Captura otra imagen después del cambio de color
    const afterScreenshot = await page.screenshot();

    // Verifica que la imagen haya cambiado, lo cual indica cambio visual exitoso
    expect(beforeScreenshot).not.toEqual(afterScreenshot);

    // Cierra el modal de color
    await page.locator('button.close').click();

    // -------- Interacción con el menú derecho --------

    // Pasa el mouse sobre el área que activa el menú derecho
    await page.hover('.hover-area2');

    // Verifica que el menú derecho esté visible
    const menuR = page.locator('.MenuR.show');
    await expect(menuR).toBeVisible();

    // Clic en el último ítem del menú (ícono de ayuda)
    await menuR.locator('.LI2').last().click();

    // Verifica que el modal de ayuda esté visible
    await expect(page.locator('.Modal-Overlay1')).toBeVisible();

    // Cierra el modal de ayuda
    await page.locator('.closee').click();

    // Finaliza el test exitosamente
    expect(true).toBe(true);
  });

});
