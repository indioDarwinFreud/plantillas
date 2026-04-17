/**
 * ============================================================
 * PLANTILLA PRODUCTO — Configuración Global del Cliente
 * ============================================================
 * Este es el archivo principal de personalización.
 * Todos los colores, tipografías, textos SEO, datos de contacto
 * y redes sociales se configuran aquí y se propagan
 * automáticamente por toda la aplicación.
 *
 * Para adaptar el sitio a un nuevo cliente, solo necesitás
 * modificar este archivo y data.tsx.
 * ============================================================
 */

export const siteConfig = {
    // ---------------------------------------------------------------------------
    // 1. Identidad de Marca Principal
    //    → Cambiá name, shortName y description para el nombre del negocio.
    // ---------------------------------------------------------------------------
    name: "Operation Gothic Serpent",
    shortName: "Gothic Serpent",
    description: "Novela gráfica de guerra, horror y supervivencia ilustrada en crudo blanco, negro y sangre.",
    url: "https://operationgothicserpent.com",

    // ---------------------------------------------------------------------------
    // 2. Tipografía del Sitio
    //    → Para cambiar la fuente de títulos o cuerpo, modificá los valores aquí.
    //    → Las opciones válidas son fuentes de Google Fonts (next/font/google).
    //    → IMPORTANTE: Si cambiás la fuente, también debés actualizarla en
    //      app/layout.tsx en las importaciones de next/font.
    // ---------------------------------------------------------------------------
    typography: {
        fontBody: "Urbanist",    // Fuente del cuerpo, párrafos y navegación
        fontHeading: "Cinzel",      // Fuente de logos y títulos de alto impacto
        fontAlt: "Montserrat",  // Fuente alternativa para títulos modernos/geométricos

        // Escala de tamaños de texto base
        // Estos valores se inyectan como CSS variables (--font-size-base, --font-size-lg, --font-size-xl)
        sizeBase: "16px",  // Tamaño de párrafo estándar
        sizeLg: "18px",  // Tamaño de texto grande (subtítulos pequeños)
        sizeXl: "20px",  // Tamaño de texto extra-grande
    },

    // ---------------------------------------------------------------------------
    // 3. Biblioteca de Temas (Themes)
    //    → Podés alternar entre temas cambiando la propiedad 'activeTheme' más abajo.
    //    → Cada tema controla colores, fondos y textos de manera armonizada.
    // ---------------------------------------------------------------------------
    themes: {
        // TEMA 1: SILVER PREMIUM (Actual - Minimalista y metálico)
        SILVER_PREMIUM: {
            primaryColor: "#C0C0C0",
            primaryHover: "#9CA3AF",
            backgroundMain: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            backgroundColor: "#111827", // Base sólida para blending
            backgroundCard: "rgba(31, 41, 55, 0.7)", // Gris oscuro semitransparente
            backgroundFooter: "#111827",
            radius: "0.75rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F3F4F6",
                secondaryLight: "#C0C0C0",
                cardTitle: "#FFFFFF",
                cardBody: "#D1D5DB",
                cardMuted: "#9CA3AF"
            },
            backgroundImage: "/assets/backgrounds/silver_bg.png",
            // Textura técnica limpia de puntos para evitar marcas de agua IA
            cardImage: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3C/g%3E%3C/svg%3E"
        },

        // TEMA 2: GOLD EMPIRE -> GOTHIC SERPENT (Pitch Black & Blood Red)
        GOLD_EMPIRE: {
            primaryColor: "#990000", // Rojo Sangre (Botones/Acciones)
            primaryHover: "#660000", // Sangre oscura
            backgroundMain: "#000000", // Pitch Black
            backgroundColor: "#000000", // Negro absoluto
            backgroundCard: "rgba(10, 10, 10, 0.9)", // Tarjetas casi negras con leve vidrio
            backgroundFooter: "#000000",
            radius: "0rem", // Bordes rectos para dar crudeza militar/cómic
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#FFFFFF", // Alto contraste
                secondaryLight: "#A67C00", // Dorado Envejecido / Sepia
                cardTitle: "#FFFFFF",
                cardBody: "#D1D5DB",
                cardMuted: "#6B7280"
            },
            backgroundImage: "", // Borramos background texture para dejar que el negro explote con los SVG
            // Patrón de ruido sucio o cuadrícula oscura para tarjetas
            cardImage: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3C/g%3E%3C/svg%3E"
        },

        // TEMA 3: ELECTRIC BLUE (Tecnológico - Azul y Cyan)
        ELECTRIC_BLUE: {
            primaryColor: "#00E5FF", // Cyan Eléctrico
            primaryHover: "#00B8D4",
            backgroundMain: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            backgroundColor: "#020617", // Base sólida para blending
            backgroundCard: "rgba(15, 23, 42, 0.75)", // Azul profundo semitransparente
            backgroundFooter: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            radius: "0.5rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F8FAFC",
                secondaryLight: "#00E5FF",
                cardTitle: "#FFFFFF",
                cardBody: "#E2E8F0",
                cardMuted: "#94A3B8"
            },
            backgroundImage: "/assets/backgrounds/blue_bg.png",
            // Textura de rejilla técnica cian para el tema Blue
            cardImage: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300E5FF' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        }
    },

    // ESTO ELIGE EL TEMA ACTIVO
    // Podés cambiarlo a: "SILVER_PREMIUM", "GOLD_EMPIRE" o "ELECTRIC_BLUE"
    activeTheme: "GOLD_EMPIRE" as const,

    get theme() {
        return this.themes[this.activeTheme];
    },

    // ---------------------------------------------------------------------------
    // 4. Sistema de Logos e Iconografía
    //    → Reemplazá los archivos en /public/ y actualizá las rutas aquí.
    // ---------------------------------------------------------------------------
    logo: {
        main: "/placeholder.svg", // Logo del Navbar y Footer (SVG o PNG recomendado)
        icon: "/favicon.ico",     // Favicon del navegador
    },

    // ---------------------------------------------------------------------------
    // 5. Configuración SEO (Search Engine Optimization)
    //    → Define cómo se ve el sitio en Google y al compartir en redes.
    // ---------------------------------------------------------------------------
    seo: {
        keywords: ["productos", "negocios", "plantilla", "ecommerce", "premium", "venta"],
        author: "Imperia Virtual",
        ogImage: "/placeholder.svg", // Imagen que aparece al compartir en WhatsApp/Facebook (1200x630px ideal)
    },

    // ---------------------------------------------------------------------------
    // 6. Datos de Contacto y Venta
    //    → El teléfono se usa para generar el link de WhatsApp automáticamente.
    //    → Formato del phone: +[CódigoPaís][CódigoÁrea][Número] sin espacios.
    // ---------------------------------------------------------------------------
    contact: {
        email: "contacto@plantillaproducto.com",
        phone: "+5492612700341",    // Ej: +5492612345678
        whatsappText: "¡Hola! Vengo desde su página web y me gustaría hacer una consulta.",
        location: "Mendoza, Argentina",
        mapsLink: "https://maps.google.com/?q=Mendoza,Argentina"
    },

    // ---------------------------------------------------------------------------
    // 7. Redes Sociales
    //    → Usá la URL completa del perfil. El "handle" es solo para mostrar en pantalla.
    //    → Para agregar TikTok u otras redes, agregar la propiedad aquí y
    //      luego incluirla en data.tsx dentro de contactData.
    // ---------------------------------------------------------------------------
    socials: {
        instagram: "https://www.instagram.com/plantilla.producto/",
        instagramHandle: "@plantilla_producto",

        facebook: "https://www.facebook.com/PlantillaProducto",
        facebookHandle: "/PlantillaProducto",
    },

    // ---------------------------------------------------------------------------
    // 8. Horarios de Atención (aparecen en el Footer)
    //    → Podés agregar o quitar filas según los días del cliente.
    // ---------------------------------------------------------------------------
    businessHours: [
        { day: "Lunes a Viernes", hours: "9:00 - 13:00 / 17:00 - 20:00" },
        { day: "Sábados", hours: "9:00 - 13:00" },
    ]
};
