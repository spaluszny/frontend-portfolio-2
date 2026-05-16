import Link from "next/link";
import Image from "next/image";
import { Tag } from "./tags";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Icons } from "./icons";

interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  picture: string;
  alt: string;
  index: number;
  tags?: Array<string>;
  readMore: boolean;
  website: string;
  github?: string;
}

export function PostItem({ slug, title, description, picture, alt, index, tags, readMore, github, website }: PostItemProps) {
  const isImageOnBottom = index % 2 === 1; 

  const border = () => {
    if (picture == '/ungoogleit.png' || picture == '/ungoogleit2.png') {
      return 'border-0'
    }else {
      return 'border-0 rounded-md'
    }
  }


  const imageSection = (
    <div className={`overflow-hidden transition-all duration-300 ${border()} dark:border-0  md:w-125`}>
      <Link href={website} target="_blank">
        <Image
          src={picture}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-auto object-cover hover:grayscale-100 transition duration-150"
        />
      </Link>
    </div>
  );

  const contentSection = (
    <>
      <div className="pt-5 pb-5">

        <div className="flex flex-row justify-between items-center gap-5">
          <p className="font-serif text-xl md:text-3xl">{title}</p>
          <div className="flex flex-row gap-5">
            <Link href={website} target="_blank" className="transform transition duration-150 hover:scale-110"><FaUpRightFromSquare className="h-5" /></Link>
            {github && (<Link href={github} target="_blank" className="transform transition duration-150 hover:scale-110"><Icons.gitHub className="h-5" /></Link>)}
          </div></div>

      </div>
      <hr className="w-30 h-0.5 bg-black" />
      <p className="pt-5 pb-5 font-sans text-sm md:text-base">{description}</p>
      {readMore && (
        <Link
          href={slug}
          className="hover:opacity-70 transition-all duration-150 font-sans group"
        >
          Read More <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pb-5">→</span>
        </Link>
      )}
      <div className="flex flew-row flex-wrap gap-2 pb-5">{tags?.map((tag) => (<Tag tag={tag} key={tag} />))} </div>
    </>
  );

  return (
    <div>
      <div className="w-80 sm:w-100 md:w-125">
        <div className="md:hidden">
          {imageSection}
          {contentSection}
        </div>

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
    </div>
  );
}