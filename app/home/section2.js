"use client";

import { useState, useEffect } from "react";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Badge,
} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../home/css/section2Home.module.css";

const SectionTwo = () => {
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
      id: 1,
      title: "Undangan Digital",
      img: "/image/home/section2/card-digital-invitation.png",
      description:
        "Raih momen spesial pernikahanmu dengan undangan digital yang elegan! Layanan pembuatan undangan digital kami menawarkan desain eksklusif dan kualitas terbaik untuk mengabadikan momen indahmu.",
    },
    {
      id: 2,
      title: "Undangan 3D",
      img: "/image/home/section2/card-invitation-3d-grayscale.png",
      description:
        "Buat undangan 3D yang unik dan mengesankan! Pilih desain yang simpel namun dapat disesuaikan sesuai selera. Ayo, raih momen spesialmu dengan undangan digital 3D yang menarik perhatian!",
    },
    {
      id: 3,
      title: "Filter Instagram",
      img: "/image/home/section2/card-instagram-filter-grayscale.png",
      description:
        "Dapatkan filter Instagram eksklusif untuk pernikahanmu! Desain kustom yang unik sesuai tema pernikahanmu. Filter ini akan menambahkan sentuhan magis pada foto dan cerita perjalananmu ke pelaminan.",
    },
    {
      id: 4,
      title: "Undangan Cetak",
      img: "/image/home/section2/card-print-invitation-grayscale.png",
      description:
        "Raih momen spesial pernikahanmu dengan undangan cetak yang elegan! Layanan pembuatan undangan cetak kami menawarkan desain eksklusif dan kualitas cetak terbaik untuk mengabadikan momen indahmu.",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-10 xl:mt-12 lg:mt-12">
          <div className="lg:container lg:w-26">
            <h1 className="text-center xl:text-3xl lg:text-3xl xl:p-0 lg:p-0 text-3xl py-7 font-extrabold">
              Semua yang kamu perlukan untuk bantu wujudkan Momen Impian !
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-10 py-15 xl:mt-6 lg:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {list.map((item, index) => (
            <Card className={`${styles.backgroundCard} py-4 shadow-md`}>
              <CardBody className="overflow-visible py-2">
                <Image
                  isZoomed
                  alt="Card background"
                  className="object-cover rounded-xl block mx-auto w-full"
                  src={`${item.img}`}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className={`${styles.titleColor} font-bold text-large`}>
                  {item.id !== 1 ? (
                    <>
                      {item.title}
                      <span className="p-0.5 bg-red-500 text-[10px] rounded-xl ml-2 text-white mb-2">
                        Coming Soon
                      </span>
                    </>
                  ) : (
                    item.title
                  )}
                </h4>
                <p
                  className={`${styles.descriptionCardColor} mt-2 text-sm font-bold`}
                >
                  {item.description}
                </p>
                <Button
                  className={`${styles.descriptionCardColor} mt-4 bg-transparent`}
                  radius="full"
                  size={windowSize}
                  isDisabled={item.id == 1 ? false : true}
                >
                  Lihat lebih lanjut <FaArrowRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
