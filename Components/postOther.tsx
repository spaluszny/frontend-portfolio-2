import Link from "next/link";
import Image from "next/image";
import { Tag } from "./tags";

interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  picture: string;
  alt: string;
  tools: string;
  index: number; // Add index prop
  tags?: Array<string>;
}

export default function PostOther({ slug, title, description, picture, alt, index, tags, tools }: PostItemProps){
    return (
        <div className="w-100 border-r border-black dark:border-white last:border-r-0 pr-5">
     <p className="font-sans text-sm font-bold">{tools}</p>
     <h3 className="font-serif text-2xl">{title}</h3>
     <p className="font-serif pt-5">{description}</p>
     <div className="flex flew-row flex-wrap gap-2 pb-5 pt-5">
       {tags?.map((tag) => (<Tag tag={tag} key={tag}/>) )}
     </div>
   </div>
    )
}