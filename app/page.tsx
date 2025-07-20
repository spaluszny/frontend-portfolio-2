import Navbar from "./Components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "./Components/typewriter";
export default function Home() {
  return (

    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="h-screen flex flex-col justify-center">
        <div >
          <h1 className="text-8xl font-bold">SARAH PALUSZNY</h1>
          <div className="font-sans text-5xl font-light"><TypeWriter text='ront-End Engineer' speed={150}/></div>
          
        </div>
        <FontAwesomeIcon icon={faAngleDoubleDown} className="text-black h-10 animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="h-screen mx-auto w-fit">
        <h1 className="font-sans text-7xl font-bold pr-30 pl-30">PORTFOLIO</h1>
        <hr className="my-10 h-0.5 w-full bg-black"></hr>
      </div>
    </div>

  );
}
