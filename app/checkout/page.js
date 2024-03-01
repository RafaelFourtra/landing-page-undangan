"use client";
import { useState, useEffect } from "react";
import React from "react"
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaArrowLeftLong } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { Divider, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import Styles from "./css/sectionOneCss.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Slider from 'react-slick';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

// Icon
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6"

// Import CSS untuk react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      selectedMenu === 2
        ? Yup.string().required("Gmaps is required")
        : Yup.string(),
    alamat:
      selectedMenu === 2
        ? Yup.string().required("Alamat is required")
        : Yup.string(),
    gedung:
      selectedMenu === 2
        ? Yup.string().required("Gedung is required")
        : Yup.string(),
    kota:
      selectedMenu === 2
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
        console.log("oke");
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
          setSelectedMenu(2);
          // handleSubmit(e);
        }
        setIsNextButtonClicked(false);
      } else {
        setIsNextButtonClicked(true);
      }
    });
  };

  const [idArray, setIdArray] = useState([]);
  useEffect(() => {
    const storedIdArray = JSON.parse(window.localStorage.getItem('idArray')) || [];
    setIdArray(storedIdArray);
  }, []);

  const listPaketItem = [
    {
      title: "Bronze",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      harga: 100000,
      id: 1,
    },
    {
      title: "Silver",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      harga: 100000,
      id: 2,
    },
    {
      title: "Gold",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      harga: 100000,
      id: 3,
    }
  ]

  const matchingPaketItem = idArray.map((id) => {
    return listPaketItem.find((item) => item.id === id);
  });

  // Remove item from localStorage function
  const removeIdFromArrayAndLocalStorage = (idToRemove) => {
    const updatedIdArray = idArray.filter(id => id !== idToRemove);
    setIdArray(updatedIdArray);

    window.localStorage.setItem('idArray', JSON.stringify(updatedIdArray));
    alert(`ID ${idToRemove} berhasil dihapus!`);
  };

  let totalItemPrice = 0
  idArray.forEach((id) => {
    const matchedItem = listPaketItem.find((item) => item.id === id);
    if (matchedItem) {
      totalItemPrice += matchedItem.harga;
    }
  });

  // Crousel Setup
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Get data from DB to carousel
  const [listCard, setListCard] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tema");
        const result = await response.json();
        setListCard(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Get paket data from DB
  const [listPaketCard, setListPaketCard] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get Paket
        const responsePaket = await fetch("http://localhost:8000/api/paket")
        const responseResult = await responsePaket.json()
        setListPaketCard(responseResult.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    // <div>
    //     <SectionOne />
    //     {/* <PagesTwo /> */}
    //     {/* <PagesThree /> */}
    // </div>
    <div>
      <Modal
        size="3xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Pilih Paket <br />
                <span className='text-sm font-light text-slate-300'>Silahkan pilih paket untuk template ini</span>
              </ModalHeader>
              <ModalBody className='p-4 px-6'>
                <div className='grid grid-cols-4'>
                  <div>
                    <h1 className='text-lg font-medium inline-flex items-center py-1'><FiFilter className='mr-2' /> Filter</h1>
                    <Divider className="my-2" />
                    <Accordion>
                      <AccordionItem key="1" aria-label="Accordion 1" title="Rating">
                        Rating
                      </AccordionItem>
                      <AccordionItem key="2" aria-label="Accordion 2" title="Harga">
                        Harga
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className={`${Styles.hideScrollBar} col-span-3 p-3 px-4 overflow-auto h-64`}>
                    <h1 className='text-normal font-normal text-slate-400'>Tentukan 1 produk pada proses ini.</h1>
                    <Input className='my-3' type="text" size="sm" label="Cari Berdasarkan Nama" />
                    <div className='grid grid-cols-2 gap-5'>
                      {listPaketCard.map((item, index) => (
                        <div>
                          <Card className="shadow-md">
                            <CardHeader className="bg-[#FBF8F1] px-5 py-5">
                              <div>
                                <h4
                                  className={`font-bold text-2xl mb-2 block text-[#221C35]`}
                                >
                                  Bronze
                                </h4>
                                <p className={`text-sm font-semibold`}>
                                  Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.
                                </p>
                              </div>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                              <p className="mt-4 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <p className="mt-2 ml-3 flex items-center">
                                <span className={`text-[#307674] text-lg`}>
                                  <FaCircleCheck />
                                </span>
                                <span
                                  className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                                >
                                  Wedding Fitur
                                </span>
                              </p>
                              <Divider className='my-5' />
                              <h1 className='text-md font-medium text-slate-400'>Harga</h1>
                              <h4
                                className={`font-bold text-lg block text-[#221C35] inline-flex items-end`}
                              >
                                Rp 79,000
                                <span className='ml-2 text-sm line-through'>Rp 99,000</span>
                              </h4>
                            </CardBody>
                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                              <Button
                                className={`mt-4 bg-[#307674] w-full xl:w-80 text-white`}
                                radius="full"
                                size="md"
                              >
                                Pilih Paket <FaArrowRight />
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Batalkan
                </Button>
                <Button color="primary" onPress={onClose}>
                  Simpan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className={`grid ${selectedMenu == 2 ? "grid-cols-1" : "xl:grid-cols-3 lg:grid-cols-1"}`}>
        <div className={`${Styles.background} ${selectedMenu == 2 ? "hidden p-0 m-0" : "flex items-end justify-center"}`}>
          <h1 className="text-4xl w-3/4 font-bold text-white py-24">
            Setiap hal hebat dimulai dengan satu langkah kecil.
          </h1>
        </div>
        <div className={`${selectedMenu == 2 ? "h-max pb-20" : `h-screen lg:${Styles.overflowHidden} lg:h-max`} col-span-2`}>
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

          <div className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 w-3/4 mt-10 bg-transparent py-18 block mx-auto">
            {itemList.map((step, index) => (
              <React.Fragment key={index}>
                <div className="xl:block lg:block inline-flex">
                  <div className="xl:flex lg:flex xl:items-center lg:items-center xl:justify-center lg:justify-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-500 xl:mb-0 lg:mb-0 mb-10">
                      <h1 className="text-xl text-white font-semibold">
                        {selectedMenu == 2 ? (
                          step == "Mulai" ? (
                            <FaCheck />
                          ) : (
                            index + 1
                          )
                        ) : selectedMenu == 3 ? (
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
          <div className={`${Styles.overflows} lg:h-3/5 w-4/5 mt-14 block mx-auto`}>
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
                <div className="mb-8">
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
                  <Input
                    type="text"
                    label="Link Google Maps"
                    name="gmaps"
                    variant="underlined"
                    value={formValues.gmaps}
                    onChange={handleInputChange}
                    isInvalid={
                      isNextButtonClicked && formik.errors.gmaps ? true : false
                    }
                    errorMessage={
                      isNextButtonClicked && formik.errors.gmaps
                        ? formik.errors.gmaps
                        : ""
                    }
                  />
                  <Input
                    type="text"
                    label="Alamat"
                    name="alamat"
                    variant="underlined"
                    value={formValues.alamat}
                    onChange={handleInputChange}
                    isInvalid={
                      isNextButtonClicked && formik.errors.alamat ? true : false
                    }
                    errorMessage={
                      isNextButtonClicked && formik.errors.alamat
                        ? formik.errors.alamat
                        : ""
                    }
                  />
                  <Input
                    type="text"
                    label="Gedung"
                    name="gedung"
                    variant="underlined"
                    value={formValues.gedung}
                    onChange={handleInputChange}
                    isInvalid={
                      isNextButtonClicked && formik.errors.gedung ? true : false
                    }
                    errorMessage={
                      isNextButtonClicked && formik.errors.gedung
                        ? formik.errors.gedung
                        : ""
                    }
                  />
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
              ) : (
                <div className=''>
                  <div className="p-5 bg-[#E7F0FF] rounded-xl mb-10">
                    <h1 className="text-2xl font-semibold mb-2">Beberapa Pilihan Tema Terbaik Untukmu</h1>
                    <div className="p-4 px-8">
                      <Slider {...settings}>
                        {listCard.map((item, index) => (
                          <div className="px-6">
                            <Card className="py-4">
                              <CardBody className="overflow-visible py-2">
                                <Image
                                  alt="Card background"
                                  className="object-cover rounded-xl"
                                  src={`http://localhost:8000/images/thumbnail-tema/${item.thumbnail_tema}`}
                                  width={270}
                                />
                              </CardBody>
                              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny text-center block mx-auto uppercase font-bold">{item.nama_tema}</p>
                                <h1 className="text-sm text-center block mx-auto font-semibold">Preview</h1>
                                <Button className="bg-[#221C35] p-2 px-8 mt-4 block mx-auto font-semibold text-sm text-white" radius="full" onPress={onOpen}>Pilih Desain</Button>
                              </CardHeader>
                            </Card>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  <h1 className='font-semibold text-3xl'>Pesanan Kamu</h1>
                  {idArray.length > 0 ? (
                    <h1 className="mb-7 mt-2 text-md font-medium">Daftar produk-produk yang telah dipesan.</h1>
                  ) : (
                    <h1 className="mb-7"></h1>
                  )}
                  <div className="xl:grid xl:grid-cols-3 lg:flex lg:flex-col lg:grid-cols-1 xl:gap-5 lg:gap-5 grid-cols-1 gap-5">
                    <div className="xl:col-span-2">
                      <div className="bg-[#E7F0FF] rounded-xl p-10">
                        {
                          idArray.length > 0 ? (
                            matchingPaketItem.map((item, index) => (
                              <div key={index} className="pr-4 py-4">
                                <div className="grid grid-cols-4">
                                  <div className="col-span-3">
                                    <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
                                    <h1 className="text-md font-normal mb-3">Harga : <b>Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></h1>
                                    <h1 className="text-md font-normal">Total: Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} X 1 = <b>Rp. {item.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></h1>
                                  </div>
                                  <div>
                                    <FiTrash2 className="float-right cursor-pointer" onClick={() => removeIdFromArrayAndLocalStorage(item.id)} />
                                  </div>
                                </div>
                                <Divider className="my-4" />
                              </div>
                            ))
                          ) : (
                            <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 xl:gap-2 lg:gap-2 px-10 grid grid-cols-1">
                              <div className="flex items-center justify-center">
                                <img src="/image/cart/cart.png" className="w-96 py-9" alt="me" />
                              </div>
                              <div className="col-span-2 flex items-center justify-center">
                                <div className="p-5">
                                  <h1 className="font-semibold text-3xl py-4">Wah, keranjang belanjamu kosong</h1>
                                  <h3 className="text-[#688297] text-md">Wah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah, keranjang belanjamu kosongWah.</h3>
                                  <Button className="bg-[#221C35] text-white mt-6" size="md" radius="full">Mulai Cari Tema</Button>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                    <div>
                      <div className="bg-[#E7F0FF] rounded-xl p-6">
                        <div>
                          <h1 className="font-semibold text-base mb-4">Ringkasan belanja</h1>
                          <div className="grid grid-cols-2">
                            <div>
                              <h1 className="text-sm font-medium mb-3">Total Produk</h1>
                              <h1 className="text-sm font-medium mb-3">Total Pembelian</h1>
                              <h1 className="text-sm font-medium mb-3">Potongan Diskon</h1>
                            </div>
                            <div>
                              <h1 className="text-sm font-medium mb-3 text-right">{idArray.length}</h1>
                              <h1 className="text-sm font-medium mb-3 text-right">{totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                              <h1 className="text-sm font-medium mb-3 text-right">0</h1>
                            </div>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex justify-between">
                            <h1 className="text-md font-semibold">Total Pembayaran</h1>
                            <h1 className="text-md font-semibold">Rp. {totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                          </div>
                          <h1 className="text-2xl text-center font-semibold my-3 mt-5">12345678</h1>
                          <div className="grid grid-cols-3">
                            <div className="flex items-center justify-center">
                              <div className="bg-red-500 rounded-full mx-2 w-3 h-3"></div>
                              <h1 className="text-sm text-black font-semibold">Dipesan</h1>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="bg-[#FFA800] rounded-full mx-2 w-3 h-3"></div>
                              <h1 className="text-sm text-black font-semibold">Di proses</h1>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="bg-[#14FF00] rounded-full mx-2 w-3 h-3"></div>
                              <h1 className="text-sm text-black font-semibold">Selesai</h1>
                            </div>
                          </div>
                          <Button className="w-full mt-8 font-semibold text-white bg-[#307674]">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="w-3/4 block mx-auto">
            {selectedMenu < 1 ? (
              <Button
                radius="full"
                className={`bg-black text-white w-full ${selectedMenu < 1 ? "mt-10" : ""} py-8 text-xl font-semibold my-5`}
                onClick={handleNextButtonClick}
              >
                Lanjut
              </Button>
            ) : selectedMenu == 1 ? (
              <Button
                radius="full"
                className={`bg-black text-white w-full ${selectedMenu == 1 ? "mt-10" : ""} py-8 text-xl font-semibold my-5`}
                onClick={handleNextButtonClick}
              >
                Submit
              </Button>
            ) : (<></>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
