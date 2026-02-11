
import { HomeIcon, Store, Users, Mail, MessageSquareQuote, Palette, ShieldCheck, Truck, Facebook, Instagram, Phone, MapPin } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Productos",
        icon: <Store size={25} strokeWidth={1} />,
        link: "/products",
    },
    {
        id: 3,
        title: "Quiénes Somos",
        icon: <Users size={25} strokeWidth={1} />,
        link: "/about",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Mail size={25} strokeWidth={1} />,
        link: "/contact",
    },
];

// Data for the Products Page (Catalog/Sizes)
export const productsData = [
    {
        id: 1,
        title: "Banderas de 73cm",
        location: "73cm x 1m",
        description: "Tamaño compacto ideal para balcones, ventanas o espacios reducidos. Perfecta para quienes buscan visibilidad sin ocupar demasiado lugar.",
        image: "/Product/73x1.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 2,
        title: "Banderas de 1m",
        location: "1m x 1,5m",
        description: "Un formato práctico y muy cómodo de ubicar. Aporta presencia sin ocupar demasiado espacio, ideal para quienes necesitan algo discreto y fácil de colocar.",
        image: "/Product/BanderaFer.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 3,
        title: "Banderas de 2m",
        location: "2m x 1,5m",
        description: "Una bandera más amplia que destaca a simple vista. Ideal para murales, tribunas y celebraciones deportivas.",
        image: "/Product/Naza18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 4,
        title: "Banderas de 3m",
        location: "3m x 1,5m",
        description: "Impacto garantizado. Este tamaño ofrece presencia visual fuerte para clubes, bandas y agrupaciones grandes.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 5,
        title: "Banderas de 4m",
        location: "4m x 1,5m",
        description: "Un formato que domina el espacio. Recomendado para canchas, desfiles y eventos donde la bandera debe convertirse en protagonista.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 6,
        title: "Banderas de 5m",
        location: "5m x 1,5m",
        description: "Gran tamaño con excelente relación entre visibilidad y portabilidad. Perfecta para colgar en tapiales, frentes amplios o tribunas.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 7,
        title: "Banderas de 6m",
        location: "6m x 1,5m",
        description: "La elección de quienes buscan imponerse en cualquier evento o estadio. Se ve desde lejos y mantiene buena proporción.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 8,
        title: "Banderas de 7m",
        location: "7m x 1,5m",
        description: "Ideal para hinchadas, agrupaciones numerosas o escenografías. Un tamaño que destaca por fuerza y presencia.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 9,
        title: "Banderas de 8m",
        location: "8m x 1,5m",
        description: "Dimensión XL para ocupar toda una pared, tribuna o fondo de escenario. Pensada para alto impacto visual.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 10,
        title: "Banderas de 9m",
        location: "9m x 1,5m",
        description: "Una bandera gigante que transforma cualquier espacio. Especial para clubes, eventos multitudinarios o producciones grandes.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 11,
        title: "Banderas de 10m",
        location: "10m x 1,5m",
        description: "Tamaño monumental. Diseñada para quienes necesitan la máxima presencia posible y un mensaje que no pasa desapercibido.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    {
        id: 12,
        title: "Banderas de tamaño personalizado",
        location: "?m x ?m",
        description: "Personaliza el tamaño de tu bandera según tus necesidades.",
        image: "/Product/Lolo18.jpeg",
        category: "Bandera",
        website: "/contact"
    },
    // BANNERS
    {
        id: 13,
        title: "Banner de 1m",
        location: "1m x 1m",
        description: "Tamaño ideal para señalética, cartelería de eventos o señalización de espacios. Muy versátil y fácil de transportar.",
        image: "/Product/Altoque.jpeg", // Placeholder logic
        category: "Banner",
        website: "/contact"
    },
    {
        id: 14,
        title: "Banner de 1,5m",
        location: "1m x 1,5m",
        description: "Funciona muy bien para vidrieras, anuncios verticales y promociones visibles a media distancia.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 15,
        title: "Banner de 1,5mx2",
        location: "1,5m x 1,5m",
        description: "Es perfecta como fondo para fotos, decoración de eventos y cartelería con buena presencia visual.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 16,
        title: "Banner de 2m",
        location: "2m x 1m",
        description: "Se utiliza comúnmente en frentes de locales, carteles horizontales y publicidad visible desde la calle.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 17,
        title: "Banner de 2m x 1,5m",
        location: "2m x 1,5m",
        description: "Ideal para publicidad exterior, eventos medianos y carteles que necesitan destacarse más.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 18,
        title: "Banner de 2,5m",
        location: "2,5m x 1m",
        description: "Excelente para frentes anchos, cartelería larga y promociones permanentes en exterior.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 19,
        title: "Banner de 2,5m x 1,5m",
        location: "2,5m x 1,5m",
        description: "Muy usada en eventos importantes, fondos fotográficos grandes y publicidad de alto impacto.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 20,
        title: "Banner de 3m x 1m",
        location: "3m x 1m",
        description: "Pensada para cartelería exterior grande, frentes comerciales y anuncios visibles desde lejos.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
    {
        id: 21,
        title: "Banner de 3m x 1,5m",
        location: "3m x 1,5m",
        description: "Ideal para escenarios, eventos grandes y promociones principales que requieren máxima visibilidad.",
        image: "/Product/Altoque.jpeg",
        category: "Banner",
        website: "/contact"
    },
];

// Data for Featured Works Section (Portfolio/Clients)
export const portfolioData = [
    {
        id: 1,
        title: "Club Argentino",
        location: "Mendoza",
        description: "Realizamos la renovación completa de banderas para la hinchada oficial. Telas reforzadas para soportar el clima y el uso intenso en la tribuna.",
        image: "/carousel/Argentino.jpeg",
        category: "Fútbol",
        website: "/products?category=Bandera"
    },
    {
        id: 2,
        title: "El Calamar",
        location: "Buenos Aires",
        description: "Banderas gigantes con impresión HD. Logramos capturar cada detalle del escudo con colores que no destiñen.",
        image: "/carousel/ElCalamar.jpeg",
        category: "Clubes",
        website: "/products?category=Bandera"
    },
    {
        id: 3,
        title: "Banderas de Cumpleaños",
        location: "Outdoor / Indoor",
        description: "Diseño personalizado, telas resistentes y colores vibrantes para que tu cumpleaños brille.",
        image: "/Product/Lolo18.jpeg",
        category: "Cumpleaños",
        website: "/products?category=Bandera"
    },
    {
        id: 4,
        title: "Banners Publicitarios",
        location: "Publicidad Visual",
        description: "Destacá tu negocio con banners de alto impacto. Ideales para eventos, locales y promociones.",
        image: "/Product/Altoque.jpeg",
        category: "Publicidad",
        website: "/products?category=Banner"
    }
];

export const carouselImages = [
    {
        src: "/carousel/Argentino.jpeg",
        alt: "Bandera Club Argentino",
        title: "Club Argentino",
        description: "Cartelería personalizada en tela y lona reforzada de alta resistencia."
    },
    {
        src: "/carousel/ElCalamar.jpeg",
        alt: "Bandera El Calamar",
        title: "El Calamar",
        description: "Impresión HD ideal para hinchadas y eventos deportivos."
    },
    {
        src: "/carousel/Expreso.jpeg",
        alt: "Bandera Expreso",
        title: "El Expreso",
        description: "Colores vibrantes, apta para exterior e interior."
    },
    {
        src: "/carousel/Felices18.jpeg",
        alt: "Bandera Cumpleaños 18",
        title: "Felices 18",
        description: "Diseño totalmente personalizado con nombre y dedicatoria."
    }
];

// New Data used for Testimonials in app/page.tsx
export const testimonialsData = [
    {
        id: 1,
        name: "Laura Pérez",
        role: "Promo 24",
        initials: "LP",
        content: "La bandera de egresados quedó increíble. La tela es súper resistente y los colores brillan un montón. ¡Gracias Emperatriz!",
    },
    {
        id: 2,
        name: "Martín Juárez",
        role: "Dueño de Kiosco",
        initials: "MJ",
        content: "Hicimos los banners para el local y quedaron perfectos. Muy buena atención y rapidez en la entrega.",
    },
];

// Data for FeatureSection (Why Choose Us)
export const featuresData = [
    {
        id: 1,
        icon: Palette,
        title: "Diseño Personalizado",
        description: "Creamos el diseño exacto que tenés en mente, con colores vivos y detalles precisos.",
        image: "/FeatureCard/noimporta.jpeg",
        imagePosition: undefined
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Calidad Premium",
        description: "Usamos telas resistentes y tintas de larga duración. Garantía de excelente terminación.",
        image: "/FeatureCard/qlk.jpeg",
        imagePosition: "center"
    },
    {
        id: 3,
        icon: Truck,
        title: "Envíos a Todo el País",
        description: "Recibí tu pedido donde estés. Trabajamos con los correos más confiables.",
        image: "/FeatureCard/ximena.jpeg",
        imagePosition: "center"
    }
];

// Contact Data with Social Media

export const contactData = [
    {
        id: 1,
        icon: Mail,
        title: "Email",
        description: "emperatriztallergrafico@gmail.com",
        href: "mailto:emperatriztallergrafico@gmail.com"
    },
    {
        id: 2,
        icon: Phone,
        title: "Teléfono",
        description: "+54 9 261 270-0341",
        href: "https://wa.me/5492612700341"
    },
    {
        id: 3,
        icon: MapPin,
        title: "Ubicación",
        description: "Mendoza, Argentina",
        href: "https://maps.google.com/?q=Mendoza,Argentina"
    },
    {
        id: 4,
        icon: Facebook,
        title: "Facebook",
        description: "/EmperatrizGrafica",
        href: "https://www.facebook.com/"
    },
    {
        id: 5,
        icon: Instagram,
        title: "Instagram",
        description: "@emperatriz_grafica",
        href: "https://www.instagram.com/"
    }
];