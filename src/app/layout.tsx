import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NZD Contabilidade | Consultoria Contábil Especializada",
  description: "A NZD Contabilidade é especializada em contabilidade consultiva, auxiliando no crescimento sustentável da sua empresa. Serviços fiscais, societários e de gestão.",
  keywords: "contabilidade, contabilidade consultiva, nzd contabilidade, serviços contábeis, gestão financeira",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
