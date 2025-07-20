import Navbar from "../Components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    return (

        <div className="max-w-screen-xl mx-auto">

            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row  items-center gap-5 pt-40">
                    <h1 className=" text-7xl">RESUME</h1>
                    <FontAwesomeIcon icon={faFileArrowDown} className="text-black h-8 hover:text-gray-700" />
                </div>
                <hr className="my-10 h-0.5 w-1/2 bg-black"></hr>
            </div>
        </div>

    );
}