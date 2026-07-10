import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHRI RAMANACHALA TRANSPORTS | Container & Heavy Machinery Transport",
  description:
    "SHRI RAMANACHALA TRANSPORTS provides reliable container transportation, heavy machinery shifting, industrial equipment transport, ODC logistics and mixed cargo services across Tamil Nadu, Kerala and Andhra Pradesh.",

  keywords: [
    "Shri Ramanachala Transports",
    "Transport Company",
    "Container Transport",
    "ODC Transport",
    "Heavy Machinery Transport",
    "Industrial Equipment Transport",
    "Logistics",
    "Fleet Owners",
    "Namakkal Transport",
    "Tamil Nadu Transport",
    "Kerala Logistics",
    "Andhra Pradesh Transport",
  ],

  authors: [
    {
      name: "SHRI RAMANACHALA TRANSPORTS",
    },
  ],

  creator: "SHRI RAMANACHALA TRANSPORTS",

metadataBase: new URL("https://shri-ramanachala-transports.vercel.app"),
  openGraph: {
    title:
      "SHRI RAMANACHALA TRANSPORTS | Trusted Logistics Partner",
    description:
      "Professional transportation services for containers, heavy machinery, industrial equipment and ODC cargo across South India.",
    url: "https://www.shriramanachalatransports.com",
    siteName: "SHRI RAMANACHALA TRANSPORTS",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SHRI RAMANACHALA TRANSPORTS",
    description:
      "Reliable transport solutions across South India.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}