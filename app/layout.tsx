import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Shaik Rizwana | Portfolio",
  description:
    "Computer Science Engineering Student | Aspiring Software Engineer",
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