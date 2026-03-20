import { CSSProperties, ReactNode } from "react"
import joinClassNames from "../utils/joinClassNames"
import styles from "./ProjectGrid.module.css"

export default function ProjectGrid({ className, style, children }: {
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children: ReactNode,
}) {
  return (
    <ul className={joinClassNames(styles.grid, className)} style={style}>
      {children}
    </ul>
  )
}
