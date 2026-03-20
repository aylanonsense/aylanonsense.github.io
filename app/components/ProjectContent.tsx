import { CSSProperties, ReactNode } from "react"
import joinClassNames from "../utils/joinClassNames"
import styles from "./ProjectContent.module.css"

export default function ProjectContent({ className, style, children }: {
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <div className={joinClassNames(styles.projectContent, className)} style={style}>
        {children}
    </div>
  )
}
