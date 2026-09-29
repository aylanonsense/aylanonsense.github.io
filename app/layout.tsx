import type { Metadata } from "next"
import { Literata, Raleway } from "next/font/google"
import joinClassNames from "@/app/utils/joinClassNames"
import "./globals.css"
import styles from "./layout.module.css"

const defaultFont = Literata({
  variable: "--font",
  subsets: ["latin"],
  weight: "300",
})

const headingFont = Raleway({
  variable: "--heading-font",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ayla Myers",
  description: "The personal portfolio of Ayla Myers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={joinClassNames(defaultFont.variable, headingFont.variable)}>
        <div className={styles.layout}>
          {children}
        </div>
      </body>
    </html>
  )
}
