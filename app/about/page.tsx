import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/Components/icons";


export default function Home() {
    return (

        <div className="max-w-screen-2xl mx-auto">

            <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:h-screen gap-20 ">
                <div className="flex flex-col justify-center items-center lg:pl-20 p-5 max-w-150 md:pt-40 lg:max-w-200 mx-auto">
                    <h1 className="text-5xl md:text-7xl pt-30 md:pt-0">ABOUT ME</h1>
                    <hr className="my-10 h-0.5 w-full bg-black"></hr>
                    <p className="text-base md:text-lg font-sans">I&#39;m a data analyst transitioning into front-end development,
                        I use my background in data visualization, process automation and stakeholder
                        collaboration to build digital experiences that solve real problems. Having built my web
                        development foundation with HTML, CSS, and JavaScript as an undergraduate, I am now focusing
                        on modern technologies like React and Next.js. I&#39;m currently seeking a front-end role where
                        I can apply a unique user-centered approach to develop applications that are both beautiful and functional.</p>

                    <div className="w-full pt-10 flex flex-row gap-5">
                        {/* <Link href={'https://www.linkedin.com/in/sarah-paluszny/'}> <FontAwesomeIcon icon={faLinkedin} className="h-8 hover:text-gray-600 transform transition duration-300 hover:scale-110" /> </Link>
                        <Link href={'https://github.com/spaluszny'}> <FontAwesomeIcon icon={faGithub} className="h-8 hover:text-gray-600 transform transition duration-300 hover:scale-110" /> </Link> */}
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <Icons.gitHub className="h-5 md:h-8 hover:text-gray-600 transform transition duration-300 hover:scale-110" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={siteConfig.links.linkedIn} target="_blank" rel="noreferrer">
                            <Icons.linkedin className="h-5 md:h-8 hover:text-gray-600 transform transition duration-300 hover:scale-110" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={siteConfig.links.leetCode} target="_blank" rel="noreferrer">
                            <Icons.leetCode className="h-5 md:h-8 hover:text-gray-600 transform transition duration-300 hover:scale-110" />
                            <span className="sr-only">LeetCode</span>
                        </Link>

                    </div>
                </div>
                <div className="relative -z-10">
                    <Image
                        src='/sarahpaluszny.JPG'
                        alt='Sarah Paluszny Portrait'
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true}
                    />
                </div>

            </div>
        </div>

    );
}