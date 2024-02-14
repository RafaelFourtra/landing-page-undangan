"use client"
import React from "react"
import { Input } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

const PagesOne = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );


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
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Mempelai Wanita"
                            variant="underlined"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <Input
                            type="text"
                            label="Judul Undangan"
                            variant="underlined"
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="URL Undangan Website"
                            variant="underlined"
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
            <h1 className="text-lg font-semibold mt-8">Sudah sejauh mana persiapan yang kamu lakukan?</h1>
            <Dropdown>
                <DropdownTrigger className="w-full">
                    <Button radius="full" variant="bordered" className="capitalize flex justify-between mt-4 mb-6">
                        {selectedValue}
                        <FaCaretDown />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    defaultSelectedKeys={["baru lamaran dan sedang melihat lihat"]}
                    onSelectionChange={setSelectedKeys}
                    className="w-full"
                >
                    <DropdownItem key="belum lamaran">Belum lamaran</DropdownItem>
                    <DropdownItem key="baru lamaran dan sedang melihat lihat">Baru lamaran dan sedang melihat lihat</DropdownItem>
                    <DropdownItem key="dalam proses persiapan">Dalam proses persiapan</DropdownItem>
                    <DropdownItem key="hampir selesai, tinggal beberapa hal lagi">Hampir selesai, tinggal beberapa hal lagi</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <h1 className="text-right text-md font-normal my-4 text-slate-600">Semua data harus dilengkapi.</h1>
        </div>
    )
}

export default PagesOne