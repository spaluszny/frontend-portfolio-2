
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../Components/typewriter";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/Components/postcard";
export default function Home() {

  const postMetadata = getPostMetadata('projects')
  console.log(postMetadata)
  return (

    <div className="max-w-screen-xl mx-auto">
      <div className="h-screen flex flex-col justify-center pl-10">
        <div >
          <h1 className="text-8xl font-bold">SARAH PALUSZNY</h1>
          <div className="font-sans text-5xl font-light"><TypeWriter text='ront-End Engineer' speed={150} /></div>

        </div>
        <FontAwesomeIcon icon={faAngleDoubleDown} className="text-black h-10 animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0" />
      </div>
      <div className="h-screen mx-auto w-fit">
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-7xl font-bold pr-30 pl-30 text-center">PORTFOLIO</h1>
          <hr className="my-10 h-0.5 w-1/2 bg-black"></hr>
        </div>
        <div className="flex flex-row gap-10">
          {postMetadata.map((post, postIndex) => {
            return (
              <PostCard key={postIndex} post={post} />
            )
          })}
        </div>
      </div>
    </div>

  );
}
