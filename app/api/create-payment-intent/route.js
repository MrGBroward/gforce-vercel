import Stripe from "stripe";

export async function POST(request) {
  try {
    const { amount, currency = "usd", email } = await request.json();
    if (!amount || !email) {
      return new Response(JSON.stringify({ error: "Missing amount or email" }), { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      receipt_email: email,
      automatic_payment_methods: { enabled: true } // Klarna appears if enabled in Dashboard
    });

    return new Response(JSON.stringify({ clientSecret: intent.client_secret }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

