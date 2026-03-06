import Image from 'next/image';
import Link from 'next/link'
import styles from "./GridCell.module.css"
import { Url } from 'next/dist/shared/lib/router/router';

export default function GridCell({ shape, src, alt, href = undefined, width, height, pixelated = false }: {
  shape: "big" | "medium" | "small" | "tiny" | "poster",
  src: string,
  alt: string,
  href?: Url,
  width: number,
  height: number,
  pixelated?: boolean,
}) {
  const img = 
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={src.endsWith(".gif")}
      className={pixelated ? styles.pixelated : ''}
    />
  return (
    <li className={[styles.gridCell, styles[shape]].join(" ")}>
      {href ? <Link href={href}>{img}</Link> : img}
    </li>
  );
}
