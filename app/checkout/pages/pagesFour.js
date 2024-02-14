import { Input } from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";

const PagesFour = () => {
    return (
        <div>
            <h1 className="text-4xl font-normal text-red-500 mb-3">Detail Pernikahan</h1>
            <h3 className="text-xl font-normal text-black mb-5">Jika kamu belum yakin, kamu bisa masukan perkiraan terbaik kamu.</h3>
            <h3 className="text-xl font-semibold mb-5">Dimana lokasi pernikahan kamu diselenggarakan?</h3>
            <h3 className="text-lg font-light text-black mb-3">Masukan lokasi acara</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        src="https://maps.google.com/maps?q=Yogyakarta&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        width="400"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                    <style>{`
                        .mapouter {
                            position: relative;
                            height: 250px;
                            width: 100%;
                            background: #fff;
                        }
                        .gmap_canvas {
                            overflow: hidden;
                            height: 250px;
                            width: 100%;
                        }
                        .gmap_canvas iframe {
                            position: relative;
                            z-index: 2;
                        }
                        `}</style>
                </div>
            </div>

            <Input
                type="text"
                label="Alamat"
                variant="underlined"
            />
            <Input
                type="text"
                label="Gedung"
                variant="underlined"
            />
            <Input
                type="text"
                label="Kota"
                variant="underlined"
            />
            <RadioGroup>
                <Radio value="masih_belum_tau" className="mb-4 mt-3">Masih belum tau</Radio>
            </RadioGroup>
            <h1 className="text-xl font-semibold mb-5">Berapa jumlah tamu yang rencananya ingin kamu undang?</h1>
            <Input
                type="text"
                label="Jumlah Tamu"
                variant="underlined"
            />
            <RadioGroup>
                <Radio value="masih_belum_tau" className="mb-4 mt-3">Masih belum tau</Radio>
            </RadioGroup>
            <h1 className="text-right text-md font-normal my-4 text-slate-600">Semua data harus dilengkapi</h1>
        </div>
    )
}

export default PagesFour