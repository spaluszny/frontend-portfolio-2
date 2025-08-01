"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname()
    const getLinkClasses = (path: string) =>{
        return `hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#0f172a] pr-2 pl-2 transition-colors duration-200 ${pathname === path ? "underline underline-offset-8" : ""}`
    }
    return (
        <nav className='font-serif fixed left-1/2 transform -translate-x-1/2 z-10 '>
            <ul className='flex flex-row justify-between md:justify-center  p-5 mt-10 border-2 dark:border-1 bg-white dark:bg-[#0f172a] opacity-90 w-90 text-sm
             sm:w-120 sm:text-base sm:space-x-10' suppressHydrationWarning>
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