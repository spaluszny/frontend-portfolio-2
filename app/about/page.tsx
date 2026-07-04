import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/Components/icons";
import CurrentGoodReads from "@/Components/currentGoodReads";
import { Suspense } from "react";
import GoodReadsSkeleton from "@/Components/goodReadsSkeleton";



export default function Home() {
    return (

        <div className="max-w-screen-2xl mx-auto">

            <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:h-screen gap-20 ">

                <div className="flex flex-col justify-center items-center lg:pl-20 p-5 max-w-150 md:pt-40 lg:max-w-200 mx-auto">
                    <h1 className="text-5xl md:text-7xl pt-30 md:pt-0 uppercase">About Me</h1>
                    <hr className="my-5 h-0.5 w-full bg-black"></hr>
                    <p className="font-sans">
                        I'm a frontend engineer focused on building usable, thoughtfully designed, and
                        pixel-precise user interfaces. I built my foundation in web development with
                        HTML, CSS, and JavaScript during my undergraduate studies, and I now primarily
                        work with modern technologies like React and Next.js.

                        With a background in data analytics, I bring a detail-oriented and structured
                        approach to frontend development, with a strong focus on clarity, usability,
                        and execution.
                    </p>
                    <br></br>
                    <p className="pb-5">
                        Outside of programming, I enjoy traveling, cooking, and reading. I also like
                        learning through new experiences—most recently through an improv class. You can
                        see what I'm currently reading below.
                    </p>

                    
                    <Suspense fallback={<GoodReadsSkeleton />}>
                        <CurrentGoodReads />
                    </Suspense>

                    <div className="w-full pt-5 flex flex-row gap-5 pb-5">

                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <Icons.gitHub className="h-5 md:h-6  transform transition duration-300 hover:scale-110" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={siteConfig.links.linkedIn} target="_blank" rel="noreferrer">
                            <Icons.linkedin className="h-5 md:h-6  transform transition duration-300 hover:scale-110" />
                            <span className="sr-only">GitHub</span>
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
        </div >

    );
}