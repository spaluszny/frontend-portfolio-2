import Navbar from "../Components/navbar";
import Image from "next/image";


export default function Home() {
    return (

        <div className="max-w-screen-2xl mx-auto">

            <Navbar />
            <div className="grid grid-cols-2 h-screen gap-20 ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-8xl">ABOUT ME</h1>
                    <hr className="my-10 h-0.5 w-full bg-black"></hr>
                    <p className="text-lg">I'm a data analyst transitioning into front-end development,
                         I use my background in data visualization, process automation and stakeholder
                         collaboration to build digital experiences that solve real problems. Having built my web 
                         development foundation with HTML, CSS, and JavaScript as an undergraduate, I am now focusing
                          on modern technologies like React and Next.js. I'm currently seeking a front-end role where 
                          I can apply a unique user-centered approach to develop applications that are both beautiful and functional.</p>
                </div>
                <div className="relative -z-10">
                    <Image src='/sarahpaluszny.JPG' alt='Sarah Paluszny Portrait' fill objectFit="cover"/>
                </div>

            </div>
        </div>

    );
}