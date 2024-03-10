"use client";
import styles from "../home/css/section1Home.module.css";

import { FaWhatsapp } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

const SectionOne = () => {
  const text = () => {
    useTypewriter({
      words: ["Pernikahan?", "Tunangan?"],
      loop: true,
    });
  };
  return (
    <div
      className={`${styles.section1} container mx-auto px-5 py-28 sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2`}
    >
      <div className="p-4 flex items-center justify-center xl:mt-20">
        <div className="lg:text-left xl:text-left xl:ml-28 text-center ">
          <h1
            className={`${styles.title} text-2xl lg:text-[3rem] lg:leading-[4rem] leading-[1] font-black mb-2 lg:mb-0`}
          >
            Buat Undangan Online
            <br className="hidden lg:inline" />{" "}
            {/* Hanya tampil di atas lg (large) */}
            Digital Website Untuk
            <br className="hidden lg:inline" />{" "}
            {/* Hanya tampil di atas lg (large) */}
            <span>
              <Typewriter
                options={{
                  strings: ["Pernikahan?", "Tunangan?"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p
            className={`${styles.description} text-lg lg:text-2l leading-[1.6rem] py-5 mb-5 lg:mb-0`}
          >
            Buat undangan digital pernikahan mu di Mesrain. Dengan pilih tema
            yang sesuai, sunting detail acara dengan mudah, tambahkan foto
            spesialmu, dan dalam hitungan menit, undangan impianmu akan
            terwujud.
          </p>
          {/* Menyembunyikan button pada mode mobile */}
          <div className="lg:flex items-center hidden">
            <Button
              className={`bg-[#307674] text-white lg:mt-3  lg:block lg:flex xl:flex`}
              radius="full"
              size={window.innerWidth > 1020 ? "lg" : "md"}
            >
              Daftar & Mulai <FaArrowRight />
            </Button>
            <Button
              className={`${styles.button} lg:mt-3 lg:block lg:flex xl:flex ml-3`}
              radius="full"
              size={window.innerWidth > 1020 ? "lg" : "md"}
            >
              Konsultasi Gratis <FaWhatsapp />
            </Button>
          </div>
        </div>
      </div>
      <div className="xl:mt-20 lg:mt-32">
        <img
          className="block mx-auto  w-3/4"
          src="/image/home/section1/section-1.png"
        />

        <Button
          className={`bg-[#307674] text-white mt-8 lg:hidden w-full`}
          radius="full"
          size={window.innerWidth > 1020 ? "lg" : "md"}
        >
          Daftar & Mulai <FaArrowRight />
        </Button>
        <Button
          className={`${styles.button} mt-2 lg:hidden  w-full`}
          radius="full"
          size={window.innerWidth > 1020 ? "lg" : "md"}
        >
          Konsultasi Gratis <FaWhatsapp />
        </Button>
      </div>
    </div>
  );
};

export default SectionOne;
