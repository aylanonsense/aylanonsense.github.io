import type { Metadata } from "next"
import { Aleo, Raleway } from "next/font/google"
import joinClassNames from "@/app/utils/joinClassNames"
import "./globals.css"
import styles from "./layout.module.css"

const defaultFont = Aleo({
  variable: "--font",
  subsets: ["latin"]
})

const headingFont = Raleway({
  variable: "--heading-font",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ayla~nonsense",
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
