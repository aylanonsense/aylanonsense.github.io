import { CSSProperties } from "react"
import joinClassNames from "../utils/joinClassNames"
import styles from "./SoundCloudEmbed.module.css"

export default function SoundCloudEmbed({ src, className, style }: {
  src: string,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <iframe
      className={joinClassNames(styles.soundCloudEmbed, className)}
      width={400}
      height={150}
      allow="autoplay"
      style={style}
      src={src}
    />
  )
}
