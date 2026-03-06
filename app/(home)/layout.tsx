import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.layout}>
        <header>
          <h1><Link href="/">ayla~nonsense</Link></h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    </>
  );
}
