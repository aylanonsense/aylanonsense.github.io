import { CSSProperties } from "react"
import YouTubeEmbed from "./YouTubeEmbed"
import joinClassNames from "@/app/utils/joinClassNames"
import styles from "./ProjectVideo.module.css"

export default function ProjectVideo({ src, width, height, className, style }: {
  src: string,
  width: number,
  height: number,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <YouTubeEmbed
      src={src}
      aspectRatio={width / height}
      className={joinClassNames(styles.projectVideo, className)}
      style={style}
    />
  )
}
