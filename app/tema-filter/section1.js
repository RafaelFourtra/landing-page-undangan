import styles from "../home/css/section1Home.module.css";

import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

const SectionOne = () => {
  return (
    <div className={`${styles.section1} container mx-auto px-10 py-10`}>
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 py-10">
        <div className="p-4 flex items-center justify-center">
          <div className="pt-10">
            <div>
              <h1
                className={`${styles.title} text-[3rem] leading-[4rem] font-black`}
              >
                Berbagai Pilihan Tema
                <br />
                Undangan
              </h1>
              <p
                className={`${styles.description} leading-[1.6rem] py-5 text-2l`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem et explicabo repellendus eaque assumenda eum
                blanditiis excepturi aspernatur voluptates?
              </p>
              <p className={`${styles.description} leading-[1.6rem] text-2l`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. itiis
                excepturi aspernatur voluptates?
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="block mx-auto  "
            src="/image/filter/section1/image1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
