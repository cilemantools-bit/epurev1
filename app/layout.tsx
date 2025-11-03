import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPURE - Vivre l'élégance durable",
  description: "Projet immobilier résidentiel d'exception à Veyrier, Genève. Architecture contemporaine, éco-responsabilité et confort haut de gamme.",
  keywords: ["immobilier", "Genève", "Veyrier", "villa", "architecture contemporaine", "éco-responsable", "Minergie"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-ipure-cream text-ipure-grey-dark">
        {children}
      </body>
    </html>
  );
}
