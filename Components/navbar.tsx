"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname()
    const getLinkClasses = (path: string) =>{
        return `hover:bg-black hover:text-white pr-2 pl-2 transition-colors duration-200 ${pathname === path ? "underline underline-offset-8" : ""}`
    }
    return (
        <nav className='font-serif fixed left-1/2 transform -translate-x-1/2 z-10 '>
            <ul className='flex flex-row justify-center  p-5 mt-10 border-2 bg-white opacity-90 w-80 sm:w-125 sm:text-lg sm:space-x-10' suppressHydrationWarning>
                <li className={getLinkClasses("/")}>
                    <Link href="/">Portfolio</Link>
                </li>
                <li className={getLinkClasses("/resume")}>
                    <Link href="/resume">Resume</Link>
                </li>
                <li className={getLinkClasses("/about")}>
                    <Link href="/about">About</Link>
                </li>
                <li className={getLinkClasses("/contact")}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;