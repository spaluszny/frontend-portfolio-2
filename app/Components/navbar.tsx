import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='font-serif font-bold fixed left-1/2 transform -translate-x-1/2'>
            <ul className='flex flex-row justify-center space-x-10 p-5 mt-10 border-2 bg-white opacity-90'>
                <li>
                    <Link href="/">Portfolio</Link>
                </li>
                <li>
                    <Link href="/about">Resume</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;