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
  title: "AI Norge – Hold deg i frontlinjen av AI",
  description:
    "AI Norge er et fellesskap for alle som vil gå fra å bare snakke om AI til å faktisk bruke det. Bli med i Norges ledende AI-community.",
  openGraph: {
    title: "AI Norge – Hold deg i frontlinjen av AI",
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
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
