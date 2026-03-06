import { ReactNode } from 'react';
import styles from "./Grid.module.css"

export default function Grid({ children }: {
  children: ReactNode
}) {
  return (
    <ul className={styles.grid}>
      {children}
    </ul>
  );
}
