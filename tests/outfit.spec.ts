import { test, expect } from "@playwright/test";

test.describe("Página de Outfit", () => {
  test("Debe cargar correctamente y permitir interacción", async ({ page }) => {
    await page.goto("/outfit"); // Abre la página /outfit

    const canvas = page.locator("canvas"); // Localiza el modelo 3D
    await expect(canvas).toBeVisible(); // Verifica que esté visible
 });
});
