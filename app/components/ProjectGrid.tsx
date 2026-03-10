import { ReactNode } from 'react';
import styles from "./ProjectGrid.module.css"

export default function ProjectGrid({ children }: {
  children: ReactNode
}) {
  return (
    <ul className={styles.grid}>
      {children}
    </ul>
  );
}
