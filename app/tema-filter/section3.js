import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import { Card, CardBody } from "@nextui-org/react";

const SectionThree = () => {
  return (
    <div className={`container mx-auto px-10 h-[300px]`}>
      <div className="grid grid-cols-1">
        <Card className={`py-5 shadow-md bg-[#FBF8F1] h-[250px] w-full`}>
          <CardBody className="overflow-visible py-2">
            <div className="xl:px-10 lg:px-10 px-5 xl:py-3 lg:py-3 py-2">
              <div>
                <h1
                  className={`xl:text-[2rem] lg:text-[2rem] text-xl xl:leading-[2.5rem] lg:leading-[2.5rem] font-black`}
                >
                  Hubungi Kami Untuk Custom ataupun Konsultasi <br /> Mengenai
                  Undangan Digital Anda.
                </h1>
                <Button
                  className={`mt-8 bg-[#307674] text-white`}
                  radius="full"
                  size="md"
                >
                  Konsultasi Gratis <FaWhatsapp />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SectionThree;
