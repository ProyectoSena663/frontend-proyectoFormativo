import { test, expect } from '@playwright/test';

test.describe('Página de Gorra (/cap)', () => {

  test('Renderiza, muestra menús y abre el modal de color', async ({ page }) => {
    await page.goto('/cap');

    await expect(page).toHaveTitle(/Craft Your Style/i);

    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();

    // Hover en el menú izquierdo
    await page.hover('#hover-areaa2');
    const menuL = page.locator('.MenuL.show');
    await expect(menuL).toBeVisible();

    // Abre el modal de color (sin verificar cambio)
    await menuL.locator('.LI').nth(0).click();
    const colorModal = page.locator('.modal-overlay');
    await expect(colorModal).toBeVisible();
    
    // Cierra el modal
    await page.locator('button.close').click();

    // Hover en el menú derecho
    await page.hover('.hover-area2');
    const menuR = page.locator('.MenuR.show');
    await expect(menuR).toBeVisible();

    // Abre ayuda y la cierra
    await menuR.locator('.LI2').last().click();
    await expect(page.locator('.Modal-Overlay1')).toBeVisible();
    await page.locator('.closee').click();

    expect(true).toBe(true);
  });

});
