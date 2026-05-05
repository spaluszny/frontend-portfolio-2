import { TAGS, TAG_CATEGORIES } from "../lib/data";
import { Tag } from "./tags";

export default function Skills() {
  // Group tags by category
  const tagsByCategory = TAGS.reduce((acc, tag) => {
    if (!acc[tag.category]) {
      acc[tag.category] = [];
    }
    acc[tag.category].push(tag);
    return acc;
  }, {} as Record<string, typeof TAGS>);

  const categoryOrder: (keyof typeof TAG_CATEGORIES)[] = [
    'programming', 'frameworks', 'data', 'design', 'tools', 'cloud'
  ];

  return (
    <div className="border-0 md:border-2 md:dark:border-1">
      <h2 className="text-3xl md:text-4xl underline pt-10 pl-10 ">Technical Skills</h2>


      <div className="flex flex-row gap-6 p-5 justify-center flex-wrap">
        {categoryOrder.map((category) => {
          const tags = tagsByCategory[category];
          if (!tags || tags.length === 0) return null;
          
          return (
            <div key={category} className="">
              <h3 className="text-lg font-sans mb-3 text-gray-800 dark:text-gray-200 text-center w-30">
                {TAG_CATEGORIES[category].label}
              </h3>
              <div className="flex flex-col gap-2 w-30">
                {tags.map((tag) => (
                  <Tag tag={tag.name} key={tag.name} />
                ))}
              </div>
              
            </div>

          );
        })}
      </div>
      <p className="text-right p-5 text-xs">*Click on the tags to see associated projects</p>
    </div>
  );
}