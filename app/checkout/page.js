"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Styles from "./css/sectionOneCss.module.css";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const itemList = ["Mulai", "Detail Pernikahan", "Pembayaran"];

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [formValues, setFormValues] = useState({});

  const validationSchemaOne = Yup.object().shape({
    mempelaipria:
      selectedMenu === 0
        ? Yup.string().required("Mempelai Pria is required")
        : Yup.string(),
    mempelaiwanita:
      selectedMenu === 0
        ? Yup.string().required("Mempelai Wanita is required")
        : Yup.string(),
    judulundangan:
      selectedMenu === 0
        ? Yup.string().required("Judul Undangan is required")
        : Yup.string(),
    domain:
      selectedMenu === 0
        ? Yup.string().required("URL Undangan Website is required")
        : Yup.string(),
    tanggalpernikahan:
      selectedMenu === 0
        ? Yup.date().required("Tanggal Pernikahan is required")
        : Yup.date(),
  });
  const validationSchemaTwo = Yup.object().shape({
    email:
      selectedMenu === 1
        ? Yup.string()
            .email("Invalid email address")
            .required("Email is required")
        : Yup.string(),
    whatsapp:
      selectedMenu === 1
        ? Yup.number().required("WhatsApp is required")
        : Yup.number(),
  });

  const validationSchemaThree = Yup.object().shape({
    email:
      selectedMenu === 1
        ? Yup.string()
            .email("Invalid email address")
            .required("Email is required")
        : Yup.string(),
    whatsapp:
      selectedMenu === 1
        ? Yup.number().required("WhatsApp is required")
        : Yup.number(),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema:
      selectedMenu === 0
        ? validationSchemaOne
        : selectedMenu === 1
        ? validationSchemaTwo
        : undefined,
  });

  const handleInputChange = (event) => {
    const { name } = event.target;

    const value =
      event.target.type === "date"
        ? event.target.valueAsDate.toISOString().slice(0, 10)
        : event.target.value;

    setFormValues((prevInputValue) => {
      const updatedInputValue = { ...prevInputValue, [name]: value };
      return updatedInputValue;
    });

    formik.setFieldValue(name, value);
  };

  const handleNextButtonClick = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        selectedMenu === 0
          ? setSelectedMenu(1)
          : selectedMenu === 1
          ? setSelectedMenu(2)
          : "";
      } else {
        console.log("Validation Errors:", errors);
      }
    });
  };
  return (
    // <div>
    //     <SectionOne />
    //     {/* <PagesTwo /> */}
    //     {/* <PagesThree /> */}
    // </div>
    <div>
      <div className="grid grid-cols-3">
        <div className={`${Styles.background} flex items-end justify-center`}>
          <h1 className="text-4xl w-3/4 font-bold text-white py-24">
            Setiap hal hebat dimulai dengan satu langkah kecil.
          </h1>
        </div>
        <div className="col-span-2 h-screen">
          <FaTimes
            className="absolute right-7 top-5 text-xl text-slate-400 cursor-pointer"
            onClick={() => router.back()}
          />
          <div className="grid xl:grid-cols-5 lg:grid-cols-7 grid-cols-1 w-3/4 mt-14 py-15 block mx-auto">
            {itemList.map((step, index) => (
              <React.Fragment key={index}>
                <div className="xl:block lg:block inline-flex">
                  <div className="xl:flex lg:flex xl:items-center lg:items-center xl:justify-center lg:justify-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-500 xl:mb-0 lg:mb-0 mb-10">
                      <h1 className="text-xl text-white font-semibold">
                        {index + 1}
                      </h1>
                    </div>
                  </div>
                  <h1 className="xl:text-center lg:text-center xl:text-sm lg:text-sm text-xl xl:pl-0 lg:pl-0 pl-5 xl:font-semibold lg:font-semibold font-normal my-3">
                    {step}
                  </h1>
                </div>
                {index < itemList.length - 1 && (
                  <div className="border border-[#939393] h-px my-7 xl:block lg:block hidden"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={`${Styles.overflow} w-3/4 mt-14 block mx-auto`}>
            <form>
              {selectedMenu == 0 ? (
                /* Slide 1 */
                <div>
                  <h1 className="text-4xl font-semibold">Let's get started</h1>
                  <h1 className="text-lg font-base py-2">
                    Harap isi formulir ini untuk melanjutkan pemesanan.
                  </h1>
                  <h1 className="text-lg font-semibold mt-6">
                    Informasi Mempelai
                  </h1>
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
                    Jangan khawatir kamu masih bisa mengubah data di Smart
                    Dashboard!
                  </h1>
                  <h1 className="text-right text-md font-normal my-4 text-slate-600">
                    Semua data harus dilengkapi.
                  </h1>
                </div>
              ) : selectedMenu == 1 ? (
                /* Slide 2 */
                <div>
                  <h1 className="text-4xl font-semibold">Informasi Akun</h1>
                  <h1 className="text-lg font-base py-2">
                    Tulis alamat email dan passwordmu atau daftar dengan akun
                    Google untuk akses lebih cepat!
                  </h1>
                  <Input
                    type="text"
                    label="Alamat Email"
                    name="email"
                    variant="underlined"
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    label="Nomor Whatsapp"
                    name="whatsapp"
                    variant="underlined"
                    onChange={handleInputChange}
                  />
                  <h1 className="text-right text-md font-normal my-4 text-slate-600">
                    Semua data harus dilengkapi.
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl font-semibold">Informasi Akun</h1>
                  <h1 className="text-lg font-base py-2">
                    Tulis alamat email dan passwordmu atau daftar dengan akun
                    Google untuk akses lebih cepat!
                  </h1>
                  <Input
                    type="text"
                    label="Alamat Email"
                    variant="underlined"
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    label="Nomor Whatsapp"
                    variant="underlined"
                    onChange={handleInputChange}
                  />
                  <h1 className="text-right text-md font-normal my-4 text-slate-600">
                    Semua data harus dilengkapi.
                  </h1>
                </div>
              )}
            </form>
          </div>
          <div className="w-3/4 block mx-auto">
            {selectedMenu < 2 ? (
              <Button
                radius="full"
                className="bg-black text-white w-full py-8 text-xl font-semibold my-5 mt-10"
                onClick={handleNextButtonClick}
              >
                Lanjut
              </Button>
            ) : (
              <Button
                radius="full"
                className="bg-black text-white w-full py-8 text-xl font-semibold my-5 mt-10"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
