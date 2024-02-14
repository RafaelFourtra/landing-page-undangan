import { Input } from "@nextui-org/react";
import Link from "next/link"

const PagesTwo = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold">Informasi Akun</h1>
            <h1 className="text-lg font-base py-2">Tulis alamat email dan passwordmu atau daftar dengan akun Google untuk akses lebih cepat!</h1>
            <Input
                type="text"
                label="Alamat Email"
                variant="underlined"
            />
            <Input
                type="text"
                label="Nomor Whatsapp"
                variant="underlined"
            />
            <Input
                type="password"
                label="Password"
                variant="underlined"
            />
            <h1 className="text-sm font-light mt-3 mb-6 text-slate-600">Password harus terdiri dari 8-32 karakter, minimal mengandung 1 huruf dan 1 angka.</h1>
            <h1 className="text-right text-md font-normal my-4 text-slate-600">Semua data harus dilengkapi.</h1>
            <h1 className="text-md font-normal my-4 text-slate-600">Dengan mendaftar, baik melalui Google atau Email, saya menyetujui <b className="text-red-500">Syarat dan Ketentuan</b> serta <b className="text-red-500">Kebijakan Privasi</b> Mesrain.</h1>
            <h1 className="text-md font-normal my-4 text-slate-600">Sudah memiliki akun? <Link href="#" className="text-red-500 cursor-pointer"><b>Login</b></Link></h1>
        </div>
    )
}

export default PagesTwo