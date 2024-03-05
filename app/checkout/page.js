"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaArrowLeftLong } from "react-icons/fa6";
import { Button, Input } from "@nextui-org/react";
import Styles from "./css/sectionOneCss.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Checkout = () => {
  const itemList = ["Mulai", "Detail Pernikahan", "Pembayaran"];

  const [isLogin, setIsLogin] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [formValues, setFormValues] = useState({});

  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const userDataObject = JSON.parse(userData);

    if (userDataObject) {
      const value = userDataObject.id_user;

      setFormValues((prevInputValue) => {
        const updatedInputValue = { ...prevInputValue, user_id: value };
        return updatedInputValue;
      });
      setIsLogin(true);
      // const fetchData = async () => {
      //   // try {
      //   //   const response = await fetch("http://localhost:8000/api/check-order");
      //   //   const result = await response.json();
      //   // } catch (error) {
      //   //   console.error("Error fetching data:", error);
      //   // }
      // };

      // fetchData();
    } else {
      router.push("/login");
    }
  }, []);

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
    gmaps:
      selectedMenu === 1
        ? Yup.string().required("Gmaps is required")
        : Yup.string(),
    alamat:
      selectedMenu === 1
        ? Yup.string().required("Alamat is required")
        : Yup.string(),
    gedung:
      selectedMenu === 1
        ? Yup.string().required("Gedung is required")
        : Yup.string(),
    kota:
      selectedMenu === 1
        ? Yup.string().required("Kota is required")
        : Yup.string(),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema:
      selectedMenu === 0
        ? validationSchemaOne
        : selectedMenu === 1
        ? validationSchemaTwo
        : "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/order",
        formValues
      );

      if (response.status === 200) {
        console.log(response);
      } else {
        console.log("gt");
        console.error("Gagal:", response);
      }
    } catch (error) {
      // if (error.response.status == 400) {
      // } else {
      //   setIsError(true);
      //   setErrorMessages(error.message);
      // }
    }
  };

  const handleNextButtonClick = (e) => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        if (selectedMenu === 0) {
          setSelectedMenu(1);
        } else if (selectedMenu === 1) {
          // setSelectedMenu(2);
          handleSubmit(e);
        }
        setIsNextButtonClicked(false);
      } else {
        setIsNextButtonClicked(true);
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
          {selectedMenu != 0 ? (
            <FaArrowLeftLong
              className="absolute top-[70px] ml-20 text-xl text-slate-400 cursor-pointer"
              onClick={() => setSelectedMenu(selectedMenu - 1)}
            />
          ) : (
            ""
          )}

          <div className="grid xl:grid-cols-5 lg:grid-cols-7 grid-cols-1 w-3/4 mt-14 py-15 block mx-auto">
            {itemList.map((step, index) => (
              <React.Fragment key={index}>
                <div className="xl:block lg:block inline-flex">
                  <div className="xl:flex lg:flex xl:items-center lg:items-center xl:justify-center lg:justify-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-500 xl:mb-0 lg:mb-0 mb-10">
                      <h1 className="text-xl text-white font-semibold">
                        {selectedMenu == 1 ? (
                          step == "Mulai" ? (
                            <FaCheck />
                          ) : (
                            index + 1
                          )
                        ) : selectedMenu == 2 ? (
                          step == "Mulai" ? (
                            <FaCheck />
                          ) : step == "Detail Pernikahan" ? (
                            <FaCheck />
                          ) : (
                            index + 1
                          )
                        ) : (
                          index + 1
                        )}
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
                          label="Mempelai Pria"
                          variant="underlined"
                          name="mempelaipria"
                          value={formValues.mempelaipria}
                          onChange={handleInputChange}
                          isInvalid={
                            isNextButtonClicked && formik.errors.mempelaipria
                              ? true
                              : false
                          }
                          errorMessage={
                            isNextButtonClicked && formik.errors.mempelaipria
                              ? formik.errors.mempelaipria
                              : ""
                          }
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          label="Mempelai Wanita"
                          variant="underlined"
                          name="mempelaiwanita"
                          value={formValues.mempelaiwanita}
                          onChange={handleInputChange}
                          isInvalid={
                            isNextButtonClicked && formik.errors.mempelaiwanita
                              ? true
                              : false
                          }
                          errorMessage={
                            isNextButtonClicked && formik.errors.mempelaiwanita
                              ? formik.errors.mempelaiwanita
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                      <div>
                        <Input
                          type="text"
                          label="Judul Undangan"
                          variant="underlined"
                          name="judulundangan"
                          value={formValues.judulundangan}
                          onChange={handleInputChange}
                          isInvalid={
                            isNextButtonClicked && formik.errors.judulundangan
                              ? true
                              : false
                          }
                          errorMessage={
                            isNextButtonClicked && formik.errors.judulundangan
                              ? formik.errors.judulundangan
                              : ""
                          }
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          label="URL Undangan Website"
                          variant="underlined"
                          name="domain"
                          value={formValues.domain}
                          onChange={handleInputChange}
                          isInvalid={
                            isNextButtonClicked && formik.errors.domain
                              ? true
                              : false
                          }
                          errorMessage={
                            isNextButtonClicked && formik.errors.domain
                              ? formik.errors.domain
                              : ""
                          }
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
                    value={formValues.tanggalpernikahan}
                    onChange={handleInputChange}
                    isInvalid={
                      isNextButtonClicked && formik.errors.tanggalpernikahan
                        ? true
                        : false
                    }
                    errorMessage={
                      isNextButtonClicked && formik.errors.tanggalpernikahan
                        ? formik.errors.tanggalpernikahan
                        : ""
                    }
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
                <div>
                  <h1 className="text-4xl font-normal text-red-500 mb-3">
                    Detail Pernikahan
                  </h1>
                  <h3 className="text-xl font-normal text-black mb-5">
                    Jika kamu belum yakin, kamu bisa masukan perkiraan terbaik
                    kamu.
                  </h3>
                  <h3 className="text-xl font-semibold mb-5">
                    Dimana lokasi pernikahan kamu diselenggarakan?
                  </h3>
                  <h3 className="text-lg font-light text-black mb-3">
                    Masukan lokasi acara
                  </h3>
                  <div>
                    <Input
                      type="text"
                      label="Link Google Maps"
                      name="gmaps"
                      variant="underlined"
                      value={formValues.gmaps}
                      onChange={handleInputChange}
                      isInvalid={
                        isNextButtonClicked && formik.errors.gmaps
                          ? true
                          : false
                      }
                      errorMessage={
                        isNextButtonClicked && formik.errors.gmaps
                          ? formik.errors.gmaps
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Alamat"
                      name="alamat"
                      variant="underlined"
                      value={formValues.alamat}
                      onChange={handleInputChange}
                      isInvalid={
                        isNextButtonClicked && formik.errors.alamat
                          ? true
                          : false
                      }
                      errorMessage={
                        isNextButtonClicked && formik.errors.alamat
                          ? formik.errors.alamat
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Gedung"
                      name="gedung"
                      variant="underlined"
                      value={formValues.gedung}
                      onChange={handleInputChange}
                      isInvalid={
                        isNextButtonClicked && formik.errors.gedung
                          ? true
                          : false
                      }
                      errorMessage={
                        isNextButtonClicked && formik.errors.gedung
                          ? formik.errors.gedung
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Kota"
                      name="kota"
                      variant="underlined"
                      value={formValues.kota}
                      onChange={handleInputChange}
                      isInvalid={
                        isNextButtonClicked && formik.errors.kota ? true : false
                      }
                      errorMessage={
                        isNextButtonClicked && formik.errors.kota
                          ? formik.errors.kota
                          : ""
                      }
                    />
                  </div>
                </div>
              ) : (
                <></>
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
                onClick={handleNextButtonClick}
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
