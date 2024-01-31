"use client"
import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaPlus } from "react-icons/fa";
import { FaMinus} from "react-icons/fa";

export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  const accordionItems = [
    {
      id: 1,
      ariaLabel: 'Accordion 1',
      title: 'Pertanyaan 1',
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
    <div className='p-20 mt-20'>
      <h1 className='text-center font-bold mb-10 text-3xl'>FAQ</h1>
      <Accordion variant='bordered' activeItem={activeItem} onItemChange={(item) => setActiveItem(item)}>
        {accordionItems.map((item) => (
          <AccordionItem key={item.id} aria-label={item.ariaLabel} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}