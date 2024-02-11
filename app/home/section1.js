"use client";
import styles from "../home/css/section1Home.module.css";

import { FaWhatsapp } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { Button } from "@nextui-org/react";

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
      <div className="p-4 flex items-center justify-center">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            corrupti ea repudiandae inventore eveniet veniam excepturi, autem
            dolorum omnis. Exercitationem et explicabo repellendus eaque
            assumenda eum blanditiis excepturi aspernatur voluptates?
          </p>
          {/* Menyembunyikan button pada mode mobile */}
          <Button
            className={`${styles.button} mt-3 bg-transparent hidden sm:block lg:flex xl:flex`}
            radius="full"
            size="md"
          >
            Konsultasi Gratis <FaWhatsapp />
          </Button>
        </div>
      </div>
      <div>
        <img
          className="block mx-auto w-3/5 xl:w-6/5 "
          src="/image/home/section1/section-1.png"
        />
      </div>
    </div>
  );
};

export default SectionOne;
