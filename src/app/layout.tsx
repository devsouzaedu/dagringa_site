import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import ClientAnimationInitializer from "./components/ClientAnimationInitializer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbearia Da Gringa - Corte na régua, estilo gringo!",
  description: "Barbearia Da Gringa - Do fade perfeito ao atendimento diferenciado, aqui você sai pronto pra impressionar.",
  keywords: "barbearia, corte masculino, barba, degradê, fade, sobrancelha, progressiva, botox capilar, relaxamento capilar, são paulo",
  authors: [{ name: "Barbearia Da Gringa" }],
  category: "barbearia",
  creator: "Barbearia Da Gringa",
  publisher: "Barbearia Da Gringa",
  metadataBase: new URL("https://barbearia-da-gringa.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://barbearia-da-gringa.vercel.app",
    title: "Barbearia Da Gringa - Corte na régua, estilo gringo!",
    description: "A melhor barbearia de São Paulo com cortes modernos, barba perfeita e atendimento diferenciado",
    siteName: "Barbearia Da Gringa",
    images: [
      {
        url: "/images/barbearia-da-gringa-og.jpg",
        width: 1200,
        height: 630,
        alt: "Barbearia Da Gringa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia Da Gringa - Corte na régua, estilo gringo!",
    description: "A melhor barbearia de São Paulo com cortes modernos, barba perfeita e atendimento diferenciado",
    images: ["/images/barbearia-da-gringa-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#456041" />
        <meta property="og:title" content="Barbearia Da Gringa - Corte na régua, estilo gringo!" />
        <meta property="og:description" content="A melhor barbearia de São Paulo com cortes modernos, barba perfeita e atendimento diferenciado" />
        <meta property="og:image" content="https://barbearia-da-gringa.vercel.app/images/barbearia-da-gringa-og.jpg" />
        <meta property="og:url" content="https://barbearia-da-gringa.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Barbearia Da Gringa" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barbearia Da Gringa - Corte na régua, estilo gringo!" />
        <meta name="twitter:description" content="A melhor barbearia de São Paulo com cortes modernos, barba perfeita e atendimento diferenciado" />
        <meta name="twitter:image" content="https://barbearia-da-gringa.vercel.app/images/barbearia-da-gringa-og.jpg" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        <link rel="canonical" href="https://barbearia-da-gringa.vercel.app" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientAnimationInitializer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
