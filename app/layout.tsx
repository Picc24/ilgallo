import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Il Gallo - Osteria a Stradella (PV)",
  description:
    "Osteria Il Gallo a Stradella (PV). Cucina italiana tradizionale, carne alla brace, pasta fresca e una cantina selezionata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
