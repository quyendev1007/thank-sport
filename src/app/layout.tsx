import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSan = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thawgs",
  description: "Thawgs Sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${dmSan.className} antialiased`}>{children}</body>
    </html>
  );
}
