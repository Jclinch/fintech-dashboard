import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Cash",
  description: "Next Cash User dashboard",
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
