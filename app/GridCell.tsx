import Image from 'next/image';
import styles from "./GridCell.module.css"

export default function GridCell({ shape, src, alt, width, height, pixelated = false }: {
  shape: "big" | "medium" | "small" | "tiny" | "poster",
  src: string,
  alt: string,
  width: number,
  height: number,
  pixelated?: boolean,
}) {
  return (
    <li className={[styles.gridCell, styles[shape]].join(" ")}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={src.endsWith(".gif")}
        className={pixelated ? styles.pixelated : ''}
      />
    </li>
  );
}
