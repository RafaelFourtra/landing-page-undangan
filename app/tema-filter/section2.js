'use client'
 
import { useState } from 'react'
// Component
import { Button } from "@nextui-org/react";

// Icon
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const SectionTwo = () => {

    const [selectedId, setSelectedId] = useState(1);

      const handleButtonClick = (id) => {
        setSelectedId(id);
      };


    const list = [
        {
          title: "Undangan Digital",
          id: 1
        },
        {
          title: "Undangan 3D",
          id: 2
        },
        {
          title: "Filter Instagram",
          id: 3
        },
      ];

    return (
        <div className="p-10">
            <h1 className="mt-10 text-center text-4xl font-bold">Pilih Paket Terbaikmu</h1>
            <div className="flex gap-2 items-center flex justify-center mt-[2.5rem]">
                {list.map((item, index) => (
                    <Button size="lg" radius="sm"  className={selectedId === item.id ? "bg-[#035B7D] text-white" : "bg-white text-[#035B7D]"} onClick={() => handleButtonClick(item.id)}>
                        {item.title}
                    </Button> 
                ))}
            </div>

            <div className="grid grid-cols-2 pt-16">
                <div>
                    <h1 className="text-lg font-semibold">Pilihlah Design Terbaikmu !</h1>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 pt-10">
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
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
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">Nama Tema</h1>
                            <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius="full" size="md">Preview Tema <FaArrowRight /></Button>
                            <Button className="w-full bg-transparent text-[#035B7D] border-2 border-[#035B7D] my-1" radius="full" size="md">Masukan Keranjang <MdOutlineShoppingCartCheckout /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo