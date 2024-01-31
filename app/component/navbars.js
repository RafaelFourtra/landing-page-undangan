"use client"

import React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image } from "@nextui-org/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi";
import Styles from "./css/navbarCss.module.css"


const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const Navbars = () => {
    const pathname = usePathname();
    const isActiveOne = pathname === '/';
    const isActiveTwo = pathname.startsWith('/tema-filter');
    const isActiveThree = pathname.startsWith('/kontak');

    const router = useRouter()
    const handleClick = (e, path) => {
        if(path === '/cart'){
            router.push(path)
        }
    }

    return (
        <Navbar className={`${jakartaSans.className} p-2 ${Styles.navbar}`}>
            <NavbarBrand>
            <Image
                    alt="Card background"
                    className="object-cover mx-auto w-40"
                    src="/image/logo/logo_text.svg"
                    />            
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="left">
                <NavbarItem>
                    <Link
                        href="/"
                        className={isActiveOne ? "text-[#549ae2]" : "text-black"}
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        href="/tema-filter"
                        className={isActiveTwo ? "text-[#549ae2]" : "text-black"}
                    >
                        Tema & Filter IG
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        href="/kontak"
                        className={isActiveThree ? "text-[#549ae2]" : "text-black"}
                    >
                        Kontak
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="w-fit" justify="end">
                <FiShoppingCart className="text-xl cursor-pointer" onClick={(e) => handleClick(e, '/cart')} />
                <div className="border border-black rounded-full h-3/4"></div>
                <NavbarItem className="bg-[#035B7D] p-2 px-8 rounded-full">
                    <Link className="text-white" href="#">Login</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Navbars;
