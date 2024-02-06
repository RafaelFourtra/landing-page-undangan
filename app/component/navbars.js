"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Image } from "@nextui-org/react";
import { usePathname, useRouter } from 'next/navigation';
import { FiShoppingCart } from "react-icons/fi";
import Styles from "./css/navbarCss.module.css";

const Navbars = () => {
    const pathname = usePathname();
    const isActiveOne = pathname === '/';
    const isActiveTwo = pathname.startsWith('/tema-filter');

    const router = useRouter()
    const handleClick = (e, path) => {
        if (path === '/cart') {
            router.push(path)
        }
    }

    return (
        <Navbar className={`p-2 ${Styles.navbar} bg-white`}>
            <NavbarContent>
                <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden" />
                <NavbarBrand>
                    <Image
                        alt="Logo"
                        className="object-cover mx-auto w-40"
                        src="/image/logo/logo_text.svg"
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="left">
                <NavbarItem>
                    <Link href="/" className={isActiveOne ? "text-[#307674]" : "text-black"}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/tema-filter" className={isActiveTwo ? "text-[#307674]" : "text-black"}>
                        Tema & Filter IG
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/kontak" className="text-black">
                        Kontak
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="w-fit" justify="end">
                <FiShoppingCart className="text-xl cursor-pointer" />
                <div className="border border-[#3A4C5A] rounded-full h-3/4"></div>
                <NavbarItem className="bg-[#307674] p-2 px-8 rounded-full">
                    <Link className="text-white" href="#">
                        Login
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="px-5 py-10">
                <NavbarMenuItem>
                    <Link href="/tema-filter" className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full">
                        Tema & Filter IG
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/" className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full">
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/kontak" className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full">
                        Kontak
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Navbars;
