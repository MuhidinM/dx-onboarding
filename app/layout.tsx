import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DX-Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
