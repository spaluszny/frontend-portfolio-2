
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Education from "@/Components/education";
import Experience from "@/Components/experience";
import Skills from "@/Components/skills";


export default function Home() {
    return (

        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row  items-center gap-5 pt-20 sm:pt-40">
                    <h1 className="text-5xl sm:text-5xl lg:text-7xl">RESUME</h1>
                    <a href="/Sarah_Paluszny_Resume.pdf"
                        download="Sarah_Paluszny_Resume.pdf"
                        target="_blank"
                        aria-label="Download resume"
                    ><FontAwesomeIcon icon={faFileArrowDown} className="text-black dark:text-white h-5 md:h-8 scale-100  hover:scale-110 transition duration-200 transform" />
                    </a>
                </div>
                <hr className="my-5 sm:my-10 h-0.5 w-75 sm:w-150 bg-black"></hr>

            </div>
            {/* <AnimatedArticle> */}
            <div className="flex flex-col gap-5 pb-20">

                <Skills />

                <Experience />

                <Education />


            </div>
        </div>

    );
}