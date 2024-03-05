"use client";

import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

import { useCallback, useEffect, useState } from "react";

const SectionNine = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="container mx-auto p-10 lg:px-52 py-15 xl:mt-6 lg:mt-6">
      <h1 className="text-4xl font-bold">Promo Undangan Online</h1>
      <p className="lg:text-2xl text-lg mt-2">
        Jangan lewatkan penawaran special dari kami khusus untuk anda
      </p>
      <div className="mt-8 rounded-md ring-4 ring-[#307674] container xl:px-24 lg:px-16 px-8 py-10 mt-3 bg-[#FBF8F1]">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-6 lg:col-span-12 col-span-12">
            <p className="font-semibold text-xs">FEATURED</p>
            <p className="font-semibold text-3xl mt-6">
              Potongan Harga Khusus.
            </p>
            <p className="font-semibold text-3xl mt-1">
              Diskon <span className="font-bold text-[#307674] ml-1">30%</span>
            </p>
            <p className="text-md mt-4">
              Dapatkan potongan harga promo dengan berbagai<br></br> fitur dan
              tema yang menarik.
            </p>
            <Button
              className={`bg-[#307674] text-white mt-6`}
              radius="full"
              size={window.innerWidth > 1020 ? "lg" : "md"}
            >
              Ambil Promo <FaArrowRight />
            </Button>
          </div>
          <div className="xl:col-span-6 xl:mt-0 lg:mt-10 mt-8 lg:col-span-12 col-span-12">
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="flex justify-center lg:gap-5 gap-3">
                <div className="flex flex-col gap-3 relative">
                  <div className="xl:h-28 xl:w-28 lg:h-24 lg:w-24 h-14 flex justify-between items-center bg-[#307674] rounded-lg">
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FBF8F1]"></div>
                    <span className="lg:text-5xl text-4xl font-semibold text-white">
                      {countDownTime?.days}
                    </span>
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FBF8F1]"></div>
                  </div>
                  <span className="text-xs sm:text-2xl text-center font-medium">
                    {countDownTime?.days == 1 ? "Day" : "Days"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 relative">
                  <div className="xl:h-28 xl:w-28 lg:h-24 lg:w-24 h-14 flex justify-between items-center bg-[#307674] rounded-lg">
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FBF8F1]"></div>
                    <span className="lg:text-5xl text-4xl font-semibold text-white">
                      {countDownTime?.hours}
                    </span>
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FBF8F1]"></div>
                  </div>
                  <span className="text-xs sm:text-2xl text-center font-medium">
                    {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 relative">
                  <div className="xl:h-28 xl:w-28 lg:h-24 lg:w-24 h-14 flex justify-between items-center bg-[#307674] rounded-lg">
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FBF8F1]"></div>
                    <span className="lg:text-5xl text-4xl text-3xl font-semibold text-white">
                      {countDownTime?.minutes}
                    </span>
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FBF8F1]"></div>
                  </div>
                  <span className="text-xs sm:text-2xl text-center font-medium">
                    {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 relative">
                  <div className="xl:h-28 xl:w-28 lg:h-24 lg:w-24 h-14 flex justify-between items-center bg-[#307674] rounded-lg">
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FBF8F1]"></div>
                    <span className="lg:text-5xl text-4xl text-3xl font-semibold text-white">
                      {countDownTime?.seconds}
                    </span>
                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FBF8F1]"></div>
                  </div>
                  <span className="text-xs sm:text-2xl text-center font-medium">
                    {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
