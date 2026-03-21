import { CSSProperties } from "react"
import Image from "next/image"
import joinClassNames from "@/app/utils/joinClassNames"
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
    <div className={joinClassNames(styles.projectImage, pixelated && styles.pixelated, className)} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={typeof(unoptimized) == "boolean" ? unoptimized : src.endsWith(".gif") || (src.endsWith(".webp") && pixelated)}
        style={{ aspectRatio: width / height }}
      />
    </div>
  )
}
