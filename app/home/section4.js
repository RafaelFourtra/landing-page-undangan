"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
// import imageOne from "/public/image/home/section4/SectionFourImage.png"

// CSS
import styles from "./css/section4Home.module.css";

const SectionFour = () => {
  const [windowSize, setWindowSize] = useState("md");

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth > 1020 ? "lg" : "md");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container mx-auto p-10 py-15 xl:mt-20 lg:mt-20 mt-7">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              className="block mx-auto"
              src="/image/home/section4/save-time1.png"
            />
            <img
              className="block mx-auto"
              src="/image/home/section4/save-time2.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              className="block mx-auto"
              src="/image/home/section4/save-energy.png"
            />
            <img
              className="block mx-auto"
              src="/image/home/section4/save-money.png"
            />
          </div>
        </div>
        <div className="xl:p-10 lg:p-10 p-7 px-1 flex items-center">
          <div>
            <img
              src="/image/home/section4/SectionFourImage.png"
              className="w-96 py-9 xl:block lg:block hidden"
              alt="me"
            />
            <h1 className="text-4xl font-black mb-4 lg:mb-6">
              Kenapa Kami Jadi Pilihan Yang Tepat?
            </h1>
            <h3 className="text-[#221C35] text-base leading-relaxed">
              "Kami menawarkan pelayanan istimewa dengan tema elegan dan
              inovatif untuk undangan Anda. Proses pembuatan yang simpel dan
              aman akan membuat pengalaman Anda menyenangkan. Tak hanya itu,
              harga yang sangat menjangkau menjadi jaminan bahwa keindahan
              undangan tidak perlu menguras anggaran Anda. Selama proses
              pembuatan, kami dengan senang hati akan selalu mendampingi Anda,
              memastikan setiap detail undangan Anda mencerminkan keunikan acara
              Anda. Percayakan pada kami untuk membuat momen khusus Anda menjadi
              tak terlupakan!"
            </h3>
            <Button
              className={`${styles.buttonstyles} my-5`}
              radius="full"
              size={windowSize}
            >
              Mulai Sekarang
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
