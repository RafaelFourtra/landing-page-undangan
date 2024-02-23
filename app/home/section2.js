import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../home/css/section2Home.module.css";

const SectionTwo = () => {
  const list = [
    {
      title: "Undangan Digital",
      img: "/image/home/section2/card-digital-invitation.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Undangan 3D",
      img: "/image/home/section2/card-invitation-3d-grayscale.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Filter Instagram",
      img: "/image/home/section2/card-instagram-filter-grayscale.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Undangan Cetak",
      img: "/image/home/section2/card-print-invitation-grayscale.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                  {item.title}
                </h4>
                <p
                  className={`${styles.descriptionCardColor} mt-2 text-sm font-bold`}
                >
                  {item.description}
                </p>
                <Button
                  className={`${styles.descriptionCardColor} mt-4 bg-transparent`}
                  radius="full"
                  size="md"
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
