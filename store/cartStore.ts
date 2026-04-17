/**
 * ============================================================
 * CART STORE — Zustand (Persistente en localStorage)
 * ============================================================
 *
 * ¿Qué es Zustand?
 * Una librería mínima de manejo de estado global para React.
 * A diferencia de Redux, no necesita providers ni boilerplate.
 * Cualquier componente puede leer o escribir el estado con un hook.
 *
 * ¿Por qué persistir en localStorage?
 * Si el usuario cierra la pestaña o recarga la página, el carrito
 * se mantiene gracias al middleware `persist`. Se guarda con la
 * clave "gothic-serpent-cart" en el almacenamiento local del navegador.
 *
 * ESTRUCTURA:
 *   items          → Lista de productos en el carrito (con quantity)
 *   isOpen         → Controla si el panel lateral (CartDrawer) está visible
 *   addItem        → Agrega un producto; si ya existe, suma 1 a quantity
 *   removeItem     → Elimina un producto por su id
 *   updateQuantity → Cambia la cantidad; si llega a 0, elimina el item
 *   clearCart      → Vacía el carrito (se llama tras un pago exitoso)
 *   openCart       → Abre el CartDrawer
 *   closeCart      → Cierra el CartDrawer
 *   toggleCart     → Alterna abierto/cerrado (lo usa el ícono del Header)
 *   getTotalItems  → Cuenta total de unidades (para el badge del ícono)
 *   getTotalPrice  → Suma el precio × cantidad de todos los items (para PayPal)
 * ============================================================
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;

    // Acciones
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;

    // Computed
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product: Product) => {
                const { items } = get();
                const existing = items.find((i) => i.id === product.id);
                if (existing) {
                    set({
                        items: items.map((i) =>
                            i.id === product.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...items, { ...product, quantity: 1 }] });
                }
                // Auto-abrir el carrito al agregar un item
                set({ isOpen: true });
            },

            removeItem: (productId: number) => {
                set({ items: get().items.filter((i) => i.id !== productId) });
            },

            updateQuantity: (productId: number, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }
                set({
                    items: get().items.map((i) =>
                        i.id === productId ? { ...i, quantity } : i
                    ),
                });
            },

            clearCart: () => set({ items: [] }),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            toggleCart: () => set({ isOpen: !get().isOpen }),

            getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
            getTotalPrice: () =>
                get().items.reduce(
                    (sum, i) => sum + (i.price ?? 0) * i.quantity,
                    0
                ),
        }),
        {
            name: "gothic-serpent-cart", // key en localStorage
        }
    )
);
