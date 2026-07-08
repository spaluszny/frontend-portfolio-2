import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export default function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: FigureProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}