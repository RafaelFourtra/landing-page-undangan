import {Button} from "@nextui-org/react";
import styles from "../home/css/section3Home.module.css";
import { FaCircleCheck } from "react-icons/fa6";


const SectionThree = () => {

    const list = [
        {
          title: "Keunggulan",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Keunggulan",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Keunggulan",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Keunggulan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];

    return(
        <>
        <div className={`container mx-auto px-10 xl:mt-20 lg:mt-20`}>
            <div className="grid grid-cols-2">
                <div className='p-4'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h4 className={`${styles.title} xl:text-[3rem] lg:text-[2.2rem] xl:leading-[3.5rem] lg:leading-[2.5rem] font-black`}>
                                Keunggulan dan fitur
                                <br />
                                pelayanan kami
                            </h4>  
                                <p className={`${styles.description} mt-1 leading-[1.6rem] py-5 xl:text-lg lg:text-base`}>Lengkapi website undangan digitalmu dengan beragam fitur yang dapat disesuaikan dengan seleramu.</p>                             

                                {list.map((item, index) => (
                                    <div>
                                    <h5 className='xl:mt-4 lg:mt-2 ml-3 flex items-center'><span className={`${styles.iconColor} xl:text-2xl lg:text-lg`}><FaCircleCheck /></span><span className={`ml-5 text-[1.3rem] font-medium`}>{item.title}</span> </h5>
                                    <p className={`${styles.description} xl:mt-3 lg:mt-1 ml-14 xl:leading-[1.6rem] lg:leading-[1.3rem] text-base`}>{item.description}</p>       
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
                <div>
                    <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionThree