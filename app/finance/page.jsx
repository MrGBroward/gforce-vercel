import Script from "next/script";

export const dynamic = "force-dynamic";

const styles = {
  wrap: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    maxWidth: 900,
    margin: "0 auto",
    padding: 24,
    color: "#0f172a",
    lineHeight: 1.6
  },
  h1: { textAlign: "center", marginBottom: 12 },
  p: { textAlign: "center", color: "#334155" },
  fallback: { textAlign: "center", marginTop: 16 }
};

export default function FinancePage() {
  // Prefer env var; fallback to your live pk (publishable key is safe to expose on the client)
  const pk =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_live_51RvHeBLp6vu4avRkWpQl0vOMhJZFqlhfl9VuSM0MTaoIvGvyXqbniYho2FH25RB7ycqJIXxxbVG3TfgJarbVO9Px00YLHy77wc";

  return (
    <main style={styles.wrap}>
      <h1 style={styles.h1}>Finance Your Project</h1>
      <p style={styles.p}>Pay with Klarna, Afterpay, or card via Stripe’s secure checkout.</p>

      {/* Load Stripe’s Buy Button script */}
      <Script async src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

      {/* Embedded Stripe Buy Button */}
      <stripe-buy-button
        buy-button-id="buy_btn_1RzGR5Lp6vu4avRk8vL51iVp"
        publishable-key={pk}
      ></stripe-buy-button>

      {/* Fallback direct link */}
      <div style={styles.fallback}>
        <a
          href="https://buy.stripe.com/28EbJ2ero0ul0gdc6w5J600"
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "underline" }}
        >
          Having trouble? Open secure checkout
        </a>
      </div>
    </main>
  );
}
