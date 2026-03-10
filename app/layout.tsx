import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ayla~nonsense",
  description: "The personal portfolio of Ayla Myers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        {children}
      </body>
    </html>
  );
}
