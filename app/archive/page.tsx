import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { posts } from "#site/content";
import PostArchive from "@/Components/postArchive";
import { sortPosts } from "@/lib/data";

export default function Home() {
  const sortedPosts = sortPosts(posts.filter(post => post.type === 'archive'))
  const archivePosts = sortedPosts;

  return (
    <div className="max-w-screen-lg mx-auto px-8 pb-20">

        <Link href={'/#projects'}>
          <FaArrowLeft className="h-6 w-6 m-3 absolute top-4 left-4  hover:opacity-60" />
        </Link>
      <h1 className="font-bold text-5xl pt-40">THE ARCHIVE</h1>
      <p className="font-serif py-5 w-full md:w-1/2">
        A collection of not-so-perfect projects to show my progression in front-end engineering.
      </p>

      {archivePosts?.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b ">
              <th className="text-left px-1 py-2">YEAR</th>
              <th className="text-left px-1 py-2">PROJECT</th>
              <th className="text-left hidden sm:table-cell px-1 py-2">MADE AT</th>
              <th className="text-left hidden sm:table-cell px-1 py-2">BUILT WITH</th>
              <th className="text-left px-1 py-2">LINK</th>
            </tr>
          </thead>
          <tbody>
            {archivePosts.map((post) => {
              const { slug, title, description, tags, readMore, date, tools, website, github } = post;
              return (
                <PostArchive
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
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="py-8 text-gray-500">No archived projects to show</p>
      )}
    </div>
  );
}