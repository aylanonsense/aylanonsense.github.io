import { CSSProperties } from 'react';
import Image from 'next/image';
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
  const classNames = [styles.projectImage]
  if (pixelated) {
    classNames.push(styles.pixelated)
  }
  if (className) {
    classNames.push(className)
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={src.endsWith(".gif")}
      className={classNames.join(" ")}
      style={{ aspectRatio: width / height, ...style }}
    />
  );
}
