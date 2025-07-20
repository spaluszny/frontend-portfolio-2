'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='font-serif fixed left-1/2 transform -translate-x-1/2'>
            <ul className='flex flex-row justify-center space-x-10 p-5 mt-10 border-2 bg-white opacity-90'>
                <li className='hover:underline underline-offset-8'>
                    <Link href="/">Portfolio</Link>
                </li>
                <li className='hover:underline underline-offset-8'>
                    <Link href="/resume">Resume</Link>
                </li>
                <li className='hover:underline underline-offset-8'>
                    <Link href="/about">About</Link>
                </li>
                <li className='hover:underline underline-offset-8'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;