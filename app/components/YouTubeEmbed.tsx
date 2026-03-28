import { CSSProperties } from "react"

export default function YouTubeEmbed({ src, width, height, aspectRatio, className, style }: {
  src: string,
  width?: number | undefined,
  height?: number | undefined,
  aspectRatio?: number | undefined,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      title="YouTube video player"
      className={className}
      style={{ aspectRatio, border: 0, ...style }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={true} />
  )
}
