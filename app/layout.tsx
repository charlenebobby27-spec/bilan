import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-fraunces",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-public",
});

export const metadata: Metadata = {
  title: "Bilan : le bilan mensuel envoyé sans y penser",
  description:
    "Vos clients veulent savoir ce qu'ils ont eu pour leur argent. Bilan envoie leur rapport le 1er de chaque mois, sans y penser.",
  openGraph: {
    title: "Bilan : le bilan mensuel envoyé sans y penser",
    description:
      "Le rapport mensuel de vos clients, aux couleurs de votre activité, envoyé automatiquement.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
