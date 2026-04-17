/**
 * POST /api/paypal/create-order
 * ============================================================
 * Crea una orden de pago en PayPal DESDE EL SERVIDOR.
 *
 * ¿Por qué en el servidor y no en el cliente?
 * Si el usuario pudiera crear la orden desde el navegador, podría
 * manipular el precio antes de enviarlo a PayPal (ej: pagar $1 por
 * un producto de $50). Al hacerlo en el servidor, nosotros calculamos
 * el total desde cero usando los datos canonicos (price × quantity).
 *
 * FLUJO:
 *   1. El cliente (CartDrawer) llama a este endpoint enviando sus items.
 *   2. El servidor obtiene un access_token usando Client ID + Secret.
 *   3. Con ese token, crea la orden en la API de PayPal y devuelve el orderId.
 *   4. El cliente usa ese orderId para abrir la ventana de pago de PayPal.
 * ============================================================
 */

import { NextRequest, NextResponse } from "next/server";

async function getAccessToken(): Promise<string> {
    const credentials = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString("base64");

    const res = await fetch(`${process.env.PAYPAL_API_URL}/v1/oauth2/token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
    });

    const data = await res.json();
    if (!res.ok) {
        console.error("[PayPal Token Error]", data);
        throw new Error("Error obteniendo el token de PayPal");
    }
    return data.access_token;
}

export async function POST(req: NextRequest) {
    try {
        const { items } = await req.json();
        console.log("[PayPal Create Order] Items recibidos:", items.length);

        if (!items || items.length === 0) {
            return NextResponse.json(
                { error: "El carrito está vacío." },
                { status: 400 }
            );
        }

        const accessToken = await getAccessToken();

        const total = items.reduce(
            (sum: number, item: { price: number; quantity: number }) =>
                sum + item.price * item.quantity,
            0
        );

        const orderPayload = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: "Operation Gothic Serpent — Merchandising",
                    amount: {
                        currency_code: "USD",
                        value: total.toFixed(2),
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: total.toFixed(2),
                            },
                        },
                    },
                    items: items.map((item: { title: string; price: number; quantity: number }) => ({
                        name: item.title,
                        unit_amount: {
                            currency_code: "USD",
                            value: item.price.toFixed(2),
                        },
                        quantity: String(item.quantity),
                    })),
                },
            ],
        };

        const orderRes = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderPayload),
        });

        const order = await orderRes.json();
        
        if (!orderRes.ok) {
            console.error("[PayPal Order API Error]", order);
            return NextResponse.json(order, { status: orderRes.status });
        }

        return NextResponse.json({ orderId: order.id });
    } catch (error) {
        console.error("[PayPal Create Order Error]", error);
        return NextResponse.json(
            { error: "Error al crear la orden en PayPal." },
            { status: 500 }
        );
    }
}
