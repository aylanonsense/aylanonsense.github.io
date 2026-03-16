import { CSSProperties } from 'react';
import YouTubeEmbed from './YouTubeEmbed';
import styles from "./ProjectVideo.module.css"

export default function ProjectVideo({ src, width, height, className, style }: {
  src: string,
  width: number,
  height: number,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  const classNames = [styles.projectVideo]
  if (className) {
    classNames.push(className)
  }
  return (
    <YouTubeEmbed
      src={src}
      aspectRatio={width / height}
      className={classNames.join(" ")}
      style={style} />
  );
}
