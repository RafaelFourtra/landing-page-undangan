"use client"
import React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";

import Styles from "./css/sectionOneCss.module.css"

// Pages
import PagesOne from "./pages/pagesOne"
import PagesTwo from "./pages/pagesTwo"
import PagesThree from "./pages/pagesThree"
import PagesFour from "./pages/pagesFour"

const SectionOne = () => {
    const itemList = [
        "Mulai",
        "Detail Pernikahan",
        "Pembayaran",
    ];

    const router = useRouter();

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className={`${Styles.background} flex items-end justify-center`}>
                    <h1 className="text-4xl w-3/4 font-bold text-white py-24">Setiap hal hebat dimulai dengan satu langkah kecil.</h1>
                </div>
                <div className="col-span-2 block mx-auto h-screen">
                    <FaTimes className="absolute right-7 top-5 text-xl text-slate-400 cursor-pointer" onClick={ () => router.back() } />
                    <div className="grid xl:grid-cols-7 lg:grid-cols-7 grid-cols-1 w-3/4 mt-14 py-15 block mx-auto">
                        {itemList.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className='xl:block lg:block inline-flex'>
                                    <div className="xl:flex lg:flex xl:items-center lg:items-center xl:justify-center lg:justify-center">
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-500 xl:mb-0 lg:mb-0 mb-10">
                                            <h1 className="text-xl text-white font-semibold">{index + 1}</h1>
                                        </div>
                                    </div>
                                    <h1 className="xl:text-center lg:text-center xl:text-sm lg:text-sm text-xl xl:pl-0 lg:pl-0 pl-5 xl:font-semibold lg:font-semibold font-normal my-3">{step}</h1>
                                </div>
                                {index < itemList.length - 1 && (
                                    <div className="border border-[#939393] h-px my-7 xl:block lg:block hidden"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={`${Styles.overflow} w-3/4 mt-14 block mx-auto`}>
                        {/* <PagesOne /> */}
                        {/* <PagesTwo /> */}
                        {/* <PagesThree /> */}
                        {/* <PagesFour /> */}
                    </div>
                    <div className="w-3/4 block mx-auto">
                        <Button radius="full" className="bg-black text-white w-full py-8 text-xl font-semibold my-5 mt-10">
                            Lanjut
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne