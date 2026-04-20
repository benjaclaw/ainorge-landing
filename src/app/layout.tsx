import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Norge – Mestre AI. Hold deg i frontlinjen.",
  description:
    "AI Norge er et fellesskap for alle som vil gå fra å bare snakke om AI til å faktisk bruke det. Bli med i Norges ledende AI-community.",
  openGraph: {
    title: "AI Norge – Mestre AI. Hold deg i frontlinjen.",
    description:
      "Et norsk fellesskap for alle som vil mestre AI i praksis.",
    url: "https://ainorge.net",
    siteName: "AI Norge",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
