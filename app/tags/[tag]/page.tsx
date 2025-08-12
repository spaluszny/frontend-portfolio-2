import { getPostsByTagSlug } from "@/lib/data"
import { posts } from "#site/content"
import PostTag from "@/Components/postTag"
import BackButton from "@/Components/backButton"

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

// export const generateStaticParams = () => {
//   const tags = getAllTags(posts);
//   const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
//   return paths;
// };

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const title = tag.split("-").join(" ")

  const displayPosts = getPostsByTagSlug(posts, tag)
  // const tags = getAllTags(posts)

  // const sortedTags = sortTagsByCount(tags)

  return (
    <div className="max-w-4xl mx-auto pt-40 p-5">
      <BackButton />
      <h1 className="font-bold text-5xl uppercase pb-5">#{title}</h1>

      {/* <p className="font-serif py-5 w-full md:w-1/2">
        A collection of {title} projects to show my progression in front-end engineering.
      </p> */}
      {displayPosts?.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b ">
              <th className="text-left px-1 py-2">YEAR</th>
              <th className="text-left px-1 py-2">PROJECT</th>
              <th className="text-left hidden sm:table-cell px-1 py-2">BUILT WITH</th>
              <th className="text-left hidden sm:table-cell px-1 py-2">TYPE</th>
              <th className="text-left px-1 py-2">LINK</th>
            </tr>
          </thead>
          <tbody>
            {displayPosts.map((post) => {
              const { slug, title, description, tags, readMore, date, tools, website, github, type } = post;
              return (
                <PostTag
                  key={slug}
                  slug={slug}
                  title={title}
                  description={description}
                  tags={tags}
                  readMore={readMore}
                  date={date}
                  tools={tools}
                  website={website}
                  github={github}
                  type={type}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="py-8 font-serif text-xl">No projects to show :(</p>
      )}
    </div>
  )


}