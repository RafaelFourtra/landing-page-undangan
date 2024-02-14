"use client"

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

const PagesOne = ({ parentCallback }) => {
    const [inputValue, setInputValue] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
        // Mengirim status input ke parent
        parentCallback(inputValue);
    };

    return (
        <div>
            <h1 className="text-4xl font-semibold">Let's get started</h1>
            <h1 className="text-lg font-base py-2">Harap isi formulir ini untuk melanjutkan pemesanan.</h1>
            <h1 className="text-lg font-semibold mt-6">Informasi Mempelai</h1>
            <div className="my-3">
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <Input
                            type="text"
                            label="Mempelai Pria"
                            variant="underlined"
                            value={inputValue.input1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Mempelai Wanita"
                            variant="underlined"
                            value={inputValue.input2}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <Input
                            type="text"
                            label="Judul Undangan"
                            variant="underlined"
                            value={inputValue.input3}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="URL Undangan Website"
                            variant="underlined"
                            value={inputValue.input4}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <h1 className="text-lg font-semibold mt-8">Kapan acara pernikahan kamu diselenggarakan?</h1>
            <Input
                type="date"
                label=""
                variant="underlined"
            />
            <h1 className="text-sm font-light my-4 text-slate-600">Jangan khawatir kamu masih bisa mengubah data di Smart Dashboard!</h1>
            <h1 className="text-right text-md font-normal my-4 text-slate-600">Semua data harus dilengkapi.</h1>
        </div>
    )
}

export default PagesOne