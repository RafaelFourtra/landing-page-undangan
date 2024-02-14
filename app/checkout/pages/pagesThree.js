"use client"
import { useState } from "react";

const PagesThree = () => {
    const [code, setCode] = useState("");
    const handleChange = (code) => setCode(code);

    return (
        <div>
            <h1 className="text-center text-4xl font-semibold">Verifikasi Email</h1>
            <h1 className="text-center text-lg font-base py-2">Kami telah mengirimkan kode OTP ke email</h1>
            <h1 className="text-center text-lg font-bold py-1">youremail@gmail.com</h1>
            <h1 className="text-center text-lg font-base py-1 mb-4">Masukan 6 digit kode OTP</h1>
            <form action="" method="post">
                <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-3/4">
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                        <div className="w-16 h-16 ">
                            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                        </div>
                    </div>
                </div>
            </form>
            <h1 className="text-center text-base font-semibold text-red-500 cursor-pointer mt-4">Kirim ulang kode</h1>
        </div>
    )
}

export default PagesThree