import React from "react"
import Styles from "./css/pagesTwoCss.module.css"
import { FaArrowRight } from "react-icons/fa";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link"

const PagesTwo = () => {
    const itemList = [
        "Mulai",
        "Detail Pernikahan",
        "Pembayaran",
    ];

    const listItem = [
        [
            "Undangan Website Paket Mantu",
            "Real-time Data Tracking",
            "Table Management",
            "Souvenir Management",
            "Dashboard Penerima Tamu (untuk Pengantin)",
            "App Penerima Tamu (untuk Usher)",
            "Layar Sapa",
            "E-Invitation",
        ],
        [
            "Virtual & Group Assistant",
            "Meeting Bersama (Online/Offline)",
            "Softfile QR Code Access untuk keperluan Cetak",
            "Print Penomoran",
            "Reminder & Thank You Message",
            "Equipment (Tablet, Modem)",
            "Manpower",
            "Safety CCTV Recording",
        ]
    ]

    return (
        <div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-7 grid-cols-1 w-3/5 mt-14 py-15 block mx-auto">
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
            <h1 className="text-4xl text-center font-normal py-20">Lengkapi acara pernikahan kamu dengan <br /> Buku Tamu Digital,
                <br /> <b className="text-red-500">apakah kamu membutuhkannya?</b></h1>
            <div className="p-8 mb-10 bg-slate-50 rounded-xl w-3/5 block mx-auto">
                <h1 className="text-red-500 text-3xl font-semibold mb-3 text-center">Bundle Buku Tamu Digital</h1>
                <h3 className="font-normal text-center text-lg mb-7">Bring Your Wedding to The Next Level Dengan membeli Bundle Buku Tamu Digital dari Mesrain.</h3>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <ul>
                            {listItem[0].map((step, index) => (
                                <React.Fragment key={index}>
                                    <li className={`${Styles.liStyles} text-lg flex items-center py-4 justify-start`}><img src="https://katsudoto.id/media/icon/retro/ic-folders.png" width="20" className="mr-3" /> {step}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {listItem[1].map((step, index) => (
                                <React.Fragment key={index}>
                                    <li className={`${Styles.liStyles} text-lg flex items-center py-4 justify-start`}><img src="https://katsudoto.id/media/icon/retro/ic-folders.png" width="20" className="mr-3" /> {step}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <Button className="font-medium text-lg text-blue-500 bg-transparent px-0" radius="full">Lebih lanjut<FaArrowRight /></Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                    <div>
                        <Button className="w-full py-6 text-center text-base font-medium bg-red-500 text-white" radius="full">
                            Ya, aku mau paket bundle ini
                        </Button>
                    </div>
                    <div>
                        <Button className="w-full py-6 text-center text-base font-medium bg-transparent border border-red-500 text-red-500" radius="full">
                            Tidak, aku hanya perlu undangan website
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagesTwo