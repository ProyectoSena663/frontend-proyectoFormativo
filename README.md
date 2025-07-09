# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🧵 Craft Your Style - Simulador de Personalización de Prendas

Bienvenido al repositorio oficial del **Simulador de Personalización de Camisas y Buzos**. Este proyecto permite a los usuarios crear prendas personalizadas mediante una interfaz interactiva basada en React, Three.js y Playwright para pruebas.

## 🚀 Tecnologías utilizadas

- **React 19**
- **Vite**
- **React Three Fiber / Drei** (para visualización 3D)
- **Lucide React** (iconografía)
- **Playwright** (pruebas E2E)
- **React Router v7**

---

## 📦 Instalación del proyecto

Clona este repositorio e instala las dependencias:

```bash
npm install
```

Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173).

---

## 🧪 Pruebas End-to-End con Playwright

Este proyecto usa [Playwright](https://playwright.dev/) para realizar pruebas automatizadas E2E que verifican que las vistas principales del simulador funcionen correctamente.

### 📥 Instalación de Playwright

```bash
npm install -D @playwright/test
npx playwright install
```

Esto instalará Playwright y descargará los navegadores compatibles: Chromium, Firefox y WebKit.

### ▶ Ejecutar las pruebas

```bash
npm run test:e2e
```

O directamente:

```bash
npx playwright test
```

### 📁 Ubicación de los tests

Todos los tests se encuentran en la carpeta:

```
/tests/
```

Ejemplo de archivo: `tests/homepage.spec.ts`

### ⚙ Configuración

Archivo principal de configuración:

```
playwright.config.ts
```

Aquí se define:

- Tiempo de espera global
- Base URL: `http://localhost:5173`
- Carpeta de pruebas
- Reporter (por defecto HTML)

### 🧼 Limpieza de resultados previos

```bash
rmdir /s /q test-results
```

> En Linux/Mac: `rm -rf test-results`

### 🧭 Tips útiles

- Asegúrate de tener el servidor local corriendo (`npm run dev`) antes de ejecutar los tests.
- Usa `await page.pause()` dentro de un test para depurar con el inspector de Playwright.
- Los tests actuales validan funcionalidades clave como:
  - Carga de la página de inicio
  - Visualización del título principal
  - Interacción con los menús laterales
  - Cambio de color en la prenda

---

## 🔗 Repositorio remoto

[https://github.com/ProyectoSena663/frontend-proyectoFormativo](https://github.com/ProyectoSena663/frontend-proyectoFormativo)
