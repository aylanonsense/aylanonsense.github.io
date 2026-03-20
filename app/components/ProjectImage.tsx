import { CSSProperties } from "react"
import Image from "next/image"
import joinClassNames from "../utils/joinClassNames"
import styles from "./ProjectImage.module.css"

export default function ProjectImage({ src, alt, width, height, pixelated = false, className, style }: {
  src: string,
  alt: string,
  width: number,
  height: number,
  pixelated?: boolean,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={src.endsWith(".gif")}
      className={joinClassNames(styles.projectImage, pixelated && styles.pixelated, className)}
      style={{ aspectRatio: width / height, ...style }}
    />
  )
}
