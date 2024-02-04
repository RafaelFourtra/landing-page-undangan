import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
// import imageOne from "/public/image/home/section4/SectionFourImage.png"

// CSS
import styles from "./css/section4Home.module.css"

const SectionFour = () => {
    return (
        <div className="container mx-auto p-10 py-15 xl:mt-20 lg:mt-20 mt-7">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                        <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                    </div>
                </div>
                <div className="xl:p-10 lg:p-10 p-7 px-1 flex items-center">
                    <div>
                        <img src="/image/home/section4/SectionFourImage.png" className="w-96 py-9 xl:block lg:block hidden" alt="me" />
                        <h1 className="text-4xl font-black mb-4 lg:mb-6">Kenapa Kami Jadi Pilihan Yang Tepat?</h1>
                        <h3 className="text-[#688297] text-base">Kami selalu memberikan pelayanan & harga terbaik dalam pasar dan menyediakan transaksi 24 jam.</h3>
                        <Button className={`${styles.buttonstyles} my-3`} radius="full" size="md">Mulai Sekarang <FaArrowRight /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour;