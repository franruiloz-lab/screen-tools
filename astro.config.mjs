import { defineConfig } from 'astro/config';

// ⚠️  Cuando tengas dominio propio:
//   1. Cambia `site` a tu dominio (ej: 'https://tudominio.com')
//   2. Elimina la línea `base`
//   3. Añade un archivo public/CNAME con tu dominio
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',  // ← cambia TU-USUARIO
  base: '/screen-tools',                  // ← eliminar cuando tengas dominio propio
  trailingSlash: 'never',
  compressHTML: true,
});