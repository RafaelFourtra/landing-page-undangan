import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

const PagesTwo = ({ parentCallback }) => {
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const { name } = event.target;

    const value = event.target.value;

    setInputValue((prevInputValue) => {
      const updatedInputValue = { ...prevInputValue, [name]: value };
      return updatedInputValue;
    });
  };

  const handleButtonClick = () => {
    setIsValid(true);
  };

  useEffect(() => {
    const combinedData = { isValid, ...inputValue };
    parentCallback(combinedData);
  }, [isValid, inputValue, parentCallback]);

  return (
    <>
      <div>
        <h1 className="text-4xl font-semibold">Informasi Akun</h1>
        <h1 className="text-lg font-base py-2">
          Tulis alamat email dan passwordmu atau daftar dengan akun Google untuk
          akses lebih cepat!
        </h1>
        <Input
          type="text"
          label="Alamat Email"
          variant="underlined"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Nomor Whatsapp"
          variant="underlined"
          onChange={handleInputChange}
        />
        <h1 className="text-right text-md font-normal my-4 text-slate-600">
          Semua data harus dilengkapi.
        </h1>
        <h1 className="text-md font-normal my-4 text-slate-600">
          Dengan mendaftar, baik melalui Google atau Email, saya menyetujui{" "}
          <b className="text-red-500">Syarat dan Ketentuan</b> serta{" "}
          <b className="text-red-500">Kebijakan Privasi</b> Mesrain.
        </h1>
        <h1 className="text-md font-normal my-4 text-slate-600">
          Sudah memiliki akun?{" "}
          <Link href="#" className="text-red-500 cursor-pointer">
            <b>Login</b>
          </Link>
        </h1>
      </div>
      <div className="w-3/4 block mx-auto">
        <Button
          radius="full"
          className="bg-black text-white w-full py-8 text-xl font-semibold my-5 mt-10"
          onClick={handleButtonClick}
        >
          Lanjut
        </Button>
      </div>
    </>
  );
};

export default PagesTwo;
