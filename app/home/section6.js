'use client'
 
import { useState } from 'react'
import {Button} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

const SectionSix = () => {  

    const list = [
        {
          title: "Undangan Digital",
          id: 1
        },
        {
          title: "Undangan Digital",
          id: 2
        },
        {
          title: "Undangan Digital",
          id: 3
        },
      ];

      const [selectedId, setSelectedId] = useState(1);

      const handleButtonClick = (id) => {
        setSelectedId(id);
      };

      const listCard = [];

        if (selectedId === 1) {
        listCard.push(
            {
            title: "Bronze",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 1
            },
            {
            title: "Silver",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 2
            },
            {
            title: "Gold",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 3
            }
        );
        } else if(selectedId === 2) {
        listCard.push(
            {
            title: "Silver",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 2
            },
            {
            title: "Gold",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 3
            }
        );
        } else if (selectedId === 3){
          listCard.push(
            {
            title: "Silver",
            description: "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
            id: 2
            },
        );
        }

      const cardContent = (id) => {
            return (
                <div className="container mx-auto px-10 w-9/12 mt-8">
                <div className={`grid grid-cols-${listCard.length < 3 ? listCard.length : 3} gap-3 mx-auto`}>
                    {listCard.map((item, index) => (
                        <Card className={`py-4 shadow-md w-[350px] ${selectedId === 2 && index % 2 === 0 ? 'ml-auto' : selectedId === 2 ? 'mr-auto' : 'mx-auto'}`}>
                            <CardHeader className='bg-[#E7F0FF] px-5 py-5'>
                              <div>
                                <h4 className={`font-bold text-2xl mb-2 block text-[#221C35]`}>{item.title}</h4>
                                <p className={`text-sm font-bold w-72 text-[#688297]`}>{item.description}</p>  
                                <h4 className={`font-bold text-xl mt-5 block text-[#221C35] line-through`}>Rp 79,000</h4>
                                <h4 className={`font-bold text-3xl block text-[#221C35]`}>Rp 99,000</h4>

                              </div>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                              <p className='mt-4 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>
                              <p className='mt-2 ml-3 flex items-center'><span className={`text-[#035B7D] text-lg`}><FaCircleCheck /></span><span className={`ml-4 text-base font-medium`}>Wedding Fitur</span> </p>

                            </CardBody>
                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">  
                                <Button className={`mt-4 bg-[#035B7D] w-80 text-white`} radius="full" size="md">Pilih Paket <FaArrowRight /></Button>
                                <Button className={`mt-3 bg-[#E7F0FF] w-80 text-[#688297]`} radius="full" size="md">Tanya Admin <FaWhatsapp /></Button>

                            </CardFooter>
                        </Card>
                    ))}
                    </div>
                </div>
            );
      }

    return (

        <div>
            <h1 className="mt-[4.2rem] text-center text-4xl font-bold">Pilih Paket Terbaikmu</h1>
            <div className="flex gap-2 items-center flex justify-center mt-[2.5rem]">
                {list.map((item, index) => (
                    <Button size="lg" radius="sm"  className={selectedId === item.id ? "bg-[#035B7D] text-white" : "bg-white text-[#035B7D]"} onClick={() => handleButtonClick(item.id)}>
                        {item.title}
                    </Button> 
                ))}
            </div>
                    {cardContent()}
        </div>
      );
      
}


export default SectionSix;
