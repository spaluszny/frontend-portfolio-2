
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
export default function Home() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Link href={'/#projects'}><FaArrowLeft className="h-6 w-6 absolute top-15 hover:opacity-60" /></Link>
            <h1 className="font-bold text-5xl  pt-40 pb-5">THE ARCHIVE</h1>
            <hr></hr>

            <p className="font-serif pt-5 pb-5 w-100">A collection of not-so-perfect projects to show my progression in front-end engineering. Enjoy :)</p>
                <div className="flex justify-between font-sans">
                        <p>YEAR</p>
                        <p>PROJECT</p>
                        <p>MADE AT</p>
                        <p>BUILT WITH</p>
                        <p>LINK</p>
                </div>
                <hr></hr>

        </div>

    )
}