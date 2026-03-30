import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariel Navas | Automatización & Chatbots IA",
  description: "Transformo procesos manuales en flujos automáticos inteligentes. Especializado en automatización No-Code, chatbots con IA e integraciones de sistemas.",
  keywords: ["automatización", "chatbots", "IA", "n8n", "Make", "OpenAI", "desarrollador", "Panamá"],
  authors: [{ name: "Ariel Navas" }],
  openGraph: {
    title: "Ariel Navas | Automatización & Chatbots IA",
    description: "Transformo procesos manuales en flujos automáticos inteligentes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
