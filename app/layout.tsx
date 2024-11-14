import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lendsqr-fe-test",
  description: "Sunny Ugwu's lendsqr-fe-test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
