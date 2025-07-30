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
    'programming', 'frameworks', 'data', 'design', 'tools'
  ];

  return (
    <div className="border-2 dark:border-1">
      <h2 className="text-4xl underline pt-10 pl-10 ">Technical Skills</h2>
      <div className="flex flex-row gap-6 p-5 overflow-x-auto">
        {categoryOrder.map((category) => {
          const tags = tagsByCategory[category];
          if (!tags || tags.length === 0) return null;
          
          return (
            <div key={category} className=" flex-2 md:flex-1 min-w-0">
              <h3 className="text-lg font-sans mb-3 text-gray-800 dark:text-gray-200 text-center">
                {TAG_CATEGORIES[category].label}
              </h3>
              <div className="flex flex-col gap-2">
                {tags.map((tag) => (
                  <Tag tag={tag.name} key={tag.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}