"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import Logo from "../../../public/assets/LogoAfonso.png"
import styles from "./sytles.module.css"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <Container>
            <div className="w-full lg:w-[700px] flex justify-between lg:justify-center items-center py-3 my-5 mx-auto bg-gray-800/40 rounded-full lg:gap-10 z-30">
                <div className="flex items-center mx-auto">
                    <Link href="/">
                        <Image src={Logo} alt="Logo Afonso Gesualdi" width={50} height={50} />
                    </Link>
                </div>
                {/* Menu Mobile */}
                <div className="mx-auto lg:hidden">
                    <button onClick={toggleMenu}>
                        <span className={`${styles.open}`}>
                            <i className={`${styles.openTop}`}></i>
                            <i className={`${styles.openMiddle}`}></i>
                            <i className={`${styles.openBottom}`}></i>
                        </span>
                    </button>
                    { isOpen && (
                        <div className="absolute top-0 left-0 w-full h-full bg-white/80 backdrop-blur-sm z-9999">
                            <div className="absolute top-10 right-10 md:right-15">
                                <button className={`cursor-pointer`} onClick={toggleMenu}>
                                    <span className={`${styles.close}`}>
                                        <i className={`${styles.closeLeft}`}></i>
                                        <i className={`${styles.closeRight}`}></i>
                                    </span>
                                </button>
                            </div>
                            {/* Body Menu Mobile */}
                            <div className="flex flex-col items-center justify-center h-full">
                            <ul className="flex flex-col gap-5 md:gap-10 text-2xl md:text-4xl text-left p-4">
                                <li className="hover:font-bold">
                                    <Link href="/" onClick={toggleMenu} className="relative menu">
                                    Home
                                    </Link>
                                </li>
                                <li className="hover:font-bold">
                                    <Link href="/about" onClick={toggleMenu} className="relative menu">
                                    About
                                    </Link>
                                </li>
                                <li className="hover:font-bold">
                                    <Link href="/about/education" onClick={toggleMenu} className="relative menu">
                                    Education
                                    </Link>
                                </li>
                                <li className="hover:font-bold">
                                    <Link href="/projects" onClick={toggleMenu} className="relative menu">
                                    Projects
                                    </Link>
                                </li>
                                <li className="hover:font-bold">
                                    <Link href="/contact" onClick={toggleMenu} className="relative menu">
                                    Contact
                                    </Link>
                                </li>
                                </ul>

                            </div>
                        </div>
                    )}
                </div>

                {/* Menu Desktop */}
                <div className="hidden lg:block text-xl xl:text-2xl mx-auto">
                    <nav className="flex gap-5">
                        <Link href="/"
                            className="text-[#0F9] hover:text-[#0FF] hover:font-semibold hover:underline  transition-all duration-500"
                        >
                            Home
                        </Link>
                        <Link href="/about"
                            className="text-[#0F9] hover:text-[#0FF] hover:font-semibold hover:underline  transition-all duration-500"
                        >
                            About
                        </Link>
                        <Link href="/about/education"
                            className="text-[#0F9] hover:text-[#0FF] hover:font-semibold hover:underline  transition-all duration-500"
                        >
                            Education
                        </Link>
                        <Link href="/projects"
                            className="text-[#0F9] hover:text-[#0FF] hover:font-semibold hover:underline  transition-all duration-500"
                        >
                            Project
                        </Link>
                        <Link href="/contact"
                            className="text-[#0F9] hover:text-[#0FF] hover:font-semibold hover:underline  transition-all duration-500"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </Container>
    );
}