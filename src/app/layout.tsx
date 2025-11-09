import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "ROX4D Truck Bodies - Revolutionary Dump Truck Bodies",
  description: "Revolutionary dump truck bodies for Class 7 and Class 8 trucks. Built with advanced materials for unmatched strength and optimal weight efficiency.",
  keywords: "dump truck bodies, Class 7 trucks, Class 8 trucks, truck bodies, heavy duty trucks, lightweight truck bodies, ROX4D",
  authors: [{ name: "ROX4D Truck Bodies" }],
  openGraph: {
    title: "ROX4D Truck Bodies - Revolutionary Dump Truck Bodies",
    description: "Revolutionary dump truck bodies for Class 7 and Class 8 trucks. 15% stronger, 1,000-2,500 lbs lighter than comparable steel, comparable to or lighter than aluminum.",
    url: "https://rox4d.com",
    siteName: "ROX4D Truck Bodies",
    images: [
      {
        url: "/rox4d-logo.png",
        width: 1200,
        height: 630,
        alt: "ROX4D Truck Bodies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROX4D Truck Bodies - Revolutionary Dump Truck Bodies",
    description: "Revolutionary dump truck bodies for Class 7 and Class 8 trucks. 15% stronger, 1,000-2,500 lbs lighter than steel, comparable to aluminum.",
    images: ["/rox4d-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/rox4d-logo.svg", type: "image/svg+xml" },
      { url: "/rox-only.png", sizes: "any" },
    ],
    apple: [
      { url: "/rox-only.png" },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <div className="pt-16 md:pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
