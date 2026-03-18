import { ReactNode } from 'react';
import styles from "./TitleArtGrid.module.css"

export default function TitleArtGrid({ children }: {
  children: ReactNode
}) {
  return (
    <ul className={styles.grid}>
      {children}
    </ul>
  );
}
