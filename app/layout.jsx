import "./globals.css";

export const metadata = {
  title: "G-Force Power Washing of Florida Inc. — Broward Pressure Cleaning",
  description:
    "Veteran-owned pressure cleaning and soft-wash services across Broward County. Driveways, sidewalks, pavers, roofs, dumpster pads, and commercial schedules."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
