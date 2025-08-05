"use Client";
import { ContactForm } from "@/Components/contactForm";
import Image from "next/image";


export default function Home() {
    return (

<div className="max-w-screen-xl mx-auto px-4 pb-20">
  <div className="text-center">
    <h1 className="pt-40 text-4xl md:text-7xl">GET IN TOUCH</h1>
    <div className="flex flex-col lg:flex-row justify-center items-center pt-10 gap-8 lg:gap-20">
      <div className="flex-shrink-0">
        <Image 
          src='/contact-dark.gif' 
          alt='Animated contact illustration' 
          width={300} 
          height={300} 
          className="hidden dark:block w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80" 
        />
        <Image 
          src='/contact-light.gif' 
          alt='Animated contact illustration' 
          width={300} 
          height={300} 
          className="dark:hidden block w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80" 
        />
      </div>
      <div className="w-full lg:w-1/3 max-w-md">
        <ContactForm />
      </div>
    </div>
  </div>
</div>

    );
}