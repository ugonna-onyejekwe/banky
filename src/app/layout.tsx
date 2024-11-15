import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Banky",
  description:
    "Banky: A very proficient app to make your transactions much easier without stress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>{children}</body>
    </html>
  );
}
