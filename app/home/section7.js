"use client"
import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {Button} from "@nextui-org/react";

export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  const accordionItems = [
    {
      id: 1,
      ariaLabel: 'Accordion 1',
      title: 'Apakah pengerjaan bisa dibantu jika tidak ingin self service?',
      content: 'Content for Accordion 1',
    },
    {
      id: 2,
      ariaLabel: 'Accordion 2',
      title: 'Pertanyaan 2',
      content: 'Content for Accordion 2',
    },
    {
      id: 3,
      ariaLabel: 'Accordion 3',
      title: 'Pertanyaan 3',
      content: 'Content for Accordion 3',
    },
  ];

  return (
    <div className='container mx-auto xl:p-20 lg:p-20 p-20 px-6 xl:mt-20 lg:mt-5'>
      <div className="grid xl:grid-cols-4 lg:grid-cols-5">
        <div className="xl:col-span-1 lg:col-span-2 mb-10">
          <h1 className='font-semibold mb-3 text-xl'>FAQs</h1>
          <h1 className='font-bold mb-3 text-3xl'>Punya Pertanyaan Lain?</h1>
          <h1 className='font-base w-5/6 mb-5 text-lg lg:text-base'>Tailwind lets you conditionally apply utility classes in different states using variant modifiers.</h1>
          <Button className="bg-[#035B7D] font-semibold text-white" radius="full" size="md">Konsultasi Sekarang</Button>
        </div>
        <div className='col-span-3 xl:pl-28 lg:pl-0 flex items-center justify-center'>
          <Accordion variant='bordered' activeItem={activeItem} onItemChange={(item) => setActiveItem(item)}>
            {accordionItems.map((item) => (
              <AccordionItem className='font-semibold text-sm' key={item.id} aria-label={item.ariaLabel} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}