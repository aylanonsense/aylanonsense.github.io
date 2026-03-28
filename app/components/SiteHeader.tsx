import { CSSProperties } from "react"
import Link from "next/link"
import ExternalLink from "@/app/components/ExternalLink"
import Icon from "@/app/components/Icon"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./SiteHeader.module.css"

export default function SiteHeader({ compact = false, className, style }: {
  compact?: boolean,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <header className={joinClassNames(styles.siteHeader, compact ? styles.compact : styles.full, className)} style={style}>
      <h1><Link href="/">ayla~nonsense</Link></h1>
      <div>
        {!compact && <p>Game developer</p>}
        <ul>
          <li><ExternalLink href="https://aylanonsense.itch.io/"><Icon icon="itch.io" width="1em" height="1em" /></ExternalLink></li>
          <li><ExternalLink href="https://github.com/aylanonsense"><Icon icon="GitHub" width="1em" height="1em" /></ExternalLink></li>
        </ul>
      </div>
    </header>
  )
}
