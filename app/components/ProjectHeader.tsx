import { CSSProperties, ReactNode } from "react"
import ExternalLink from "./ExternalLink"
import Icon, { guessIconTypeFromLink } from "./Icon"
import joinClassNames from "../utils/joinClassNames"
import styles from "./ProjectHeader.module.css"

export default function ProjectHeader({ title, date, releaseDate, links, shrinkContent, className, style, children }: {
  title: string,
  date?: string | undefined,
  releaseDate?: string | undefined,
  links?: string[] | undefined,
  shrinkContent?: boolean | undefined,
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <div className={joinClassNames(styles.projectHeader, className)} style={style}>
      <h2>{title}</h2>
      <div className={joinClassNames(styles.contentAboveTitle, shrinkContent && styles.shrunk)}>
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
                    <Icon icon={icon} width={25} height={25} />
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
