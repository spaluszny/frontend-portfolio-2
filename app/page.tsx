import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../Components/typewriter";
import { posts } from "#site/content"
import { PostItem } from "@/Components/postItem";
import PostOther from "@/Components/postOther";
import Link from "next/link";

export default function Home() {
  const featuredPosts = posts.filter(post => post.type === 'feature');
  const otherPosts = posts.filter(post => post.type === 'other');

  return (
    <div className="max-w-screen-xl mx-auto pb-30">
      <div className="h-screen flex flex-col justify-center pl-10 max-w-screen-xl">
        <div >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">SARAH PALUSZNY</h1>
          <div className="text-2xl font-sans md:text-3xl lg:text-5xl font-light">
            <TypeWriter text='Front-End Engineer' speed={150} />
          </div>
        </div>
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className="text-black dark:text-white h-5 md:h-8 lg:h-10 animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0"
        />
      </div>

      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-center" id="projects">PORTFOLIO</h1>
          <hr className="my-5 h-0.5 w-1/2 bg-black"></hr>
          <h2 className="text-2xl pb-10 tracking-widest font-light">FEATURED PROJECTS</h2>
        </div>

        {featuredPosts?.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-10 justify-evenly">
            {featuredPosts.map((post, index) => {
              const { slug, title, description, picture, alt, tags, readMore } = post;
              return (
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  picture={picture}
                  alt={alt}
                  key={slug}
                  index={index}
                  tags={tags}
                  readMore={readMore}
                />
              )
            })}
          </div>
        ) : (
          <p>No featured projects to show</p>
        )}
      </div>

      <div className="bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] rounded-lg mt-16">
        <h2 className="text-2xl font-sans font-light text-center py-10">
          OTHER NOTEWORTHY PROJECTS
        </h2>

        {otherPosts?.length > 0 ? (
          <div className="flex flex-row flex-wrap px-10 pb-10 justify-center gap-10 md:gap-0">
            {otherPosts.map((post) => {
              const { slug, title, description, tags, tools, readMore, website, github } = post;
              return (
                <PostOther
                  slug={slug}
                  title={title}
                  description={description}
                  key={slug}
                  tags={tags}
                  tools={tools}
                  readMore={readMore}
                  website={website}
                  github={github}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center pb-10">No other projects to show</p>
        )}
      </div>

      <div className="text-right pt-10">
        <Link href="/archive" className="hover:opacity-70 transition-all duration-150 font-sans group md:text-2xl pt-20 font-light pr-10">
          VIEW PROJECT ARCHIVE <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pb-5">→</span>
        </Link>
      </div>

    </div>
  );
}
