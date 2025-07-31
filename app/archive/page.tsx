
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { posts } from "#site/content";
import PostArchive from "@/Components/postArchive";

export default function Home() {

    const archivePosts = posts.filter(post => post.type === 'archive' )
    return (
        <div className="max-w-screen-lg mx-auto">
            <Link href={'/#projects'}><FaArrowLeft className="h-6 w-6 absolute top-15 hover:opacity-60" /></Link>
            <h1 className="font-bold text-5xl  pt-40">THE ARCHIVE</h1>
            {/* <hr></hr> */}

            <p className="font-serif py-5 w-1/2">A collection of not-so-perfect projects to show my progression in front-end engineering.</p>
                <div className="flex justify-between font-sans">
                        <p>YEAR</p>
                        <p>PROJECT</p>
                        <p>MADE AT</p>
                        <p>BUILT WITH</p>
                        <p>LINK</p>
                </div>
                <hr></hr>
            f
                {archivePosts?.length > 0 ? (
                          <div className="flex flex-row flex-wrap gap-10 justify-between">
                            {archivePosts.map((post) => {
                              const { slug, title, description, tags, readMore, date, tools, website} = post;
                              return (
                                <PostArchive
                                  slug={slug}
                                  title={title}
                                  description={description}
                                  key={slug}
                                  tags={tags}
                                  readMore={readMore}
                                  date={date}
                                  tools={tools}
                                  website={website}
                                />
                              )
                            })}
                          </div>
                        ) : (
                          <p>No featured projects to show</p>
                        )}

        </div>

    )
}