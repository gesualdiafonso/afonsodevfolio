import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import "./styles/globals.css";
import Loader from "@/components/loader/loader";
import { LoadingProvider } from "./context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afonso Gesualdi Dev | Full-stack Engineer & Design",
  description: "Web developer and design, specializing in Front-End, Back-End, UX/UI, Brand development and planning, Digital Marketing and SEO. Building modern and high-performance applications.",
  keywords: "Web Develoment, Front-End, Back-End, React, Next.js, Vue.js, UX/UI, SEO, JavaScript, TypeScript, HTML, CSS, UIKit, TailwindCss, PHP, Node.js, Brand Management, Digital Marketing",
  authors: [
    {
      name: "Afonso Gesualdi",
      url:"https://afonsodev.vercel.app"
    }
  ],
  openGraph: {
    title: "Afonso Gesualdi Dev | Full-stack Engineer & Design",
    description: "Web developer and design, specializing in Front-End, Back-End, UX/UI, Brand development and planning, Digital Marketing and SEO. Building modern and high-performance applications.",
    url: "https://afonsodev.vercel.app",
    siteName: "Afonso Gesualdi Dev",
    images: [
        {
          url: "https://afonsodev.vercel.app/og-image.jpg", 
          alt: "Afonso Gesualdi - Full-stack Engineer",
        }
    ],
    loclale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://afonsodev.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="public/assets/LogoAfonso.png" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <Loader />
          <Header />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
