import { Button } from "@nextui-org/react";
import {Input} from "@nextui-org/react";

const SectionOne = () => {
    return (
        <div className='p-24 px-10'>
            <h1 className='font-semibold text-3xl mb-7'>Keranjang</h1>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="bg-[#E7F0FF] rounded-xl">
                        <div className="grid grid-cols-3 gap-2 p-10">
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
                    </div>
                </div>
                <div>
                    <div className="bg-[#E7F0FF] rounded-xl p-6">
                        <div>
                            <h1 className="font-semibold text-base ">Ringkasan belanja</h1>
                            <Input
                                isReadOnly
                                type="text"
                                label="Total"
                                variant="underlined"
                                className="max-w-xs"
                            />
                            <h1 className="text-2xl text-center font-semibold my-3">12345678</h1>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionOne;