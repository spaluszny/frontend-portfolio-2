import Link from "next/link";
import { Tag } from "./tags";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Icons } from "./icons";

interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  tools: string;
  tags?: Array<string>;
  readMore: boolean;
  website?: string;
  published: boolean;
  github?: string;
}

export default function PostOther({ slug, title, description, tags, tools, readMore, website, github, published }: PostItemProps) {
    if (!published) return null;
  return (

      <div className="w-80 sm:w-100 px-2 sm:px-10 lg:border-r lg:border-black lg:dark:border-white lg:last:border-r-0 ">

        <p className="font-sans text-sm font-bold">{tools}</p>
        <div className="flex justify-between gap-10">
          {website && <Link href={website} className="font-serif text-xl sm:text-2xl transform transition duration-150 hover:underline hover:underline-offset-2">{title}</Link>}
          <div className="flex gap-5">
            {website && <Link href={website} target="_blank" className="transform transition duration-150 hover:scale-110"><FaUpRightFromSquare className="h-5" /></Link>}
            {github && (<Link href={github} target="_blank" className="transform transition duration-150 hover:scale-110"><Icons.gitHub className="h-5" /></Link>)}
          </div>
        </div>

        <p className="pt-5 text-sm sm:text-base">{description}</p>


        {readMore && (
          <Link
            href={slug}
            className="hover:opacity-70 transition-all duration-150 font-sans group"
          >
            Read More <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pt-2">→</span>
          </Link>
        )}

        <div className="flex flex-row flex-wrap gap-2 pb-5 pt-5">
          {tags?.map((tag) => (<Tag tag={tag} key={tag} />))}
        </div>

        {/* <hr className="md:hidden"></hr> */}

      </div>


  )
}


//    <div className="w-100 md:border-r md:border-black md:dark:border-white md:last:border-r-0">