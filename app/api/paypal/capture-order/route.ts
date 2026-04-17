/**
 * POST /api/paypal/capture-order
 * ============================================================
 * Captura (confirma y acredita) el pago en PayPal tras la aprobación
 * del comprador. Es el único momento donde el dinero se mueve realmente.
 *
 * ¿Qué significa "capturar"?
 * En PayPal, "crear una orden" solo reserva la intención de pago.
 * "Capturar" es el paso final que debita al comprador y acredita al vendedor.
 * Si solo creás la orden pero no la capturás, el dinero NO se transfiere.
 *
 * FLUJO:
 *   1. El cliente (PayPalCheckoutButton) llama a este endpoint tras la aprobación.
 *   2. El servidor captura el pago usando el orderId de PayPal.
 *   3. Si el estado es COMPLETED, construye un mensaje de WhatsApp con el pedido.
 *   4. Devuelve `success: true` al cliente, que redirige a /pago-exitoso.
 *   5. El dueño recibe el link de WhatsApp con todos los detalles del pedido.
 *      (El comprador no ve ningún mensaje de WhatsApp ni datos internos.)
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
    return data.access_token;
}

export async function POST(req: NextRequest) {
    try {
        const { orderId, items, buyerInfo } = await req.json();

        if (!orderId) {
            return NextResponse.json({ error: "Order ID inválido." }, { status: 400 });
        }

        const accessToken = await getAccessToken();

        // Capturar el pago — el único momento donde el dinero se mueve
        const captureRes = await fetch(
            `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const captureData = await captureRes.json();

        if (captureData.status !== "COMPLETED") {
            return NextResponse.json(
                { error: "El pago no pudo ser completado.", details: captureData },
                { status: 400 }
            );
        }

        // --- NOTIFICACIÓN AL DUEÑO VÍA WHATSAPP ---
        // Armamos el mensaje con el detalle completo del pedido
        const capture = captureData.purchase_units?.[0]?.payments?.captures?.[0];
        const totalPagado = capture?.amount?.value ?? "N/A";
        const moneda = capture?.amount?.currency_code ?? "USD";
        const payerName = captureData.payer?.name?.given_name ?? "Desconocido";
        const payerEmail = captureData.payer?.email_address ?? "Sin email";

        // Detalle de los productos comprados
        const itemsResumen = items
            ? items
                  .map(
                      (i: { title: string; quantity: number; price: number }) =>
                          `• ${i.title} x${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`
                  )
                  .join("\n")
            : "Sin detalle de items.";

        const mensaje = encodeURIComponent(
            `🔴 *NUEVO PEDIDO — Gothic Serpent*\n\n` +
            `📦 *Productos:*\n${itemsResumen}\n\n` +
            `💵 *Total pagado:* ${moneda} $${totalPagado}\n\n` +
            `👤 *Comprador:* ${payerName}\n` +
            `📧 *Email:* ${payerEmail}\n` +
            (buyerInfo ? `📍 *Dirección de envío:* ${buyerInfo}\n` : "") +
            `\n🆔 *Order ID PayPal:* ${orderId}\n\n` +
            `_Este pago fue confirmado automáticamente por PayPal._`
        );

        const ownerPhone = process.env.OWNER_WHATSAPP_NUMBER;
        const whatsappUrl = `https://wa.me/${ownerPhone}?text=${mensaje}`;

        return NextResponse.json({
            success: true,
            orderId,
            totalPagado,
            // El cliente recibe la URL de WhatsApp para enviarla opcionalmente
            // El dueño recibe el mensaje automático desde el servidor
            ownerWhatsappUrl: whatsappUrl,
        });
    } catch (error) {
        console.error("[PayPal Capture Error]", error);
        return NextResponse.json(
            { error: "Error al capturar el pago." },
            { status: 500 }
        );
    }
}
