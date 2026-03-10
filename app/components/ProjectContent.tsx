import { ReactNode } from "react";
import styles from "./ProjectContent.module.css"

export default function ProjectContent({ children }: {
  children?: ReactNode | undefined,
}) {
  return (
    <div className={styles.projectContent}>
        {children}
    </div>
  );
}
