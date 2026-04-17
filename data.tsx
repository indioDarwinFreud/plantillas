/**
 * ============================================================
 * DATA.TSX — Datos del Sitio
 * ============================================================
 * Este es el segundo archivo clave para personalizar el sitio
 * (junto con config.ts).
 *
 * GUÍA RÁPIDA:
 *   • Para agregar un producto  → editá `productsData`
 *   • Para agregar un testimonio → editá `testimonialsData`
 *   • Para cambiar el menú     → editá `itemsNavbar`
 *
 * Los íconos se importan de lucide-react. Para ver la lista
 * completa de íconos disponibles: https://lucide.dev/icons/
 * ============================================================
 */

import { HomeIcon, Store, Mail, MapPin, Facebook, Instagram, Phone, BookOpen, Image as ImageIcon } from "lucide-react";
import { siteConfig } from "./config";
import type { NavItem, Product, Testimonial, ContactItem, BusinessHour, Chapter, Artwork } from "./types";

// ============================================================
// MENÚ DE NAVEGACIÓN
// ============================================================
export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Historieta",
        icon: <BookOpen size={25} strokeWidth={1} />,
        link: "/historieta",
    },
    {
        id: 3,
        title: "Arte",
        icon: <ImageIcon size={25} strokeWidth={1} />,
        link: "/arte",
    },
    {
        id: 4,
        title: "Tienda",
        icon: <Store size={25} strokeWidth={1} />,
        link: "/productos",
    },
];

// ============================================================
// PRODUCTOS DEL CATÁLOGO
// ============================================================
// ✏️ CÓMO AGREGAR UN PRODUCTO:
//   1. Copiá uno de los bloques de abajo.
//   2. Cambiale el `id` (debe ser único y numérico).
//   3. Reemplazá title, location, description, image y category.
//   4. Subí la imagen a la carpeta /public y ponés la ruta aquí
//      (ej: "/mi-producto.jpg").
//   5. El botón "WhatsApp" se arma automáticamente con el nombre
//      del producto y el teléfono de config.ts.
// ============================================================
export const chaptersData: Chapter[] = [
    {
        id: 1,
        title: {
            es: "Volumen 1: La Caída",
            en: "Volume 1: The Fall"
        },
        description: {
            es: "El cielo se oscureció sobre Mogadishu. La sangre tiñó la arena.",
            en: "The sky darkened over Mogadishu. Blood stained the sand."
        },
        coverImage: "/WhatsApp Image 2026-03-27 at 20.39.49.jpeg",
        pages: {
            es: [
                "/WhatsApp Image 2026-03-27 at 20.39.49.jpeg",
                "/WhatsApp Image 2026-03-27 at 20.39.51.jpeg"
            ],
            en: [
                "/WhatsApp Image 2026-03-27 at 20.39.49.jpeg",
                "/WhatsApp Image 2026-03-27 at 20.39.51.jpeg"
            ]
        }
    },
    {
        id: 2,
        title: {
            es: "Volumen 2: El Despertar del Pantano",
            en: "Volume 2: Awakening of the Swamp"
        },
        description: {
            es: "Lo que estaba muerto se levantó en la espesura del horror.",
            en: "What was dead rose in the thicket of horror."
        },
        coverImage: "/WhatsApp Image 2026-03-27 at 20.41.57.jpeg",
        pages: {
            es: [
                "/WhatsApp Image 2026-03-27 at 20.41.57.jpeg"
            ],
            en: [
                "/WhatsApp Image 2026-03-27 at 20.41.57.jpeg"
            ]
        }
    },
    {
        id: 6,
        title: {
            es: "Volumen 6: El Regreso",
            en: "Volume 6: The Return"
        },
        description: {
            es: "Las sombras regresan a Mogadishu.",
            en: "Shadows return to Mogadishu."
        },
        coverImage: "/PHistorieta/Español/CapituloSeisPortada.png",
        pages: {
            es: [
                "/PHistorieta/Español/CapituloSeisPortada.png"
            ],
            en: [
                "/PHistorieta/Ingles/ChapterSixPortada.png"
            ]
        }
    }
];

// ============================================================
// GALERÍA DE ARTE VISUAL
// ============================================================
export const artData: Artwork[] = [
    {
        id: 1,
        title: "El Desollado",
        description: "Músculo y Sangre en técnica analógica.",
        image: "/WhatsApp Image 2026-03-27 at 20.39.52.jpeg"
    },
    {
        id: 2,
        title: "Resurrección Pútrida",
        description: "El zombie del infierno terrenal.",
        image: "/WhatsApp Image 2026-03-27 at 20.39.52 (1).jpeg"
    },
    {
        id: 3,
        title: "El Cosechador del Pantano",
        description: "Un horror esquelético que acecha desde las aguas sucias.",
        image: "/WhatsApp Image 2026-03-27 at 20.41.57.jpeg"
    }
];

// ============================================================
// PRODUCTOS DEL CATÁLOGO / TIENDA DE MERCHANDISING
// ============================================================
export const productsData: Product[] = [
    {
        id: 1,
        title: "Remera 'Gothic Serpent' — Negra",
        location: "Indumentaria Limitada",
        description: "Edición especial. Diseño oficial de Operation Gothic Serpent en negro absoluto. Calidad premium, envío internacional.",
        image: "/PProductos/1774291194951.JPEG",
        website: "/contact",
        price: 50.00,
    },
    {
        id: 2,
        title: "Remera 'Mogadishu' — Edición Guerra",
        location: "Indumentaria Limitada",
        description: "Ilustración cruda de la Batalla de Mogadishu. Estampado frontal en sangre y sepia. Envío internacional.",
        image: "/PProductos/1774495035187.JPEG",
        website: "/contact",
        price: 50.00,
    },
    {
        id: 3,
        title: "Remera 'El Desollado' — Gris Militar",
        location: "Indumentaria Limitada",
        description: "El icónico personaje del infierno terrenal. Gris militar con estampado artístico de alta resolución.",
        image: "/PProductos/1774539844839.JPEG",
        website: "/contact",
        price: 50.00,
    }
];

// ============================================================
// TESTIMONIOS DE CLIENTES
// ============================================================
// ✏️ CÓMO AGREGAR UN TESTIMONIO:
//   1. Copiá un bloque, cambiá el id, name, role, initials y content.
//   2. Las iniciales (initials) son las 2 primeras letras del nombre
//      (ej: "Elena Martínez" → "EM").
// ============================================================
export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Elena M.",
        role: "Directora Ejecutiva",
        initials: "EM",
        content: "El nivel de atención al detalle y la calidad del producto final superaron completamente nuestras expectativas. Altamente recomendados.",
    },
    {
        id: 2,
        name: "Carlos V.",
        role: "Fundador",
        initials: "CV",
        content: "Increíble nivel de profesionalismo. Los acabados son de primera línea y transmiten exactamente el valor premium que buscábamos.",
    },
];

// ============================================================
// DATOS DE CONTACTO (generados desde config.ts)
// ============================================================
// ⚠️ No edites este bloque directamente.
//    Para cambiar el teléfono, email, ubicación o redes sociales,
//    modificá config.ts → secciones contact y socials.
// ============================================================
export const contactData: ContactItem[] = [
    {
        id: 1,
        icon: Mail,
        title: "Email",
        description: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        id: 2,
        icon: Phone,
        title: "Teléfono",
        description: siteConfig.contact.phone,
        href: `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.contact.whatsappText)}`,
    },
    {
        id: 3,
        icon: MapPin,
        title: "Ubicación",
        description: siteConfig.contact.location,
        href: siteConfig.contact.mapsLink,
    },
    {
        id: 4,
        icon: Facebook,
        title: "Facebook",
        description: siteConfig.socials.facebookHandle,
        href: siteConfig.socials.facebook,
    },
    {
        id: 5,
        icon: Instagram,
        title: "Instagram",
        description: siteConfig.socials.instagramHandle,
        href: siteConfig.socials.instagram,
    },
];

// ============================================================
// HORARIOS DE ATENCIÓN (generados desde config.ts)
// ============================================================
// ⚠️ Para cambiar los horarios, modificá config.ts → businessHours.
// ============================================================
export const businessHours: BusinessHour[] = siteConfig.businessHours;
