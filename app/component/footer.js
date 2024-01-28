import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="p-10 pt-20 pb-0 bg-[#E7F0FF]">
            <div className="grid grid-cols-2 border-[#D2D2D2] border-b-2">
                <div>
                    <div className="grid grid-cols-2">
                        <div className="grid grid-rows-2">
                            <div className="py-3">
                                <h1 className="text-lg font-bold text-black">Menu</h1>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                            </div>
                            <div className="py-3">
                                <h1 className="text-lg font-bold text-black">Layanan</h1>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="py-3">
                                <h1 className="text-lg font-bold text-black">Menu</h1>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                            </div>
                            <div className="py-3">
                                <h1 className="text-lg font-bold text-black">Layanan</h1>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                                <p className="text-md font-light text-[#688297]">dkajsrigjiaerjigjaeirie</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-10">
                    <img className="w-full h-6/12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tk7hyTdc_UXtCEKmTe1BZ1hAqDmHN6AFUQ&usqp=CAU" />
                    <h1 className="pt-10 pb-4 text-sm text-[#688297]">Moment.my.id adalah Website Penyedia Undangan Digital sejak 2019, solusi untuk masyarakat yang ingin membuat undangan dengan cara baru, lebih hemat dan efisien.</h1>
                    <h1 className="text-sm text-[#688297]">
                        WhatsApp: +62 851-5752-6649
                        <br />
                        Instagram: @kitaberdua_digital
                        <br />
                        Email: hi@kitaberdua.com
                    </h1>
                    <div className="grid grid-cols-3 pt-4 w-5/12">
                        <div>
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="text-2xl text-[#549AE2] font-bold">
                                    <FaWhatsapp />
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="text-2xl text-[#549AE2] font-bold">
                                    <FaInstagram />
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                                <h1 className="text-2xl text-[#549AE2] font-bold">
                                    <FaFacebookF />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-[#688297] py-16">Copyright ©2023 Digital Invitation Indonesia | Powered by mesrain.id</h1>
        </div>
    )
}

export default Footer;