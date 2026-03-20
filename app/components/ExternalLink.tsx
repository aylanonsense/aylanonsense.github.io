import { CSSProperties, ReactNode } from "react"

export default function ExternalLink({ href, className, style, children }: {
  href: string,
  className?: string | undefined,
  style?: CSSProperties | undefined,
  children?: ReactNode | undefined,
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>{children}</a>
  )
}
