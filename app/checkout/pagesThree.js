import React from "react"
import { Divider } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const PagesThree = () => {
    const itemList = [
        "Mulai",
        "Detail Pernikahan",
        "Pembayaran",
    ];

    const today = new Date();

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const hour = today.getHours();
    const minute = today.getMinutes();

    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return (
        <div className="container">
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
            <div className="w-3/5 block mx-auto">
                <div>
                    <h1 className="pt-16 pb-2 text-4xl font-medium text-red-500 text-center">Rincian Pemesanan</h1>
                    <h1 className="text-center text-lg font-normal mb-14">Cek pesanan kamu sebelum melakukan pembayaran.</h1>
                    <div className="p-7 mb-12 bg-slate-50 rounded-xl">
                        <h1 className="text-3xl font-semibold mb-6">Fitur Undangan Website</h1>
                        <div className="flex justify-between">
                            <h1 className="text-lg">Fitur Dasar</h1>
                            <h1 className="text-lg font-medium">Rp. 250.000</h1>
                        </div>
                        <Divider className="my-8" />
                        <h1 className="text-3xl font-semibold mb-3">Detail Pembayaran</h1>
                        <h1 className="text-lg mb-5">{`${day}, ${date} ${month} ${year} | ${formattedHour}:${formattedMinute}`}</h1>
                        <div className="flex mb-5">
                            <Input type="text" label="Masukan Kode Voucher" className="mr-2" />
                            <Button className="ml-2 py-7 text-center text-base font-medium bg-transparent border border-red-500 text-red-500" radius="full">
                                Gunakan
                            </Button>
                        </div>
                        <div className="flex mb-7">
                            <Input type="text" label="Masukan Kode Referal" className="mr-2" />
                            <Button className="ml-2 py-7 text-center text-base font-medium bg-transparent border border-red-500 text-red-500" radius="full">
                                Gunakan
                            </Button>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="text-lg">Subtotal</h1>
                            <h1 className="text-lg font-medium">Rp. 250.000</h1>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50 flex justify-between rounded-t-xl">
                        <div>
                            <h1 className="text-lg font-medium">Total</h1>
                            <h1 className="text-3xl font-medium">Rp. 250.000</h1>
                        </div>
                        <div className="flex items-center">
                            <Button className="py-7 text-center text-base font-medium bg-red-500 text-white" radius="full">
                                Buat Pesanan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagesThree