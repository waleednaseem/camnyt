// components/Navbar.js
"use client"; 
import React, { useState } from "react";
import blackfbicon from '@/images/blackfbicon.png'
import blackinstaicon from '@/images/blackinstaicon.png'
import blacklinkedicon from '@/images/blacklinkedicon.png'
import blacktwittericon from '@/images/blacktwittericon.png'
import camsurf from '@/images/camnyt.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE] ">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a href="/">

              <Image src={camsurf} className="w-[150px]" alt="" srcSet="" />
                </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-sm">
                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-bold transition text-[#202020] hover:text-[#FF5887]"
                      href="/about"
                    >
                      
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/guidelines"
                    >
                      
                      Guidelines
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/stories"
                    >
                      Stories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/faq"
                    >
                      
                      Faq
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/press"
                    >
                      
                      Press
                    </Link>
                  </li>
                  {/* Add your other navigation items for desktop here */}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex hidden sm:gap-2">
                {/* Add your social media icons for desktop here */}
                <Image src={blackfbicon} alt="" srcSet="" />
                <Image src={blackinstaicon} alt="" srcSet="" />
                <Image src={blacklinkedicon} alt="" srcSet="" />
                <Image src={blacktwittericon} alt="" srcSet="" />
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-[#FF5887]"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden font-inter bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE]">
          <nav aria-label="Mobile">
            <ul className="flex flex-col items-start px-4 gap-4 text-sm">
            <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/about"
                    >
                      
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/guidelines"
                    >
                      
                      Guidelines
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/stories"
                    >
                      Stories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/faq"
                    >
                      
                      Faq
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#202020] font-bold transition hover:text-[#FF5887]"
                      href="/presspage"
                    >
                      
                      Press
                    </Link>
                  </li>
              {/* Add your other navigation items for mobile here */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

