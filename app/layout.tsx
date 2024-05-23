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

  /*
  twitter: {
    card: 'summary_large_image',
    site: *placeholder since we don't have a twitter*,
    title: "NCHSNav",
    description: "Twitter card for NCHSNav.",
    creator: *placeholder since we don't have a twitter*,
    images: {
      url: *placeholder since we don't have a link*,
      alt: 'Preview image for NCHSNav',
    }
  },
  */

  /*
  facebook: {
    card: 'summary_large_image',
    site: *placeholder since we don't have a Facebook*,
    title: "NCHSNav",
    description: "Facebook card for NCHSNav.",
    creator: *placeholder since we don't have a Facebook*,
    images: {
      url: *placeholder since we don't have a link*,
      alt: 'Preview image for NCHSNav',
    }
  },
  */
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
