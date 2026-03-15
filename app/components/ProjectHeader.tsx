import { ReactNode } from "react";
import styles from "./ProjectHeader.module.css"
import ExternalLink from "./ExternalLink";
import Icon, { guessIconTypeFromLink } from "./Icon";

export default function ProjectHeader({ title, date, releaseDate, links, children }: {
  title: string,
  date?: string | undefined,
  releaseDate?: string | undefined,
  links?: string[] | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <div className={styles.projectHeader}>
      <h2>{title}</h2>
      <div className={styles.contentAboveTitle}>
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
  );
}
