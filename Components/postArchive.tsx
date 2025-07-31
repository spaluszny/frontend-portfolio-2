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
}

export default function PostArchive({ slug, title, description, tags, tools, readMore, website, github, date}: PostItemProps) {
    return(
        <div className="flex flex-row gap-2 justify-between ">
            <p>{date}</p>
            <p>{title}</p>
            
            
        </div>
    )


}