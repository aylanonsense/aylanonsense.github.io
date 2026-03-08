import { ReactNode } from "react";
import styles from "./ProjectHeader.module.css"

export default function ProjectHeader({ title, children }: {
  title: string,
  children: ReactNode,
}) {
  return (
    <>
      <div className={styles.projectHeader}>
        <h2>{title}</h2>
        <div className={styles.contentAboveTitle}>
          {children}
        </div>
      </div>
    </>
  );
}
