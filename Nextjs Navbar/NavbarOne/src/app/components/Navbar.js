"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full xl:bg-blue-700 lg:bg-blue-700 md:bg-blue-700 sm:bg-gray-700 bg-gray-700 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="bg-blue-700 px-4 flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">Navbar</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross className="text-lg" />
                  ) : (
                    // <Image src="/crossWhite.jpg" width={30} height={30} alt="logo" />
                    <GiHamburgerMenu className="text-lg" />
                    // <Image
                    //   src="/hamburger-menu.svg"
                    //   width={30}
                    //   height={30}
                    //   alt="logo"
                    //   className="focus:border-none active:border-none"
                    // />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="text-xl text-white py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-xl text-white py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="text-xl text-white py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="text-xl text-white py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="text-xl text-white py-4 px-6 text-center  xl:hover:text-black lg:hover:text-black md:hover:text-black hover:text-blue-700 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
