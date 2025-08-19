"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [msg, setMsg] = useState("");

  async function start() {
    setMsg("");
    if (!email || !amount) { setMsg("Enter a valid email and amount."); return; }
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount: Math.round(Number(amount) * 100), currency: "usd" })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create payment intent");
      setClientSecret(data.clientSecret);
    } catch (e) {
      setMsg(e.message);
    }
  }

  async function confirm() {
    setMsg("");
    if (!stripe || !elements) return;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/thanks` }
    });
    if (error) setMsg(error.message || "Payment confirmation failed.");
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: ".9rem", marginBottom: 10 }}>
        <a href="/">Home</a> › <span>Finance with Klarna</span>
      </nav>
      <h1>Finance Your Project with Klarna</h1>
      <p>Enter your email and project amount to begin. You’ll be redirected to Klarna to choose a plan and finish securely.</p>

      {!clientSecret && (
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, display: "grid", gap: 12 }}>
          <div>
            <label>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="you@example.com" style={{ width: "100%", padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 8 }} />
          </div>
          <div>
            <label>Project Amount (USD)</label>
            <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" min="50" step="1" placeholder="299" style={{ width: "100%", padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 8 }} />
          </div>
          <button onClick={start} style={{ background: "#0f172a", color: "#fff", padding: "12px 16px", borderRadius: 8, border: 0, cursor: "pointer" }}>
            Continue to payment
          </button>
          {msg && <p style={{ color: "#b91c1c" }}>{msg}</p>}
        </div>
      )}

      {clientSecret && (
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 16 }}>
          <PaymentElement />
          <button onClick={confirm} style={{ marginTop: 12, background: "#0f172a", color: "#fff", padding: "12px 16px", borderRadius: 8, border: 0, cursor: "pointer" }}>
            Confirm & Continue
          </button>
          {msg && <p style={{ color: "#b91c1c" }}>{msg}</p>}
          <p style={{ color: "#64748b", fontSize: ".9rem", marginTop: 10 }}>You may be redirected to Klarna to complete financing.</p>
        </div>
      )}
    </div>
  );
}

export default function FinancePage() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
