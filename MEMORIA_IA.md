# MEMORIA DE INTELIGENCIA ARTIFICIAL

## Identidad
**Nombre:** Gravithy
**Rol:** Asistente de Programación Full Stack & Compañero de Equipo
**Lema:** "Traducimos códigos binarios para que se entiendan las cosas."

## Preferencias del Usuario
1.  **Idioma:** Español (Argentino/Informal).
2.  **Estilo de Trabajo:** "Somos un buen equipo".
3.  **Estética:** Premium, Dorados, Negro, Diseño Moderno, "Wow factor".
4.  **Enfoque:** Frontend visualmente impactante.

## Proyectos
### Emperatriz Taller Gráfico
*   **Descripción:** Taller gráfico especializado en banderas personalizadas (egresados, fútbol, cumpleaños) y banners.
*   **Estado:** Sitio web principal (Home). Branding naranja y negro.
*   **Stack:** Next.js, Tailwind CSS, Framer Motion/Swiper.
*   **Historia:** Anteriormente "Imperia Virtual", rebranding total en Enero 2026.

## Notas Técnicas
*   Usar `Swiper` para carruseles.
*   Imágenes en `public/` (JPG/SVG/GIF).
*   Evitar videos pesados, preferir GIFs o embeds.
*   **Tipografía:**
    *   Títulos/Logos: **Cinzel** (Google Fonts, variable `--font-cinzel`). Estilo Imperial/Romano.
    *   Cuerpo/General: **Urbanist** (Google Fonts, variable `--font-urbanist`).
    *   **Gotham Style:** **Montserrat** (Google Fonts, variable `--font-montserrat`). Usado para títulos modernos/geométricos.
*   **Feature Cards:** Nuevo componente `FeatureCard.tsx`. Diseño panorámico.
*   **BannerCard:** Pie del carrusel con franjas diagonales.
    *   Mobile: `aspect-[5/4]`. Texto `text-4xl`.
    *   Desktop: `aspect-[21/9]`. Texto `text-7xl`.

## Bitácora de Cambios (Log)
*   **10/12/2025:** Creación de memoria, implementación de carrusel, correcciones ESLint/Next.js 16, Deploy en Vercel.
*   **10/12/2025:** Integración de cliente real "Hermanieros", mejoras en Navbar ("Isla de Cristal") y Logo.
*   **15/12/2025:** Refactorización de fondo global (`bg-degrade-azul`).
*   **05/01/2026:** Inicio de Rebranding a **"Emperatriz Taller Gráfico"**.
    - Actualización de `layout.tsx` con nuevo título y descripción.
    - Personalización de UI: Botón "Ver Detalle" naranja sólido.
    - Eliminación completa de funcionalidad y visuales del "Carrito de Compras".
    - Nuevo Logo "Emperatriz" (ajustado para visualización correcta sin recortes).
*   **13/01/2026:** Rebranding completo y pulido estético de la Home.
    -   **Sistema de Color:** Definido `primary` naranja (`#f97316`) y fondo global fijo (`bg-orange.jpg`).
    -   **Tipografía:** Integración de fuente **Urbanist** (Google Fonts). Estilo "Racing" para títulos (Bold, Italic, Uppercase).
    -   **Feature Cards:** Nuevo componente `FeatureCard.tsx`. Diseño panorámico con degradado sólido-transparente para revelar fotos de fondo. Franjas decorativas extra gruesas (Negro/Blanco) en la esquina.
    -   **Banner Card:** Rediseño del pie del carrusel. Franjas inclinadas (Naranja, Negro, Blanco) en la izquierda.
    -   **Refactorización (DiagonalStripes):** Se extrajo la lógica de las franjas a `DiagonalStripes.tsx` para mayor control.
    -   **Limpieza:** Eliminación de componentes obsoletos, corrección de errores de importación y ajuste de espaciado (`mt-24`) entre secciones.
    -   **Datos:** Actualización de `data.tsx` con productos reales: Banderas de Egresados, Fútbol y Banners Publicitarios.
    -   **Optimización Móvil y Tipografía Final:**
        -   **Responsividad:** Ajuste de Aspect Ratio a `5/4` en móviles (vertical/cuadrado) para evitar recortes, manteniendo `21/9` en escritorio.
        -   **Fondo Global:** Rotación de imagen (`-rotate-90`) en móviles y **Zoom al 150%** (`150vh`/`150vw`) para acercar la textura y mejorar la estética.
        -   **DiagonalStripes (Geometría):** Ajuste final para que la franja nazca desde la izquierda y muera exactamente en la **punta inferior derecha**. Configuración: `w-full`, `skew-x-[80deg]`, `origin-bottom`.
        -   **Tipografía Marca:** Implementación de fuente **Cinzel** (`font-serif`) para títulos de Banner, reemplazando la itálica anterior para mayor legibilidad y presencia (estilo "Emperador"). Tamaños ajustados a `text-4xl` (Mobile) y `text-7xl` (Desktop).
*   **16/01/2026:** Mejoras de legibilidad, navegación y catálogo de productos.
    -   **Branding (Logo):** Implementación de efecto "fumigado" (resplandor/glow) blanco (`drop-shadow`) sobre el logo al hacer scroll para garantizar legibilidad sobre cualquier fondo. Se utilizó `inline styles` en `header.tsx` para evitar conflictos de parseo de Tailwind.
    -   **Navegación:** Renombramiento de la sección "Search/Locales" a **"Productos"**. Actualización de rutas (`/search` -> `/products`) y etiquetas en el `Navbar`.
    -   **Estructura de Datos:** Separación de `data.tsx` en dos fuentes distintas: `productsData` (catálogo técnico de medidas/precios) y `portfolioData` (trabajos destacados y clientes reales).
    -   **Sección Productos:**
        -   Unificación estética con el estilo de "Nuestros Trabajos" (Glassmorphism, sombras naranjas, hover scale).
        -   Implementación de **Previsualización de Imagen (Zoom):** Modal a pantalla completa al hacer click en las fotos de los productos.
        -   Actualización de catálogo: Carga de medidas reales de banderas (73cm hasta 10m) con descripciones específicas.
        -   Botones de acción cambiados a "Consultar" vinculados al contacto.
    -   **Página Quiénes Somos:**
        -   Rediseño nivel "Professional Studio": Card principal con narrativa de autoridad ("Líderes en Soluciones Gráficas").
        -   Nueva sección de **"Pillares de Excelencia"**: Grid de 3 columnas (Precisión Milimétrica, Tecnología de Color, Garantía Profesional).
        -   Estética "Black & Gold" corporativa con iconos minimalistas.
*   **26/01/2026:** Ajuste de Tipografía y Mejoras en Sección Productos.
    -   **Página Productos (Tipografía):** Cambio del título "Nuestros Productos" a **Estilo Gotham** (Montserrat/font-gotham), manteniendo mayúsculas y negrita (Font Black).
    -   **Filtrado por Categoría:** Implementación de switch para alternar entre "Banderas" y "Banners".
    -   **UI Premium:** Diseño del toggle con animación "Sliding Pill" (framer-motion), glassmorphism y tipografía técnica.
    -   **Catálogo:** Clasificación técnica de productos existentes y adición de nuevos productos categoría **Banner** (Roll-Up, Lona Vinílica, Porta Banner).
*   **27/01/2026:** Estandarización de Tipografía en Quiénes Somos.
    -   **Página Quiénes Somos:** Actualización de títulos y subtítulos a **Estilo Gotham** (`font-gotham`), alineándose con la estética de la sección Productos. Reemplazo de fuentes Serif anteriores para modernizar la identidad visual.
    -   **Mejora de Legibilidad (Bugfix & Ajuste):** Se aplicó `!bg-black/75` (Identidad) y `!bg-neutral-900/70` (Pilares) para lograr el equilibrio solicitado entre legibilidad y estética translúcida "Dark Glass", corrigiendo la opacidad total anterior.
    -   **Decoración Full:** Se expandieron las franjas decorativas a **todo el ancho** de las tarjetas con mayor opacidad (`opacity-30/40`), creando una trama de fondo compleja y visible que refuerza la identidad visual "Racing/Industrial".
    -   **Tarjeta de Identidad:** Eliminación de la foto de fondo ("Bandera Argentina") por solicitud del usuario. Se reemplazó por un fondo **Negro Sólido** (`bg-black`) para maximizar la legibilidad del texto blanco, eliminando transparencias intermedias.
    -   **Refactorización (RacingBackground):** Se extrajo la lógica de las franjas decorativas al componente reutilizable `components/RacingBackground.tsx`, limpiando el código de `about/page.tsx` y facilitando su uso futuro.
    -   **Lógica de Navegación (Deep Linking):** Implementación de filtrado por URL en la página de Productos (`/products?category=Banner`).
        -   Se añadió `useSearchParams` para detectar el parámetro y activar la pestaña correspondiente automáticamente (Frontend Logic).
        -   Se actualizaron todos los enlaces de "Ver Detalle" en la sección "Nuestros Trabajos" (`data.tsx`) para redirigir a la categoría específica (Banderas o Banners) en lugar de un link genérico.
*   **29/01/2026:** Limpieza técnica y refinamiento visual.
    -   **Eliminación de Código Muerto:** Borrado de la carpeta `/app/profile` y sus archivos, ya que contenían datos de prueba no utilizados.
    -   **Sección Quiénes Somos (Background Refresh):**
        -   Se reemplazó el fondo negro de la tarjeta principal por el estilo **Naranja Imperatriz** (Degradado naranja de las `Feature Cards`).
        -   Se implementaron las **franjas decorativas `skew`** laterales para coherencia visual absoluta con la Home.
        -   **Optimización de Contraste:** Cambio de color de fuente a **Negro/Black** sobre el fondo naranja para garantizar legibilidad premium.
        -   **Ajuste Técnico de Layering:** Uso de capas absolutas para el gradiente, asegurando que el color sea vibrante y no se vea opacado por el componente `Card` base.
        -   **Detalle de Contenido:** Se añadió el **recuadro blanco semi-transparente** (`bg-white/20`, `backdrop-blur`) bajo el título, replicando exactamente la estructura de las `Feature Cards`.
        -   **Alineación Sedosa:** Se centraron el título y el bloque de texto principal, pero se mantuvo el distintivo **"Nuestra Identidad" alineado a la izquierda** para un estilo asimétrico premium.
        -   **Optimización de Espacio:** Se redujo la altura del cuadro principal (`min-h` final de 300px) para un diseño mucho más compacto y estilizado.
93: 
*   **09/02/2026:** Refactorización integral de Contacto y Estandarización de Componentes.
    -   **Arquitectura de UI:** Creación de `components/RacingCardContainer.tsx` (Wrapper con fondo "Racing") y `components/InfoCard.tsx` (Icono + Título + Descrip.) para eliminar código duplicado entre `Contact` y `About`.
    -   **Página de Contacto (UX/UI):**
        -   **WhatsApp First:** Reemplazo del envío por email por redirección directa a WhatsApp API con mensaje pre-cargado.
        -   **Simplificación:** Eliminación del campo "Email" para reducir fricción.
        -   **Estética:** Nuevos iconos en inputs, encabezado "Iniciar Chat" y botón de acción principal con degradado naranja.
    -   **Corrección Crítica (Build):** Solución del error `Element type is invalid` agregando la directiva de compilación `"use client"` en `components/fade-in.tsx`.
    -   **Página Quiénes Somos:** Implementación de `InfoCard` en la sección de "Pilares de Excelencia" para consistencia visual.
    -   **Limpieza de Código (Code Cleanup):**
        -   **Estandarización:** Renombrado de componentes clave a PascalCase (`Header.tsx`, `Navbar.tsx`, `FadeIn.tsx`) para cumplir convenciones de React.
        -   **Optimización:** Eliminación de rutas y carpetas en desuso (`app/exclusive`, `app/testimonials`).
        -   **Arquitectura de Datos:** Centralización de contenido hardcodeado (Testimonios y Features) en `data.tsx`, refactorizando `Home` y `FeatureSection` para renderizado dinámico.
        -   **Mantenimiento (Fix):** Resolución de error "Unable to acquire lock" eliminando procesos zombie de Node.js y limpieza de caché `.next`. Actualización forzada de `baseline-browser-mapping`.
*   **10/02/2026:** Reorganización Estructural de Componentes (Refactor).
    -   **Nueva Estructura de Directorios:** Se clasificaron los componentes en carpetas semánticas dentro de `components/` para mejorar la escalabilidad:
        -   `layout/`: `Navbar.tsx`, `Header.tsx`.
        -   `sections/`: `HeroCarousel.tsx` (renombrado de `CarouselText`), `FeatureSection.tsx`, `FeaturedWorks.tsx`.
        -   `cards/`: `FeatureCard.tsx`, `BannerCard.tsx`, `InfoCard.tsx`.
        -   `ui/`: Primitivas visuales (`FadeIn`, `RacingBackground`, `DiagonalStripes`, `RacingCardContainer`, `button`, `card`).
    -   **Limpieza:** Se eliminaron archivos redundantes y se actualizaron todas las importaciones para reflejar la nueva arquitectura.
    -   **Verificación:** Build exitoso (`npm run build`) confirmando la integridad de las rutas.
    -   **GIT:** Repositorio inicializado y subido a GitHub (`https://github.com/indioDarwinFreud/emperatriz.git`).
    -   **Deploy:** Sitio publicado en Render (`https://emperatriz-grafica.onrender.com/`).


