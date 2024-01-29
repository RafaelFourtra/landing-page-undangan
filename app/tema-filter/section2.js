// Component
import { Button } from "@nextui-org/react";

// Icon
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const SectionTwo = () => {
    return (
        <div className="p-10 pt-16">
            <h1 className="text-center text-[#221C35] text-4xl font-semibold ">Pilihan Tema & Filter Instagram</h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-4 w-9/12 pt-7">
                    <div className="flex items-center justify-center">
                        <Button className="font-semibold text-slate-500" size="md" radius="full">Undangan Video <FaCaretDown /></Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button className="font-semibold text-white bg-[#221C35]" size="md" radius="full">Wedding Invitation <FaCaretDown /></Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button className="font-semibold text-white bg-[#221C35]" size="md" radius="full">Filter Instagram <FaCaretDown /></Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button className="font-semibold text-slate-500" size="md" radius="full">Undangan Cetak <FaCaretDown /></Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 pt-16">
                <div>
                    <h1 className="text-lg font-semibold">Berbagai Pilihan Tema Undangan</h1>
                </div>
                <div>
                    <h1 className="text-lg font-semibold float-right">Beberapa Pilihan Desain Terbaik</h1>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 pt-10">
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 pt-10">
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="sm">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent font-bold text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="sm">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo