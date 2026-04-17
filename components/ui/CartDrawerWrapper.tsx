"use client";

/**
 * CartDrawerWrapper.tsx
 * ============================================================
 * Cliente envoltorio para CartDrawer.
 *
 * ¿Por qué existe este archivo?
 * layout.tsx es un Server Component en Next.js App Router.
 * La directiva `ssr: false` de `next/dynamic` está prohibida
 * en Server Components porque el servidor no puede "omitir" el renderizado
 * de algo que él mismo está sirviendo.
 *
 * Solución: movemos el dynamic import CON ssr:false a este
 * Client Component ("use client"), que sí puede controlarlo.
 * Luego importamos ESTE wrapper desde layout.tsx de forma normal.
 * ============================================================
 */

import dynamic from "next/dynamic";

// Importamos CartDrawer solo en el cliente (ssr:false).
// Esto evita que el SDK de PayPal y el store de Zustand (que usan
// window/localStorage) intenten ejecutarse en el servidor y rompan el build.
const CartDrawer = dynamic(
    () => import("@/components/ui/CartDrawer"),
    {
        ssr: false,                         // Solo render en el navegador
        loading: () => null,                // No muestra nada mientras carga
    }
);

/**
 * Componente renderizable desde el layout.
 * No recibe props — el estado del carrito viene de Zustand (global).
 */
export default function CartDrawerWrapper() {
    return <CartDrawer />;
}
