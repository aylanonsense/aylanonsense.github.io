import { CSSProperties, ReactNode } from "react"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./TitleArtGrid.module.css"

export default function TitleArtGrid({ className, style, children }: {
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
