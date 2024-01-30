
import {Button} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import {Card, CardBody} from "@nextui-org/react";


const SectionThree = () => {
    return(
        
        <div className={`container mx-auto px-10 h-[300px]`}>
            <div className="grid grid-cols-1">
                <Card className={`py-5 shadow-md bg-[#E7F0FF] h-[250px] w-full`}>
                    <CardBody className="overflow-visible py-2">
                    <div className='px-10 py-3'>
                        <div>
                            <h1 className={`text-[2rem] leading-[2.5rem] font-black`}>
                            Hubungi Kami Untuk Custom ataupun Konsultasi <br /> Mengenai Undangan Digital Anda.
                            </h1>
                            <Button className={`mt-8 bg-[#035B7D] text-white`} radius="full" size="md">Konsultasi Gratis <FaWhatsapp /></Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default SectionThree