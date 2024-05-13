import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NCHSNav",
  description: "Find your way around Central",
  openGraph : {
    title: "NCHSNav",
    description: "Find your way around Central",
    siteName: "NCHS Nav"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}