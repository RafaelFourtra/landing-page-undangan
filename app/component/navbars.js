"use client"

import React from "react";
import { usePathname } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from 'next/link'

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const Navbars = () => {
    const pathname = usePathname();
    const isActiveOne = pathname === '/';
    const isActiveTwo = pathname.startsWith('/tema-filter');
    const isActiveThree = pathname.startsWith('/kontak');

    return (
        <Navbar className={`${jakartaSans.className} p-2`}>
            <NavbarBrand>
                <p className="font-bold text-inherit">LOGO</p>
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
            <NavbarContent justify="end">
                <NavbarItem className="bg-[#035B7D] p-2 px-8 rounded-full">
                    <Link className="text-white" href="#">Login</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Navbars;
