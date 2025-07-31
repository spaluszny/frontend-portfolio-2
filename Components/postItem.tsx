import Link from "next/link";
import Image from "next/image";
import { Tag } from "./tags";

interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  picture: string;
  alt: string;
  index: number; // Add index prop
  tags?: Array<string>;
  readMore: boolean;
}

export function PostItem({ slug, title, description, picture, alt, index, tags, readMore }: PostItemProps) {
  const isImageOnBottom = index % 2 === 1; // Odd indices have image on bottom

  const imageSection = (
    <div className=" overflow-hidden transition-all duration-300  md:w-125">
      <Image
        src={picture}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-auto object-cover" 
      />
    </div>
  );

  const contentSection = (
    <>
      <div className="pt-5 pb-5">
        <Link href={slug} className="font-serif font-light text-3xl transition-all duration-150 hover:underline hover:underline-offset-2">
          {title}
        </Link>
      </div>
      <hr className="w-30 h-0.5 bg-black" />
      <p className="pt-5 pb-5 font-serif text-sm md:text-base">{description}</p>
      {readMore && (
        <Link
          href={slug}
          className="hover:opacity-70 transition-all duration-150 font-sans group"
        >
          Read More <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pb-5">→</span>
        </Link>
      )}
      <div className="flex flew-row flex-wrap gap-2 pb-5">{tags?.map((tag )=> (<Tag tag={tag} key={tag}/>) )} </div>
    </>
  );

  return (
    <article>
      <div className="w-80 sm:w-100 md:w-125">
        {/* Mobile: always image on top */}
        <div className="md:hidden">
          {imageSection}
          {contentSection}
        </div>
        
        {/* Desktop: alternating layout */}
        <div className="hidden md:block">
          {isImageOnBottom ? (
            <>
              {contentSection}
              {imageSection}
            </>
          ) : (
            <>
              {imageSection}
              {contentSection}
            </>
          )}
        </div>
      </div>
    </article>
  );
}