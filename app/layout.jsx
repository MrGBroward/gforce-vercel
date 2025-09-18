// app/layout.jsx
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.gforceclean.com"),
  title: {
    default: "G Force Power Washing of Florida Inc.",
    template: "%s | G Force Power Washing of Florida Inc.",
  },
  description:
    "Veteran-owned pressure cleaning and soft-wash services across Broward County. Driveways, sidewalks, pavers, roofs, dumpster pads, and commercial schedules.",
  applicationName: "G Force Power Washing of Florida Inc.",
  openGraph: {
    siteName: "G Force Power Washing of Florida Inc.",
    type: "website",
    url: "https://www.gforceclean.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

