import React from 'react';

const SectionFive = () => {
    const itemList = [
        "Pilih Tema Undangan",
        "Checkout dan Lakukan Pembayaran",
        "Sesuaikan Data Undangan Kamu",
        "Kirim dan Pantau",
    ];

    return (
        <div className="container mx-auto p-10 py-15 mt-20 bg-[#E7F0FF]">
            <h1 className="py-5 text-center text-4xl font-bold"><b className="text-[#549AE2]">4</b> Langkah Mudah Membuat Undangan Digital</h1>
            <div className="grid grid-cols-7 w-10/12 mt-14 py-15 block mx-auto">
                {itemList.map((step, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <div className="flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white">
                                    <h1 className="text-3xl text-[#549AE2] font-bold">{index + 1}</h1>
                                </div>
                            </div>
                            <h1 className="text-center text-sm text-[#688297] font-semibold my-3">{step}</h1>
                        </div>
                        {index < itemList.length - 1 && (
                            <div className="border border-[#939393] h-px my-7"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SectionFive;
