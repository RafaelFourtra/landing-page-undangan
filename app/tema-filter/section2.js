'use client'

import { React, useState, useEffect } from 'react'
// Component
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  Badge,
  CardFooter,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

// CSS
import Styles from "./css/sectionTwoCss.module.css"

// Icon
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6"

const SectionTwo = () => {

  const router = useRouter();
  const handleClick = (e, path) => {
    router.push(path)
  };

  const [selectedId, setSelectedId] = useState(1);
  const [listCard, setListCard] = useState([]);
  const [listPaketCard, setListPaketCard] = useState([]);

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


  if (selectedId === 1) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8000/api/tema");
          const result = await response.json();
          setListCard(result.data);

          // Get Paket
          const responsePaket = await fetch("http://localhost:8000/api/paket")
          const responseResult = await responsePaket.json()
          setListPaketCard(responseResult.data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
  } else if (selectedId === 2) {
    const listCard2 =
      ({
        title: "Tema 1",
        image:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
        url: "test/coba",
        id: 1,
      },
      {
        title: "Tema 2",
        image:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
        url: "test/coba",
        id: 2,
      },
      {
        title: "Tema 3",
        image:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
        url: "test/coba",
        id: 3,
      },
      {
        title: "Tema 4",
        image:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
        url: "test/coba",
        id: 4,
      });
    setListCard(listCard2);
  } else if (selectedId === 3) {
  }



  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="p-10">
      {/* Modal */}
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

      <h1 className="xl:mt-10 lg:mt-10 mt-3 text-center xl:text-4xl lg:text-4xl text-2xl font-bold">Pilih Paket Terbaikmu</h1>
      <div className="flex gap-2 items-center flex justify-center mt-[2.5rem]">
        {list.map((item, index) => (
          <Button size="lg" radius="sm" className={selectedId === item.id ? "bg-[#035B7D] text-white" : "bg-white text-[#035B7D]"} onClick={() => handleButtonClick(item.id)}>
            {item.title}
          </Button>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 pt-16">
        <div>
          <h1 className="text-lg font-semibold">Pilihlah Design Terbaikmu !</h1>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-5 xl:pt-10 lg:pt-10 pt-6">
        {listCard.map((item, index) => (
          <div>
            <div>
              <img
                className="rounded-t-lg"
                src={`http://localhost:8000/images/thumbnail-tema/${item.thumbnail_tema}`}
              />
              <div className="p-3 px-5 bg-[#FBF8F1] rounded-b-lg">
                <h1 className="font-semibold text-lg">{item.nama_tema}</h1>
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-2">
                  <div>
                    <Button
                      className="w-full bg-[#307674] text-white my-2 mt-5"
                      radius="xl:sm lg:full"
                      size="xl:md lg:sm"
                    >
                      Preview Tema <FaArrowRight />
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="w-full bg-transparent text-[#307674] xl:mt-5 lg:mt-[-9px] border-2 border-[#307674] text-center"
                      radius="xl:sm lg:full"
                      size="xl:md lg:sm"
                      // onPress={onOpen}
                      onClick={(e) => handleClick(e, "/checkout")}
                    >
                      Gunakan <MdOutlineShoppingCartCheckout />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionTwo