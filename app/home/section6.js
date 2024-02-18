"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardBody,
  Badge,
  CardFooter,
} from "@nextui-org/react";

const SectionSix = () => {
  const [isInvisible, setIsInvisible] = useState(false);
  const list = [
    {
      title: "Undangan Digital",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      status: "available",
      id: 1,
    },
    {
      title: "Undangan 3D",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      status: "comingsoon",
      id: 2,
    },
    {
      title: "Filter Instagram",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      status: "comingsoon",
      id: 3,
    },
    {
      title: "Udangan Cetak",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      status: "comingsoon",
      id: 4,
    },
  ];

  const listCard = [];

  const [selectedId, setSelectedId] = useState(1);

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  if (selectedId === 1) {
    listCard.push(
      {
        title: "Bronze",
        description:
          "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
        id: 1,
      },
      {
        title: "Silver",
        description:
          "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
        id: 2,
      },
      {
        title: "Gold",
        description:
          "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
        id: 3,
      }
    );
  } else if (selectedId === 2) {
    listCard.push(
      {
        title: "Silver",
        description:
          "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
        id: 4,
      },
      {
        title: "Gold",
        description:
          "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
        id: 5,
      }
    );
  } else if (selectedId === 3) {
    listCard.push({
      title: "Silver",
      description:
        "Bebas berkreasi, bikin undangan sendiri. Semua yang kamu butuhkan ada disini.",
      id: 6,
    });
  }

  const cardContent = (id) => {
    return (
      <div className="container mt-8 px-5">
        <div class="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 col-span-12">
            <div
              className={`xl:grid lg:grid ${
                selectedId == 1
                  ? "lg:grid-cols-3 lg:gap--3"
                  : selectedId == 2
                  ? "lg:grid-cols-4 lg:gap-3"
                  : selectedId == 1
                  ? "lg:grid-cols-1"
                  : ""
              }`}
            >
              {listCard.map((item, index) => (
                <Card
                  className={`py-4 shadow-md xl:w-[338px] lg:w-[232px] w-full ${
                    selectedId == 1 ? "lg:mx-auto" : ""
                  } ${
                    selectedId == 2
                      ? item.id % 2 === 0
                        ? "ml-auto lg:col-span-2"
                        : "lg:col-span-2"
                      : ""
                  } ${selectedId == 3 ? "mx-auto" : ""}`}
                >
                  <CardHeader className="bg-[#FBF8F1] px-5 py-5">
                    <div>
                      <h4
                        className={`font-bold text-2xl mb-2 block text-[#221C35]`}
                      >
                        {item.title}
                      </h4>
                      <p className={`text-sm font-semibold lg:w-full xl:w-72`}>
                        {item.description}
                      </p>
                      <h4
                        className={`font-bold text-xl mt-5 block text-[#221C35] line-through`}
                      >
                        Rp 79,000
                      </h4>
                      <h4 className={`font-bold text-3xl block text-[#221C35]`}>
                        Rp 99,000
                      </h4>
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <p className="mt-4 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                    <p className="mt-2 ml-3 flex items-center">
                      <span className={`text-[#307674] text-lg`}>
                        <FaCircleCheck />
                      </span>
                      <span
                        className={`ml-4 text-base font-medium lg:w-full xl:w-72`}
                      >
                        Wedding Fitur
                      </span>
                    </p>
                  </CardBody>
                  <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                    <Button
                      className={`mt-4 bg-[#307674] w-full xl:w-80 text-white`}
                      radius="full"
                      size="md"
                    >
                      Pilih Paket <FaArrowRight />
                    </Button>
                    <Button
                      className={`mt-3 bg-[#C4DBDA] w-full xl:w-80`}
                      radius="full"
                      size="md"
                    >
                      Tanya Admin <FaWhatsapp />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-10 py-15 xl:mt-10 lg:mt-10 mt-3">
      <h1 className="text-center text-4xl font-bold">Pilih Paket Terbaikmu</h1>
      <div className="xl:flex gap-2 items-center text-center xl:justify-center mt-[2.5rem]">
        {list.map((item, index) => (
          <div key={index}>
            {item.status === "comingsoon" ? (
              <Badge
                color="danger"
                content={"Segera!"}
                isInvisible={isInvisible}
              >
                <Button
                  size={window.innerWidth > 1020 ? "lg" : "md"}
                  radius="sm"
                  className={
                    selectedId === item.id
                      ? "bg-[#307674] text-white"
                      : "bg-white text-[#307674]"
                  }
                  onClick={() => handleButtonClick(item.id)}
                  isDisabled
                >
                  {item.title}
                </Button>
              </Badge>
            ) : (
              <Button
                size={window.innerWidth > 1020 ? "lg" : "md"}
                radius="sm"
                className={
                  selectedId === item.id
                    ? "bg-[#307674] text-white"
                    : "bg-white text-[#307674]"
                }
                onClick={() => handleButtonClick(item.id)}
              >
                {item.title}
              </Button>
            )}
          </div>
        ))}
      </div>
      {cardContent()}
    </div>
  );
};

export default SectionSix;
