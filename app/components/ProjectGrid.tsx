import { CSSProperties, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import joinClassNames from "@/app/utils/joinClassNames"
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

export function ProjectGridCell({ size, src, alt, href, width, height, pixelated = false, className, style }: {
  size: "huge" | "big" | "medium" | "small" | "tiny",
  src: string,
  alt: string,
  href?: Url,
  width: number,
  height: number,
  pixelated?: boolean,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  const img =
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ aspectRatio: width / height }}
      unoptimized={src.endsWith(".gif")}
      className={pixelated ? styles.pixelated : ''}
    />
  return (
    <li className={joinClassNames(styles.cell, styles[size], className)} style={style}>
      {href ? <Link href={href} style={{ aspectRatio: width / height }}>{img}</Link> : img}
    </li>
  )
}

