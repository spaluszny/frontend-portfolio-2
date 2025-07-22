
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Education from "@/Components/education";
import Experience from "@/Components/experience";


export default function Home() {
    return (

        <div className="max-w-screen-lg mx-auto">

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row  items-center gap-5 pt-40">
                    <h1 className=" text-7xl">RESUME</h1>
                    <a href="/Sarah_Paluszny_Resume.pdf"
                        download="Sarah_Paluszny_Resume.pdf"
                        target="_blank"
                    ><FontAwesomeIcon icon={faFileArrowDown} className="text-black h-8 hover:text-gray-700" />
                    </a>
                </div>
                <hr className="my-10 h-0.5 w-1/2 bg-black"></hr>

            </div>
            <div className="flex flex-col gap-5 pb-20">

                <Education />
                <Experience />


            </div>


        </div>

    );
}