import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../font/font";

export const metadata: Metadata = {
  title: "Profile Application",
  description: "Une application de profil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
