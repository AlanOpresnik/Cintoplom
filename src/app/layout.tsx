import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cintoplom | Pinturas y Revestimientos desde 1962",
  icons: {
    icon: "https://res.cloudinary.com/dbgt948uj/image/upload/v1760642488/CintoplomLatexMASTER__2_-removebg-preview_qdwqen.png",
  },
  description:
    "Cintoplom es una empresa líder en pinturas, látex y revestimientos desde 1962. Ofrecemos soluciones de alta calidad para interiores, exteriores e industriales. Innovación, durabilidad y color para cada proyecto.",
  keywords: [
    "pinturas",
    "latex",
    "revestimientos",
    "Cintoplom",
    "pinturas industriales",
    "pinturas para hogar",
    "empresa de pinturas argentina",
    "pinturas desde 1962",
    "productos para pintura",
  ],
  
  authors: [{ name: "Cintoplom" }],
  creator: "Cintoplom",
  publisher: "Cintoplom",
  metadataBase: new URL("https://www.cintoplom.ar"), // cambia por tu dominio real
  alternates: {
    canonical: "https://www.cintoplom.ar",
  },
  
  openGraph: {
    title: "Cintoplom | Pinturas y Revestimientos desde 1962",
    description:
      "Más de 60 años brindando calidad y color. Descubrí nuestra línea completa de pinturas, látex y revestimientos para hogar e industria.",
    url: "https://www.cintoplom.ar",
    siteName: "Cintoplom",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo/logo-cintoplom.png", // ✅ poné tu banner aquí en /public/banner.jpg
        width: 1200,
        height: 630,
        alt: "Cintoplom - Pinturas y Revestimientos desde 1962",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cintoplom | Pinturas y Revestimientos desde 1962",
    description:
      "Calidad, color e innovación desde 1962. Pinturas, látex y revestimientos para cada necesidad.",
    images: ["/logo/logo-cintoplom.png"], // mismo banner
   
  },
  themeColor: "#004C91",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Pinturas y Revestimientos",
  other: {
    "application-name": "Cintoplom",
    "msapplication-TileColor": "#004C91",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
