import { CSSProperties } from "react"
import Image from "next/image"
import joinClassNames from "../utils/joinClassNames"
import styles from "./ProjectImage.module.css"

export default function ProjectImage({ src, alt, width, height, pixelated, unoptimized, className, style }: {
  src: string,
  alt: string,
  width: number,
  height: number,
  pixelated?: boolean,
  unoptimized?: boolean,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={typeof(unoptimized) == "boolean" ? unoptimized : src.endsWith(".gif")}
      className={joinClassNames(styles.projectImage, pixelated && styles.pixelated, className)}
      style={{ aspectRatio: width / height, ...style }}
    />
  )
}
