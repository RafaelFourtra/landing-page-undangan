"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

const PagesOne = ({ parentCallback }) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    const { name } = event.target;

    // Use valueAsDate for the date input type
    const value =
      event.target.type === "date"
        ? event.target.valueAsDate.toISOString().slice(0, 10)
        : event.target.value;

    setInputValue((prevInputValue) => {
      const updatedInputValue = { ...prevInputValue, [name]: value };

      // console.log(updatedInputValue);

      parentCallback(updatedInputValue);
      return updatedInputValue;
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold">Let's get started</h1>
      <h1 className="text-lg font-base py-2">
        Harap isi formulir ini untuk melanjutkan pemesanan.
      </h1>
      <h1 className="text-lg font-semibold mt-6">Informasi Mempelai</h1>
      <div className="my-3">
        <div className="grid grid-cols-2 gap-7">
          <div>
            <Input
              type="text"
              placeholder="Mempelai Pria"
              variant="underlined"
              name="mempelaipria"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Mempelai Wanita"
              variant="underlined"
              name="mempelaiwanita"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div>
            <Input
              type="text"
              placeholder="Judul Undangan"
              variant="underlined"
              name="judulundangan"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="URL Undangan Website"
              variant="underlined"
              name="domain"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <h1 className="text-lg font-semibold mt-8">
        Kapan acara pernikahan kamu diselenggarakan?
      </h1>
      <Input
        type="date"
        name="tanggalpernikahan"
        onChange={handleInputChange}
      />
      <h1 className="text-sm font-light my-4 text-slate-600">
        Jangan khawatir kamu masih bisa mengubah data di Smart Dashboard!
      </h1>
      <h1 className="text-right text-md font-normal my-4 text-slate-600">
        Semua data harus dilengkapi.
      </h1>
    </div>
  );
};

export default PagesOne;
