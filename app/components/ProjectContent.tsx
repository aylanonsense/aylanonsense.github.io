import { CSSProperties, ReactNode } from "react"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./ProjectContent.module.css"

export default function ProjectContent({ compact = false, className, style, children }: {
  compact?: boolean | undefined,
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <div className={joinClassNames(styles.projectContent, compact && styles.compact, className)} style={style}>
      {children}
    </div>
  )
}
