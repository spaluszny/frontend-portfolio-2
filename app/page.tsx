
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../Components/typewriter";
import { posts } from "#site/content"
import { PostItem } from "@/Components/postItem";
import Link from "next/link";
// import getPostMetadata from "@/utils/getPostMetadata";
// import PostCard from "@/Components/postcard";
export default function Home() {

  const displayPosts = posts
  return (

    <div className="max-w-screen-xl mx-auto pb-20">
      {/* <div className="block md:hidden"><ModeToggle/></div> */}
      <div className="h-screen flex flex-col justify-center pl-10">
        <div >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">SARAH PALUSZNY</h1>
          <div className="text-xl font-sans md:text-3xl lg:text-5xl font-light"><TypeWriter text='ront-End Engineer' speed={150} /></div>

        </div>
        <FontAwesomeIcon icon={faAngleDoubleDown} className="text-black dark:text-white h-5 md:h-8 lg:h-10 animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0" />
      </div>
      <div className="h-screen mx-auto w-fit">
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold  text-center" id="projects">PORTFOLIO</h1>
          <hr className="my-10 h-0.5 w-1/2 bg-black"></hr>
        </div>
        {displayPosts?.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-10 justify-center">
            {displayPosts.map((post, index) => {
              const { slug, title, description, picture, alt, tags } = post;
              return(<PostItem
                slug={slug}
                title={title}
                description={description} 
                picture={picture}
                alt={alt}
                key={slug}
                index={index}
                tags={tags}
                />) 
            })}
          </div>
        ) : (<p>Nothing to see here</p>)}
      </div>
      <Link href="/archive" className="hover:opacity-70 transition-all duration-150 font-sans group md:text-lg">VIEW THE ARCHIVE <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pb-5">→</span></Link>
    </div>

  );
}






{/* <div className="flex flex-row flex-wrap gap-10 justify-center pb-50">
          {postMetadata.map((post, postIndex) => {
            return (
              <PostCard key={postIndex} post={post} />
            )
          })}
        </div> */}