import { CSSProperties, ReactNode } from "react"
import ExternalLink from "@/app/components/ExternalLink"
import Icon, { guessIconTypeFromLink } from "@/app/components/Icon"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./ProjectHeader.module.css"

export default function ProjectHeader({ title, date, releaseDate, links, compact, className, style, children }: {
  title: string,
  date?: string | undefined,
  releaseDate?: string | undefined,
  links?: string[] | undefined,
  compact?: boolean | undefined,
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <div className={joinClassNames(styles.projectHeader, className, compact && styles.compact)} style={style}>
      <h2>{title}</h2>
      <div className={styles.media}>
        {children}
      </div>
      {releaseDate ?
        (<p className={styles.date}>Released {releaseDate}</p>)
        : (date ? (<p className={styles.date}>{date}</p>) : undefined)}
      {links && links.length > 0 ?
        (<ul>
          {links.map(href => {
            const icon = guessIconTypeFromLink(href)
            if (icon) {
              return (
                <li key={href}>
                  <ExternalLink href={href}>
                    <Icon icon={icon} width="1.25em" height="1.25em" />
                  </ExternalLink>
                </li>
              )
            }
          })}
        </ul>)
      : undefined}
    </div>
  )
}
