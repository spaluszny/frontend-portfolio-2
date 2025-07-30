import Link from "next/link";
import { slug } from "github-slugger";
import { TAGS, TAG_CATEGORIES } from "../lib/data";

interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;

}

export function Tag({ tag, current, count }: TagProps) {

    const tagConfig = TAGS.find(t => t.name === tag);
    
 
    const categoryColors = tagConfig 
      ? TAG_CATEGORIES[tagConfig.category].colors
      : TAG_CATEGORIES.programming.colors;
  
    return (
      <Link 
        href={`/tags/${slug(tag)}`} 
        className={`border rounded-full px-2 text-sm font-sans text-center transition-all duration-200 hover:scale-105 ${categoryColors}`}
      >
        {tag}
      </Link>
    );
  }