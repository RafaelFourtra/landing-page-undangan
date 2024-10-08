import React from "react";

const SectionFive = () => {
  const itemList = [
    "Persiapkan Pembuatan dengan Login Terlebih Dahulu",
    "Mulai dengan Menyesuaikan Data Undangan",
    "Pilih Tema & Paket yang Memukau",
    "Kesempurnaan dalam Langkah Pembayaran",
  ];

  return (
    <div className="container mx-auto xl:p-10 lg:p-10 py-15 xl:mt-20 lg:mt-20 mt-0 bg-[#FBF8F1]">
      <h1 className="py-5 text-center xl:text-4xl lg:text-[2.2rem] text-2xl font-bold xl:pt-0 lg:pt-0 pt-10">
        <b className="text-[#D2C4AD]">4</b> Langkah Mudah Membuat Undangan
        Digital
      </h1>
      <div className="grid xl:grid-cols-7 lg:grid-cols-7 grid-cols-1 w-10/12 mt-14 py-15 block mx-auto">
        {itemList.map((step, index) => (
          <React.Fragment key={index}>
            <div className="xl:block lg:block inline-flex">
              <div className="xl:flex lg:flex xl:items-center lg:items-center xl:justify-center lg:justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white xl:mb-0 lg:mb-0 mb-10">
                  <h1 className="text-3xl text-[#D2C4AD] font-bold">
                    {index + 1}
                  </h1>
                </div>
              </div>
              <p className="xl:text-center lg:text-center xl:text-base lg:text-base text-xl xl:pl-0 lg:pl-0 pl-5 xl:font-semibold lg:font-semibold font-normal my-3 leading-relaxed">
                {step}
              </p>
            </div>
            {index < itemList.length - 1 && (
              <div className="border border-[#939393] h-px my-7 xl:block lg:block hidden"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
