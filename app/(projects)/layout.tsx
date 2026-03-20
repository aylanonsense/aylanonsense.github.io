import Link from "next/link"
import Icon from "../components/Icon"
import styles from "./layout.module.css"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div className={styles.layout}>
      <header>
        <h1><Link href="/">ayla~nonsense</Link></h1>
        <ul>
          <li><a href="https://aylanonsense.itch.io/" target="_blank" rel="noopener noreferrer"><Icon icon="itch.io" width={24} height={24} /></a></li>
          <li><a href="https://github.com/aylanonsense" target="_blank" rel="noopener noreferrer"><Icon icon="GitHub" width={24} height={24} /></a></li>
        </ul>
      </header>
      <main>
        <div className={styles.content}>
          {children}
          <p className={styles.backLink}><Link href="/">Back</Link></p>
        </div>
      </main>
    </div>
  )
}
