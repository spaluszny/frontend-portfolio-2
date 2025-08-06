"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from './modeToggle';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
    const pathname = usePathname()
    const getLinkClasses = (path: string) => {
        return `hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#0f172a] w-fit p-1 transition-colors duration-200 ${pathname === path ? "underline underline-offset-8 hover:no-underline" : ""}`
    }
    return (
        <nav className='font-serif '>
            <div className='hidden sm:block sm:fixed sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-10 '>
                <ul className='flex flex-row items-center justify-between md:justify-center  p-5 mt-10 border-2 dark:border-1 bg-white dark:bg-[#0f172a] opacity-90 w-90 text-sm
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
                    <li className=''><ModeToggle /></li>
                </ul>
            </div>

            <div onClick={handleNav} className='fixed sm:hidden right-4 top-4 cursor-pointer'>
                <AlignJustify className='h-10 w-10' />
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[rgba(214,211,206)] dark:bg-[#1e293b] p-10 ease-in duration-500 z-10"
                    : "fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500 z-10"
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <X className='h-10 w-10' />
                    </div>
                </div>

                <div className='flex flex-col gap-10'>
                    <ul className='flex flex-col gap-10'>
                        <li className={getLinkClasses("/")} onClick={() => setMenuOpen(false)}>
                            <Link href="/">Portfolio</Link>
                        </li>
                        <li className={getLinkClasses("/resume")} onClick={() => setMenuOpen(false)}>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li className={getLinkClasses("/about")} onClick={() => setMenuOpen(false)}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={getLinkClasses("/contact")} onClick={() => setMenuOpen(false)}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className=''><ModeToggle /></li>
                    </ul>

                </div>

            </div>



        </nav>
    );
};

export default Navbar;