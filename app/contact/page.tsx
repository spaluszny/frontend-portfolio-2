"use Client";
import { ContactForm } from "@/Components/contactForm";


export default function Home() {
    return (

        <div className="max-w-screen-xl mx-auto">

            <div className="text-center">
                <h1 className="pt-40 text-7xl">GET IN TOUCH</h1>
                <div className="flex flex-row justify-center pt-20 gap-20">
                    {/* <Image src='/contact-dark.gif' alt='Contact Emoji' width={400} height={400} className="hidden dark:block" />
                    <Image src='/contact-light.gif' alt='Contact Emoji' width={400} height={400} className="dark:hidden block" /> */}
                    <div className=" w-1/3">
                    <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    );
}