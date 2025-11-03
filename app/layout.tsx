import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉPURE - Vivre l'élégance durable",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-stone-50 to-emerald-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
