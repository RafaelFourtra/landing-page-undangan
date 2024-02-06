import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="container mx-auto p-10 xl:px-28 lg:px-16 pt-20 pb-0 bg-[#ACD5D4]">
            <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 pb-4 border-[#D2D2D2] border-b-2">
                <div className="col-span-2">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                        <div className="grid grid-rows-2">
                            <div className="mb-4">
                                <h1 className="text-lg mb-5 font-bold text-black">Menu</h1>
                                <p className="text-md mb-2 font-normal">Tema</p>
                                <p className="text-md mb-2 font-normal">Fitur Undangan</p>
                                <p className="text-md mb-2 font-normal">Pertanyaan(FAQ)</p>
                                <p className="text-md mb-2 font-normal">Kebijakan Privasi</p>
                            </div>
                            <div>
                                <h1 className="text-lg mb-5 font-bold text-black">Layanan Lainnya</h1>
                                <p className="text-md mb-2 font-normal">Jasa Pembuatan Website (Coming Soon)</p>
                                <p className="text-md mb-2 font-normal">Jasa Learning Website (Coming Soon)</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="mb-4">
                                <h1 className="text-lg mb-5 font-bold text-black">Layanan</h1>
                                <p className="text-md mb-2 font-normal">Undangan Online - Website</p>
                                <p className="text-md mb-2 font-normal">Undangan Video - (Coming Soon)</p>
                                <p className="text-md mb-2 font-normal">Undangan Gambar - (Coming Soon)</p>
                                <p className="text-md mb-2 font-normal">Undangan Cetak - (Coming Soon)</p>
                            </div>
                            <div>
                                <h1 className="text-lg mb-5 font-bold text-black">Operasional</h1>
                                <p className="text-md font-normal">
                                    Desa Cilebut Barat RT 04 RW 05 No. 70
                                    <br />
                                    Kecamatan Sukaraja Kabupaten Bogor 16710
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:pl-10 lg:pl-10 pl-0 xl:pb-10 lg:pb-10 pb-6">
                    <img className="xl:w-full lg:w-full w-6/12 h-6/12" src="/image/logo/logo_text.svg" />
                    <h1 className="xl:pt-10 lg:pt-10 pt-4 pb-4 xl:text-sm lg:text-sm text-md">Moment.my.id adalah Website Penyedia Undangan Digital sejak 2019, solusi untuk masyarakat yang ingin membuat undangan dengan cara baru, lebih hemat dan efisien.</h1>
                    <h1 className="text-md">
                        WhatsApp: +62 851-5752-6649
                        <br />
                        Instagram: @kitaberdua_digital
                        <br />
                        Email: hi@kitaberdua.com
                    </h1>
                    <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 pt-4 xl:w-6/12 lg:w-8/12 w-6/12 flex mx-auto">
                        <div>
                            <div className="xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-12 h-12 mx-2 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="xl:text-2xl lg:text-xl text-2xl text-[#549AE2] font-bold">
                                    <FaWhatsapp />
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className="xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-12 h-12 mx-2 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="xl:text-2xl lg:text-xl text-2xl text-[#549AE2] font-bold">
                                    <FaInstagram />
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className="xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-12 h-12 mx-2 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="xl:text-2xl lg:text-xl text-2xl text-[#549AE2] font-bold">
                                    <FaFacebookF />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="py-10 xl:text-start lg:text-start text-center">Copyright ©2023 Digital Invitation Indonesia | Powered by mesrain.id</h1>
        </div>
    )
}

export default Footer;