
import Image from "next/image";


export default function Home() {
    return (

        <div className="max-w-screen-xl mx-auto">

            <div className="text-center">
                <h1 className="pt-40 text-7xl">GET IN TOUCH</h1>
                <div className="flex flex-row justify-center pt-20 gap-20">
                    <Image src='/contact.gif' alt='Contact Emoji' width={400} height={400} />
                    <div className="border-2 w-1/3"><p>soon to be contact form</p></div>
                </div>
            </div>
        </div>

    );
}