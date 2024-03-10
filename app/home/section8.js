"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { BsChatHeartFill } from "react-icons/bs";
const SectionEight = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container mx-auto p-10 py-15 xl:mt-6 lg:mt-6">
          <Card className="p-8 bg-[#FBF8F1] shadow-md">
            <CardBody>
              <div className="grid grid-cols-12">
                <div className="lg:col-span-3 col-span-12">
                  <div className="flex justify-center">
                    <MdPeopleAlt className="text-[#307674] text-4xl" />
                  </div>
                  <div className="text-center lg:mt-4">
                    <h3 className="text-2xl font-semibold text-[#221C35]">
                      {counterOn && (
                        <CountUp start={0} end={498} duration={2} delay={0} />
                      )}
                      +
                      <p className="mt-1 text-lg font-medium text-[#221C35]">
                        Pelanggan
                      </p>
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-6">
                  <div className="flex justify-center">
                    <MdMarkEmailRead className="text-[#307674] text-4xl" />
                  </div>
                  <div className="text-center lg:mt-4">
                    <h3 className="text-2xl font-semibold text-[#221C35]">
                      {counterOn && (
                        <CountUp start={0} end={498} duration={2} delay={0} />
                      )}
                      +
                    </h3>
                    <p className="mt-1 text-lg font-medium text-[#221C35]">
                      Undangan Dibuat
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-6">
                  <div className="flex justify-center">
                    <IoIosPaperPlane className="text-[#307674] text-4xl" />
                  </div>
                  <div className="text-center lg:mt-4">
                    <h3 className="text-2xl font-semibold text-[#221C35]">
                      {counterOn && (
                        <CountUp start={0} end={1487} duration={2} delay={0} />
                      )}
                      +
                    </h3>
                    <p className="mt-1 text-lg font-medium text-[#221C35]">
                      Undangan Disebar
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-6">
                  <div className="flex justify-center">
                    <BsChatHeartFill className="text-[#307674] text-4xl" />
                  </div>
                  <div className="text-center lg:mt-4">
                    <h3 className="text-2xl font-semibold text-[#221C35]">
                      {counterOn && (
                        <CountUp start={0} end={2156} duration={2} delay={0} />
                      )}
                      +
                    </h3>
                    <p className="mt-1 text-lg font-medium text-[#221C35]">
                      Ucapan & Do'a
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default SectionEight;
