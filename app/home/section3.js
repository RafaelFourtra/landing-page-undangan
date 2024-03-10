"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import styles from "../home/css/section3Home.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const SectionThree = () => {
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
  const list = [
    {
      title: "Smart WhatsApp",
      description:
        "Undangan kamu akan dikirim secara otomatis ke WhatsApp para tamu hanya dengan sekali klik. Mesrain menggunakan WhatsApp WhatsApp Business API yang bisa dipastikan aman.",
    },
    {
      title: "RSVP Tracking",
      description:
        "RSVP tamu secara otomatis akan diperbarui di buku tamu dashboard undangan website kamu. Lihat status kehadiran para tamu di statistik tamu..",
    },
    {
      title: "Kelola Buku Tamu",
      description:
        "Kelola tamu kamu mulai dari membuat grup tamu, mengatur sesi acara, membatasi pax RSVP perundangan, mengirimkan undangan, dan lainnya.",
    },
    {
      title: "Personalized Invitation",
      description:
        "Sapa tamu undangan pernikahan kamu dengan fitur Personalized Invitation. Lebih personal dan lebih intimate dengan teks yang bisa diubah sesuka hati.",
    },
  ];

  return (
    <>
      <div className={`container mx-auto p-10 py-15 xl:mt-12 lg:mt-12 mt-7`}>
        <div className="xl:grid lg:grid xl:grid-cols-2 lg:grid-cols-2 flex grid-cols-1 flex-col-reverse">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <div>
                <h4
                  className={`${styles.title} xl:text-[3rem] lg:text-[2.2rem] xl:leading-[3.5rem] lg:leading-[2.5rem] text-3xl font-black`}
                >
                  <span className="text-[#307674]">Semua</span> Yang Kamu
                  <br />
                  Butuhkan Ada Disini
                </h4>
                <p
                  className={`${styles.description} mt-1 leading-[1.6rem] py-5 xl:text-lg lg:text-base`}
                >
                  Ayo rancang undangan digital yang simpel namun berkesan, buat
                  momen spesialmu lebih istimewa dengan undangan digital yang
                  sesuai selera!
                </p>

                {list.map((item, index) => (
                  <div>
                    <h5 className="xl:mt-4 lg:mt-2 ml-1 xl:ml-3 lg:ml-3 flex items-center">
                      <span
                        className={`${styles.iconColor} xl:text-2xl lg:text-lg lg:mt-0 mt-6`}
                      >
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-5 text-[1.3rem] lg:mt-0 mt-6 font-medium`}
                      >
                        {item.title}
                      </span>{" "}
                    </h5>
                    <p
                      className={`${styles.description} xl:mt-3 lg:mt-1 lg:ml-14 mt-1 xl:leading-[1.6rem] lg:leading-[1.3rem] text-base`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
                <Button
                  className={`bg-[#307674] text-white mt-6 lg:ml-12`}
                  radius="full"
                  size={windowSize}
                >
                  Lihat Fitur Lainnya <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="block mx-auto mt-20"
              src="/image/home/section3/image-1.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
