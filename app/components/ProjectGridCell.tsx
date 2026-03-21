import { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./ProjectGridCell.module.css"

export default function ProjectGridCell({ size, src, alt, href = undefined, width, height, pixelated = false, className, style }: {
  size: "big" | "medium" | "small" | "tiny",
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
      unoptimized={src.endsWith(".gif")}
      className={pixelated ? styles.pixelated : ''}
    />
  return (
    <li className={joinClassNames(styles.gridCell, styles[size], className)} style={style}>
      {href ? <Link href={href}>{img}</Link> : img}
    </li>
  )
}
