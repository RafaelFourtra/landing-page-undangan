import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Navbars = () => {
    return (
        <Navbar className="p-4">
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">LOGO</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="left">
                <NavbarItem>
                    <Link aria-current="page" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" color="foreground">
                        Tema & Filter IG
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
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
    )
}

export default Navbars