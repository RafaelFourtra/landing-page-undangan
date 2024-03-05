"use client";
import React from "react";
import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Styles from "./css/navbarCss.module.css";
import Link from "next/link";

const Navbars = () => {
  const pathname = usePathname();
  const isActiveOne = pathname === "/";
  const isActiveTwo = pathname.startsWith("/tema-filter");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  const handleClick = (e, path) => {
    if (path === "/cart") {
      router.push(path);
    }
  };

  // Check jika ada item masuk ke cart
  const [idArray, setIdArray] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUsername] = useState("");
  const [emailName, setEmail] = useState("");

  useEffect(() => {
    const checkUser = JSON.parse(window.localStorage.getItem("user"));
    if (checkUser) {
      setIsLogin(true);
      setUsername(checkUser.username);
      setEmail(checkUser.email);
    }
    const storedIdArray =
      JSON.parse(window.localStorage.getItem("idArray")) || [];
    setIdArray(storedIdArray);
  }, []);

  const [totalItemInsideCart, setTotalItemInsideCart] = useState(0);
  useEffect(() => {
    setTotalItemInsideCart(idArray.length);
  }, [idArray]);

  const logOut = () => {
    localStorage.removeItem("user")
    setIsLogin(false);
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
          <Link
            href="/"
            className={isActiveOne ? "text-[#307674]" : "text-black"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/tema-filter"
            className={isActiveTwo ? "text-[#307674]" : "text-black"}
          >
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
        {idArray.length > 0 ? (
          <Badge size="md" content={totalItemInsideCart}>
            <FiShoppingCart
              className="text-xl cursor-pointer"
              onClick={(e) => handleClick(e, "/cart")}
            />
          </Badge>
        ) : (
          <FiShoppingCart
            className="text-xl cursor-pointer"
            onClick={(e) => handleClick(e, "/cart")}
          />
        )}
        <div className="border border-[#3A4C5A] rounded-full h-3/4"></div>
        {isLogin ? (
          <>
            <Button
              onPress={onOpen}
              className="text-[#307674] font-semibold"
              variant="bordered"
            >
              Akun Saya
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <div className="grid grid-cols-12">
                        <div className="col-span-1">
                          <Avatar
                            className="mt-1"
                            showFallback
                            src="/image/logo/user.png"
                          />
                        </div>
                        <div className="col-span-11">
                          <h5 className="ml-6">{userName}</h5>
                          <p className="ml-6 text-sm">{emailName}</p>
                        </div>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <Button variant="light" className="w-full">
                            <h4 className="text-3xl font-bold">
                              Dashboard Saya
                            </h4>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 mt-8">
                          <Button
                            className="text-[#307674] font-semibold w-full"
                            variant="bordered"
                            onPress={onClose}
                            onClick={logOut}
                          >
                            Keluar
                          </Button>
                        </div>
                        <div className="col-span-12 mt-4">
                          <Button
                            className="text-white bg-[#307674] font-semibold w-full"
                            onPress={onClose}
                          >
                            <FaWhatsapp /> Hubungi Kami
                          </Button>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        ) : (
          <Button
            className="text-white bg-[#307674] font-semibold"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        )}
      </NavbarContent>
      <NavbarMenu className="px-5 py-10">
        <NavbarMenuItem>
          <Link
            href="/tema-filter"
            className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full"
          >
            Tema & Filter IG
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/"
            className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/kontak"
            className="text-black text-xl font-semibold pb-6 border-b-2 border-[#3A4C5A] w-full"
          >
            Kontak
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbars;
