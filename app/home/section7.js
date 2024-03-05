"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";

export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  const accordionItems = [
    {
      id: 1,
      ariaLabel: "Accordion 1",
      title: "Apa itu Mesrain?",
      content:
        "Platform penyedia Website Digital Undangan Digital yang murah dan berkualitas. Buat undangan nikahmu dengan Web, tanpa biaya cetak dan pengiriman ke orang-orang. Tentunya lebih hemat dan kekinian. moment.my.id/namapasangan mudah pula kamu bagikan di berbagai sosial media.",
    },
    {
      id: 2,
      ariaLabel: "Accordion 2",
      title: "Berapa lama proses pembuatannya?",
      content:
        "Untuk membuat undangan digital di Mesrain membutuhkan waktu sekitar 10 menit dan bisa langsung mengirim ke tamu undangan kamu.",
    },
    {
      id: 3,
      ariaLabel: "Accordion 3",
      title: "Apa pengerjaan bisa dibantu jika tidak ingin self service?",
      content:
        "Bisa, Kamu bisa langsung konfirmasi ke Admin WhatsApp jika ingin dibantu terlebih dahulu. Nantinya setelah dibantu Kamu tetap bisa edit undangannya sendiri untuk melakukan revisi dan menambahkan data undangan.",
    },
    {
      id: 4,
      ariaLabel: "Accordion 4",
      title: "Berapa undangan yang bisa dibuat?",
      content:
        "Setiap pembelian paket di Mesrain hanya bisa membuat 1 undangan",
    },
    {
      id: 5,
      ariaLabel: "Accordion 5",
      title: "Apakah ada batas revisinya?",
      content:
        "Tidak ada batasan untuk revisi undangan kamu selama paket masih aktif.",
    },
    {
      id: 6,
      ariaLabel: "Accordion 6",
      title: "Apakah ada batas kirim undangan?",
      content:
        "Tidak ada batas untuk kirim undangan digital website dari Mesrain. Cukup satu undangan untuk banyak tamu.",
    },
  ];

  return (
    <div className="container mx-auto lg:px-20 py-14 px-20 lg:mt-5">
      <div className="grid xl:grid-cols-4 lg:grid-cols-5">
        <div className="xl:col-span-1 lg:col-span-2 mb-10">
          <h1 className="font-semibold mb-3 text-xl">FAQs</h1>
          <h1 className="font-bold mb-3 text-3xl">Punya Pertanyaan Lain?</h1>
          <h1 className="font-base w-5/6 mb-5 text-lg lg:text-base">
            Tanyakan pertanyaan yang ingin kamu tanyakan dengan tombol di bawah ini.
          </h1>
          <Button
            className="bg-[#307674] font-semibold text-white"
            radius="full"
            size={window.innerWidth > 1020 ? "lg" : "md"}
          >
            Konsultasi Sekarang <FaWhatsapp />
          </Button>
        </div>
        <div className="col-span-3 xl:pl-28 lg:pl-0 flex items-center justify-center">
          <Accordion
            variant="bordered"
            activeItem={activeItem}
            onItemChange={(item) => setActiveItem(item)}
          >
            {accordionItems.map((item) => (
              <AccordionItem
                className="font-semibold text-sm"
                key={item.id}
                aria-label={item.ariaLabel}
                title={item.title}
              >
                <p className="text-base font-normal">{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
