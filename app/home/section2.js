import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Button} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../home/css/section2Home.module.css";

const SectionTwo = () => {  
    
    const list = [
        {
          title: "Undangan Digital",
          img: "/images/fruit-1.jpeg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Undangan 3D",
          img: "/images/fruit-2.jpeg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Filter Instagram",
          img: "/images/fruit-3.jpeg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Undangan Cetak",
          img: "/images/fruit-4.jpeg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];

    return (  
        <>
        <div className="grid grid-cols-1 mt-12">
            <h1 className="text-center text-3xl font-extrabold">Semua yang kamu perlukan untuk bantu wujudkan Momen Impian</h1>
        </div>

        <div className="container mx-auto px-10 mt-12">
            <div className="grid grid-cols-4 gap-3">
            {list.map((item, index) => (
            <Card className={`${styles.backgroundCard} py-4 shadow-md`}>
                <CardBody className="overflow-visible py-2">
                    <Image
                    isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl mx-auto w-full"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg"
                    />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className={`${styles.titleColor} font-bold text-large`}>{item.title}</h4>
                    <p className={`${styles.descriptionCardColor} mt-2 text-tiny font-bold`}>{item.description}</p>  
                    <Button className={`${styles.descriptionCardColor} mt-4 bg-transparent`} radius="full" size="md">Lihat lebih lanjut <FaArrowRight /></Button>
                </CardFooter>
            </Card>
             ))}
            </div>
        </div>
        </>
    )
}

export default SectionTwo;
