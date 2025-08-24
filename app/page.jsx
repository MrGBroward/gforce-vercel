export const metadata = {
  title: "G-Force Exterior Cleaning | Broward County Pressure Cleaning",
  description:
    "Veteran-owned pressure cleaning in Broward County: soft-wash roof cleaning, house & building wash, driveways/sidewalks/pavers, HOA & commercial schedules, and heavy equipment & dumpster pads.",
};

const colors = {
  bg: "#0f172a",
  panel: "#0b1324",
  ink: "#0f172a",
  text: "#0f172a",
  border: "#1f2a44",
  accent: "#0074de",
  lightText: "#cbd5e1",
};

const container = { maxWidth: 1100, margin: "0 auto", padding: "0 16px" };
const h1 = { fontSize: 36, lineHeight: 1.2, margin: 0 };
const h2 = { fontSize: 28, lineHeight: 1.25, margin: 0 };
const p = { fontSize: 18, lineHeight: 1.7, margin: "10px 0 0" };

const btnSolid = {
  background: colors.accent,
  color: "#fff",
  padding: "12px 20px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};
const btnOutline = {
  border: `2px solid ${colors.accent}`,
  color: colors.accent,
  padding: "10px 18px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};

export default function Page() {
  return (
    <main>
      {/* ---------- HEADER / HERO ---------- */}
      <header style={{ background: colors.bg, color: "#fff", padding: "18px 0" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src="/images/logo.png"
            alt="G-Force Exterior Cleaning"
            style={{ height: 54, width: "auto" }}
          />
          <nav style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
            <a href="/#services" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
              Services
            </a>
            <a href="/#contact" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
              Contact
            </a>
            <a href="/finance#checkout" style={btnOutline}>
              Finance with Klarna
            </a>
          </nav>
        </div>
      </header>

      {/* ---------- HERO BAND ---------- */}
      <section style={{ background: colors.bg, color: "#fff", padding: "28px 0 36px" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <h1 style={h1}>Broward County Pressure Cleaning</h1>
          <p style={{ ...p, color: colors.lightText, margin: "12px auto 0", maxWidth: 900 }}>
            G-Force Exterior Cleaning Services helps South Florida properties look their best while
            protecting roofs, paint, and landscaping. We schedule around your needs—early mornings,
            weekends, or off-peak hours—and we offer financing and flexible pricing, especially for
            long-term and multi-site contracts. Expect clear communication, photo documentation, and
            results you can see.
          </p>
          <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={btnSolid}>Get a Free Quote</a>
            <a href="/finance#checkout" style={btnOutline}>Finance with Klarna</a>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 18, justifyContent: "center", alignItems: "center" }}>
            <img
              src="/images/veteran-owned.png"
              alt="U.S. Veteran-Owned Business"
              style={{ height: 56, width: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" style={{ padding: "36px 0" }}>
        <div style={container}>
          <h2 style={{ ...h2, textAlign: "center" }}>Services</h2>
          <ul style={{
            maxWidth: 900, margin: "16px auto 0", display: "grid", gap: 10,
            listStyle: "disc", paddingLeft: 20
          }}>
            <li>
              <a href="/services/soft-wash-roof-cleaning.html" style={{ color: colors.ink, textDecoration: "underline" }}>
                Soft-wash roof cleaning
              </a>
            </li>
            <li>
              <a href="/services/house-and-building-wash.html" style={{ color: colors.ink, textDecoration: "underline" }}>
                House &amp; building wash
              </a>
            </li>
            <li>
              <a href="/services/pressure-cleaning-driveways-sidewalks-pavers.html" style={{ color: colors.ink, textDecoration: "underline" }}>
                Pressure Cleaning – Driveways, sidewalks &amp; pavers (sealing optional)
              </a>
            </li>
            <li>
              <a href="/services/hoa-and-commercial-schedules.html" style={{ color: colors.ink, textDecoration: "underline" }}>
                HOA &amp; commercial schedules
              </a>
            </li>
            <li>
              <a href="/services/heavy-equipment-and-dumpster-pads.html" style={{ color: colors.ink, textDecoration: "underline" }}>
                Heavy equipment &amp; dumpster pads
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- BEFORE & AFTER GALLERY ---------- */}
      <section id="gallery" style={{ background: "#f9fafb", padding: "40px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <h2 style={h2}>Before &amp; After Gallery</h2>
          <p style={{ ...p, maxWidth: 700, margin: "10px auto 24px" }}>
            See how G-Force Exterior Cleaning transforms South Florida properties with expert
            pressure cleaning and soft-wash services.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <a href="/images/before-and-after-house.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/before-and-after-house.jpg"
                alt="Before and after house wash"
                style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </a>
            <a href="/images/before-and-after-bulldozer.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/before-and-after-bulldozer.jpg"
                alt="Before and after bulldozer cleaning"
                style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </a>
            <a href="/images/before-and-after-condo.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/before-and-after-condo.jpg"
                alt="Before and after condo pressure cleaning"
                style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </a>
            <a href="/images/before-and-after-driveway.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/before-and-after-driveway.jpg"
                alt="Before and after driveway cleaning"
                style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" style={{ background: colors.bg, color: "#fff", padding: "48px 16px" }}>
        <div style={{ ...container, maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", margin: "0 0 8px", fontSize: 28 }}>Contact G-Force</h2>
          <p style={{ textAlign: "center", margin: "0 0 24px", color: colors.lightText }}>
            Tell us what you’d like cleaned and we’ll confirm pricing &amp; scheduling.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thanks.html"
            style={{
              display: "grid",
              gap: 12,
              maxWidth: 520,
              margin: "0 auto",
              background: colors.panel,
              padding: 20,
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
              Name
              <input
                type="text"
                name="name"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid #334155",
                  background: "#ffffff",
                  color: colors.ink,
                }}
              />
            </label>
            <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
              Email
              <input
                type="email"
                name="email"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid #334155",
                  background: "#ffffff",
                  color: colors.ink,
                }}
              />
            </label>
            <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
              What would you like cleaned?
              <textarea
                name="message"
                rows={5}
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid #334155",
                  background: "#ffffff",
                  color: colors.ink,
                  resize: "vertical",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                marginTop: 4,
                background: colors.accent,
                color: "#fff",
                padding: "12px 18px",
                border: "none",
                borderRadius: 10,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer style={{ background: colors.bg, color: "#fff", padding: "20px 0" }}>
        <div style={{ ...container, textAlign: "center", fontSize: 14 }}>
          <div style={{ marginBottom: 8 }}>
            <a href="/privacy-policy.html" style={{ color: "#fff", textDecoration: "underline" }}>
              Privacy Policy
            </a>
            <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
            <a href="/#services" style={{ color: "#fff", textDecoration: "underline" }}>
              Services
            </a>
            <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
            <a href="/finance#checkout" style={{ color: "#fff", textDecoration: "underline" }}>
              Finance with Klarna
            </a>
          </div>
          <div style={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} G-Force Exterior Cleaning Services — Broward County, FL
          </div>
        </div>
      </footer>
    </main>
  );
}
