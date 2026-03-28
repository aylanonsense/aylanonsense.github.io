import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import styles from "./layout.module.css"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div className={styles.layout}>
      <SiteHeader compact={true} />
      <main>
        <div className={styles.content}>
          {children}
          <p className={styles.backLink}><Link href="/">Back</Link></p>
        </div>
      </main>
    </div>
  )
}
