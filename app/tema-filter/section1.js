import styles from "../home/css/section1Home.module.css";

import { FaWhatsapp } from "react-icons/fa6";
import {Button} from "@nextui-org/react";


const SectionOne = () => {
    return (
        <div className={`h-[500px] bg-[#549ae2] container mx-auto px-10 pt-36`}>
        <div className="grid grid-cols-2">
            <div className='p-4'>
                <div className='flex items-center justify-center'>
                    <div>
                        <h1 className={`${styles.title} text-[3rem] leading-[4rem] font-black`}>
                            Berbagai Pilihan Tema
                            <br />
                            Undangan
                        </h1>
                        <p className={`${styles.description} leading-[1.6rem] py-5 text-2l`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et explicabo repellendus eaque assumenda eum blanditiis excepturi aspernatur voluptates?
                        </p>
                        <p className={`${styles.description} leading-[1.6rem] text-2l`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. itiis excepturi aspernatur voluptates?
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
            </div>
        </div>
        </div>
    )
}

export default SectionOne;