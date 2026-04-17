"use client";

/**
 * PayPalCheckoutButton
 * Arranca el flujo de pago: crea la orden en el servidor y captura el pago.
 * Redirige a /pago-exitoso al completar. El dueño recibe todo por WhatsApp.
 */

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function PayPalCheckoutButton() {
    const { items, clearCart } = useCartStore();
    const router = useRouter();

    const total = items.reduce((sum, i) => sum + (i.price ?? 0) * i.quantity, 0);

    if (items.length === 0 || total === 0) return null;

    return (
        <PayPalScriptProvider
            options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                currency: "USD",
            }}
        >
            <div className="w-full mt-4">
                <PayPalButtons
                    style={{
                        layout: "vertical",
                        color: "gold",   // "black" era invisible sobre el fondo negro del Drawer. "gold" es el amarillo oficial de PayPal.
                        shape: "rect",
                        label: "pay",
                        height: 48,
                    }}
                    createOrder={async () => {
                        const res = await fetch("/api/paypal/create-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ items }),
                        });
                        const data = await res.json();
                        if (!data.orderId) throw new Error("No se pudo crear la orden.");
                        return data.orderId;
                    }}
                    onApprove={async (data) => {
                        const res = await fetch("/api/paypal/capture-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                orderId: data.orderID,
                                items,
                            }),
                        });
                        const result = await res.json();
                        if (result.success) {
                            clearCart();
                            router.push(`/pago-exitoso?order=${result.orderId}`);
                        } else {
                            alert("Hubo un error al confirmar el pago. Contactanos por WhatsApp.");
                        }
                    }}
                    onError={(err) => {
                        console.error("[PayPal Error]", err);
                        alert("Ocurrió un error con PayPal. Intentá de nuevo.");
                    }}
                />
            </div>
        </PayPalScriptProvider>
    );
}
