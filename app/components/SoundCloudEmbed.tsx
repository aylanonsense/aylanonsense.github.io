import { CSSProperties } from "react";

export default function YouTubeEmbed({ src, className, style }: {
  src: string,
  className?: string | undefined,
  style?: CSSProperties | undefined,
}) {
  return (
    <iframe
      className={className}
      width={400}
      height={150}
      allow="autoplay"
      style={{ border: 0, overflow: "hidden", ...style }}
      src={src}
      />
  );
}
