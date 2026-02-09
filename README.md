
# Portafolio Personal - Vue 3 + Vite

Este proyecto es una landing page de portafolio personal para programador, desarrollada con Vue 3 y Vite, pensada para desplegarse en GitHub Pages.

## Estructura
- **src/data/**: Archivos JS para proyectos, trabajos, estudios y conocimientos.
- **src/components/**: Componentes reutilizables de Vue.
- **src/sections/**: Secciones principales de la landing.
- **src/assets/**: Imágenes, logos y otros recursos.

## Despliegue en GitHub Pages
1. Cambia la opción `base` en `vite.config.js` por el nombre de tu repositorio:
	```js
	base: '/NOMBRE_DEL_REPO/',
	```
2. Haz commit y push a la rama `main`.
3. El workflow de GitHub Actions (`.github/workflows/deploy.yml`) generará y publicará automáticamente el sitio en GitHub Pages.

## Scripts útiles
- `npm run dev`: Desarrollo local
- `npm run build`: Generar build de producción
- `npm run preview`: Previsualizar build

---
Personaliza los archivos en `src/data/` y los componentes/secciones para mostrar tu información.
