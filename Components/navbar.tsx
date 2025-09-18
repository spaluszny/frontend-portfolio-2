"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ModeToggle } from './modeToggle';

//navbar

// Custom animated hamburger component
const AnimatedHamburger = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed sm:hidden right-4 top-4 cursor-pointer z-20 p-3 rounded-md bg-white/60 backdrop-blur-sm dark:bg-[#0f172a]/60 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-8 h-8 relative flex flex-col justify-center items-center">
        {/* Top line */}
        <span 
          className={`bg-black dark:bg-white block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        {/* Middle line */}
        <span 
          className={`bg-black dark:bg-white block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Bottom line */}
        <span 
          className={`bg-black dark:bg-white block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? '-rotate-45' : 'translate-y-2'
          }`}
        />
      </div>
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('[data-mobile-menu]') && !target.closest('[data-hamburger]')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const getLinkClasses = (path: string) => {
    return `hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#0f172a] w-fit p-1 transition-colors duration-200 ${
      pathname === path ? "underline underline-offset-8 decoration-black dark:decoration-white transition-colors duration-200" : ""
    }`;
  };

  return (
    <nav className='font-serif'>
      {/* Desktop Navigation */}
      <div className='hidden sm:block sm:fixed sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-10 list-none'>
        <ul className='flex flex-row items-center justify-between p-5 mt-10 border-2 dark:border-1 bg-white/60 backdrop-blur-sm dark:bg-[#0f172a]/60 w-120 list-none' suppressHydrationWarning>
          <li className={`${getLinkClasses("/")} cursor-pointer`}>
            <Link href="/" className="p-2" >Portfolio</Link>
          </li>
          <li className={`${getLinkClasses("/resume")} cursor-pointer`}>
            <Link href="/resume" className="p-2">Resume</Link>
          </li>
          <li className={`${getLinkClasses("/about")} cursor-pointer`}>
            <Link href="/about" className="p-2">About</Link>
          </li>
          <li className={`${getLinkClasses("/contact")} cursor-pointer`}>
            <Link href="/contact" className="p-2">Contact</Link>
          </li>
          <li><ModeToggle /></li>
        </ul>
      </div>

      {/* Animated Hamburger Button */}
      <div data-hamburger>
        <AnimatedHamburger isOpen={menuOpen} onClick={handleNav} />
      </div>



      {/* Mobile Menu */}
      <div 
        data-mobile-menu
        className={`fixed left-0 top-0 w-[280px] sm:hidden h-screen bg-[rgba(214,211,206)] dark:bg-[#1e293b] p-10 z-20 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col gap-10 mt-16'>
          <ul className='flex flex-col gap-8'>
            <li className={`${getLinkClasses("/")} text-lg`} onClick={() => setMenuOpen(false)}>
              <Link href="/" className="block w-full">Portfolio</Link>
            </li>
            <li className={`${getLinkClasses("/resume")} text-lg`} onClick={() => setMenuOpen(false)}>
              <Link href="/resume" className="block w-full">Resume</Link>
            </li>
            <li className={`${getLinkClasses("/about")} text-lg`} onClick={() => setMenuOpen(false)}>
              <Link href="/about" className="block w-full">About</Link>
            </li>
            <li className={`${getLinkClasses("/contact")} text-lg`} onClick={() => setMenuOpen(false)}>
              <Link href="/contact" className="block w-full">Contact</Link>
            </li>
            <li className='pt-4 border-t  dark:border-gray-600'>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { AlignJustify, X } from 'lucide-react';
// import { useState } from 'react';
// import { ModeToggle } from './modeToggle';


// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false)
//     const handleNav = () => {
//         setMenuOpen(!menuOpen)
//     }
//     const pathname = usePathname()
//     const getLinkClasses = (path: string) => {
//         return `hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#0f172a] w-fit p-1 transition-colors duration-200 ${pathname === path ? "underline underline-offset-8 hover:no-underline" : ""}`
//     }
//     return (
//         <nav className='font-serif '>
//             <div className='hidden sm:block sm:fixed sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-10 '>
//                 <ul className='flex flex-row items-center justify-between md:justify-center  p-5 mt-10 border-2 dark:border-1 bg-white dark:bg-[#0f172a] opacity-90 w-90 text-sm
//              sm:w-120 sm:text-base sm:space-x-10' suppressHydrationWarning>
//                     <li className={getLinkClasses("/")}>
//                         <Link href="/">Portfolio</Link>
//                     </li>
//                     <li className={getLinkClasses("/resume")}>
//                         <Link href="/resume">Resume</Link>
//                     </li>
//                     <li className={getLinkClasses("/about")}>
//                         <Link href="/about">About</Link>
//                     </li>
//                     <li className={getLinkClasses("/contact")}>
//                         <Link href="/contact">Contact</Link>
//                     </li>
//                     <li className=''><ModeToggle /></li>
//                 </ul>
//             </div>

//             <div onClick={handleNav} className='fixed sm:hidden right-4 top-4 cursor-pointer'>
//                 <AlignJustify className='h-10 w-10' />
//             </div>
//             <div className={
//                 menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[rgba(214,211,206)] dark:bg-[#1e293b] p-10 ease-in duration-500 z-10"
//                     : "fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500 z-10"
//             }>
//                 <div className='flex w-full items-center justify-end'>
//                     <div onClick={handleNav} className='cursor-pointer'>
//                         <X className='h-10 w-10' />
//                     </div>
//                 </div>

//                 <div className='flex flex-col gap-10'>
//                     <ul className='flex flex-col gap-10'>
//                         <li className={getLinkClasses("/")} onClick={() => setMenuOpen(false)}>
//                             <Link href="/">Portfolio</Link>
//                         </li>
//                         <li className={getLinkClasses("/resume")} onClick={() => setMenuOpen(false)}>
//                             <Link href="/resume">Resume</Link>
//                         </li>
//                         <li className={getLinkClasses("/about")} onClick={() => setMenuOpen(false)}>
//                             <Link href="/about">About</Link>
//                         </li>
//                         <li className={getLinkClasses("/contact")} onClick={() => setMenuOpen(false)}>
//                             <Link href="/contact">Contact</Link>
//                         </li>
//                         <li className=''><ModeToggle /></li>
//                     </ul>

//                 </div>

//             </div>



//         </nav>
//     );
// };

// export default Navbar;