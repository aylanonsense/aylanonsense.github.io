export default function YouTubeEmbed({ src, width, height }: {
  src: string,
  width: number,
  height: number,
}) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      title="YouTube video player"
      style={{ border: 0 }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={true} />
  );
}
