export const metadata = {
  title: "Before & After Pressure Cleaning Gallery",
  description:
    "See dramatic before-and-after results from G Force Power Washing of Florida Inc. across Coral Springs, Parkland, Fort Lauderdale, and Broward County.",
};

export default function Gallery() {
  return (
    <main style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>Before &amp; After Gallery</h1>
      <p style={{ fontSize: 18, marginBottom: 24 }}>
        See the stunning <strong>before-and-after pressure cleaning results</strong> from our soft wash roof cleaning,
        paver restoration, and driveway cleaning services across <strong>Broward County</strong>.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20
      }}>
        <figure style={{ background: "#fff", borderRadius: 8, boxShadow: "0 4px 8px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <img src="/images/soft-wash-roof-cleaning-coral-springs.jpg" alt="Soft wash roof cleaning Coral Springs" loading="lazy" style={{ width: "100%", display: "block" }} />
          <figcaption style={{ padding: 10, background: "#f1f5f9", color: "#374151" }}>
            Soft Wash Roof Cleaning — Coral Springs, Broward County
          </figcaption>
        </figure>

        <figure style={{ background: "#fff", borderRadius: 8, boxShadow: "0 4px 8px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <img src="/images/condo-pressure-cleaning-broward.jpg" alt="Condo pressure cleaning Broward County" loading="lazy" style={{ width: "100%", display: "block" }} />
          <figcaption style={{ padding: 10, background: "#f1f5f9", color: "#374151" }}>
            Condo Pressure Cleaning — Fort Lauderdale, Broward County
          </figcaption>
        </figure>

        <figure style={{ background: "#fff", borderRadius: 8, boxShadow: "0 4px 8px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <img src="/images/heavy-equipment-cleaning-broward.jpg" alt="Heavy equipment cleaning Broward" loading="lazy" style={{ width: "100%", display: "block" }} />
          <figcaption style={{ padding: 10, background: "#f1f5f9", color: "#374151" }}>
            Heavy Equipment Cleaning — Broward County
          </figcaption>
        </figure>

        <figure style={{ background: "#fff", borderRadius: 8, boxShadow: "0 4px 8px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <img src="/images/driveway-pressure-cleaning-parkland.jpg" alt="Driveway pressure cleaning Parkland" loading="lazy" style={{ width: "100%", display: "block" }} />
          <figcaption style={{ padding: 10, background: "#f1f5f9", color: "#374151" }}>
            Driveway &amp; Paver Cleaning — Parkland, Broward County
          </figcaption>
        </figure>
      </div>
    </main>
  );
}
