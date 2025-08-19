"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("Thanks! We received your request.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("Sorry—couldn’t send. Please call 754-334-0220.");
    }
  }

  const input = { padding: "10px 12px", border: "1px solid var(--border)", borderRadius: 8, width: "100%", background: "#fff" };
  const label = { fontSize: 14, color: "var(--sub)" };
  const field = { display: "grid", gap: 6, marginBottom: 12 };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 560 }}>
      <div style={field}>
        <label htmlFor="name" style={label}>Name</label>
        <input id="name" name="name" type="text" required style={input} />
      </div>
      <div style={field}>
        <label htmlFor="email" style={label}>Email</label>
        <input id="email" name="email" type="email" required style={input} />
      </div>
      <div style={field}>
        <label htmlFor="service" style={label}>What do you want cleaned?</label>
        <textarea id="service" name="service" rows="4" style={{ ...input, resize: "vertical" }} />
      </div>
      <button type="submit" style={{ background: "var(--ink)", color: "#fff", padding: "12px 18px", border: 0, borderRadius: 8, cursor: "pointer" }}>
        Send
      </button>
      {status && <p style={{ marginTop: 10 }}>{status}</p>}
    </form>
  );
}
