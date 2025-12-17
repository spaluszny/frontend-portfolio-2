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
  website: string;
  github?: string;
  date: string;
  published?: boolean;
}

export default function PostArchive({ 
  slug, 
  title, 
  description, 
  tags, 
  tools, 
  readMore, 
  website, 
  github, 
  date,
  published
}: PostItemProps) {
  if (!published) return null;
  const year = new Date(date).getFullYear();

  return (

    <tr className="border-b hover:bg-[rgba(214,211,206,0.2)] hover:dark:bg-[#1e293b] font-sans">
      {/* YEAR column */}
      <td className="py-4 px-2">
        <time dateTime={date} className="text-sm">
          {year}
        </time>
      </td>
      
      {/* PROJECT column */}
      <td className="py-4 pr-4">
        <div>
          <p className="sm:font-medium font-sm">{title}</p>
        </div>
      </td>
      
      {/* MADE AT column */}
      <td className="py-4 pr-4 hidden sm:table-cell">
        <p className="text-sm">{tools}</p> 
      </td>
      
      {/* BUILT WITH column */}
      <td className="py-4 pr-4 hidden sm:table-cell">
        <div className="">
          {tags && tags.length > 0 && (
            <div className="flex flex-row flex-wrap gap-1 mt-2 ">
              {tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
          )}
        </div>
      </td>
      
      {/* LINK column */}
      <td className="py-4">
        <div className="flex flex-row gap-3">
          <Link 
            href={website} 
            target="_blank" 
            className="transform transition duration-150 hover:scale-110"
            title="View website"
          >
            <FaUpRightFromSquare className="h-5 w-5" />
          </Link>
          {github && (
            <Link 
              href={github} 
              target="_blank" 
              className="transform transition duration-150 hover:scale-110"
              title="View GitHub"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          )}
        </div>
      </td>
    </tr>
  );
}