"use client"

import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

// Icon
import { FiTrash2 } from "react-icons/fi";

// Next JS
import { useEffect, useState } from 'react'

const SectionOne = () => {
    const [idArray, setIdArray] = useState([]);
    useEffect(() => {
        const storedIdArray = JSON.parse(window.localStorage.getItem('idArray')) || [];
        setIdArray(storedIdArray);
    }, []);

    const listPaketItem = [
        {
            title: "Bronze",
            description:
                "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            harga: 100000,
            id: 1,
        },
        {
            title: "Silver",
            description:
                "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            harga: 100000,
            id: 2,
        },
        {
            title: "Gold",
            description:
                "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            harga: 100000,
            id: 3,
        }
    ]

    const matchingPaketItem = idArray.map((id) => {
        return listPaketItem.find((item) => item.id === id);
    });

    // Remove item from localStorage function
    const removeIdFromArrayAndLocalStorage = (idToRemove) => {
        const updatedIdArray = idArray.filter(id => id !== idToRemove);
        setIdArray(updatedIdArray);

        window.localStorage.setItem('idArray', JSON.stringify(updatedIdArray));
        alert(`ID ${idToRemove} berhasil dihapus!`);
    };

    let totalItemPrice = 0
    idArray.forEach((id) => {
        const matchedItem = listPaketItem.find((item) => item.id === id);
        if (matchedItem) {
            totalItemPrice += matchedItem.harga;
        }
    });

    return (
        <div className='xl:p-24 lg:p-12 xl:px-10 lg:px-10 p-10'>
            <h1 className='font-semibold text-3xl'>Keranjang</h1>
            {idArray.length > 0 ? (
                <h1 className="mb-7 mt-2 text-md font-medium">Daftar produk-produk yang telah dipesan.</h1>
            ) : (
                <h1 className="mb-7"></h1>
            )}
            <div className="xl:grid xl:grid-cols-3 lg:flex lg:flex-col-reverse lg:grid-cols-1 xl:gap-5 lg:gap-5 flex flex-col-reverse grid-cols-1 gap-5">
                <div className="xl:col-span-2">
                    <div className="bg-[#E7F0FF] rounded-xl p-10">
                        {
                            idArray.length > 0 ? (
                                matchingPaketItem.map((item, index) => (
                                    // <p key={index}>{title}</p>
                                    <div key={index} className="pr-4 py-4">
                                        <div className="grid grid-cols-4">
                                            <div className="col-span-3">
                                                <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
                                                <h1 className="text-md font-normal mb-3">Harga : <b>Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></h1>
                                                <h1 className="text-md font-normal">Total: Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} X 1 = <b>Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></h1>
                                            </div>
                                            <div>
                                                <FiTrash2 className="float-right cursor-pointer" onClick={() => removeIdFromArrayAndLocalStorage(item.id)} />
                                            </div>
                                        </div>
                                        <Divider className="my-4" />
                                    </div>
                                ))
                            ) : (
                                <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 xl:gap-2 lg:gap-2 px-10 grid grid-cols-1">
                                    <div className="flex items-center justify-center">
                                        <img src="/image/cart/cart.png" className="w-96 py-9" alt="me" />
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center">
                                        <div className="p-5">
                                            <h1 className="font-semibold text-3xl py-4">Wah, keranjang belanjamu kosong</h1>
                                            <h3 className="text-[#688297] text-md">Wah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah.</h3>
                                            <Button className="bg-[#221C35] text-white mt-6" size="md" radius="full">Mulai Cari Tema</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className="bg-[#E7F0FF] rounded-xl p-6">
                        <div>
                            <h1 className="font-semibold text-base mb-4">Ringkasan belanja</h1>
                            <div className="grid grid-cols-2">
                                <div>
                                    <h1 className="text-sm font-medium mb-3">Total Produk</h1>
                                    <h1 className="text-sm font-medium mb-3">Total Pembelian</h1>
                                    <h1 className="text-sm font-medium mb-3">Potongan Diskon</h1>
                                </div>
                                <div>
                                    <h1 className="text-sm font-medium mb-3 text-right">{idArray.length}</h1>
                                    <h1 className="text-sm font-medium mb-3 text-right">{totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                                    <h1 className="text-sm font-medium mb-3 text-right">0</h1>
                                </div>
                            </div>
                            <Divider className="my-4" />
                            <div className="flex justify-between">
                                <h1 className="text-md font-semibold">Total Pembayaran</h1>
                                <h1 className="text-md font-semibold">Rp. {totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                            </div>
                            <h1 className="text-2xl text-center font-semibold my-3 mt-5">12345678</h1>
                            <div className="grid grid-cols-3">
                                <div className="flex items-center justify-center">
                                    <div className="bg-red-500 rounded-full mx-2 w-3 h-3"></div>
                                    <h1 className="text-sm text-black font-semibold">Dipesan</h1>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="bg-[#FFA800] rounded-full mx-2 w-3 h-3"></div>
                                    <h1 className="text-sm text-black font-semibold">Di proses</h1>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="bg-[#14FF00] rounded-full mx-2 w-3 h-3"></div>
                                    <h1 className="text-sm text-black font-semibold">Selesai</h1>
                                </div>
                            </div>
                            <Button className="w-full mt-8 font-semibold text-white bg-[#307674]">
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionOne;