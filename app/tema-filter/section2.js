'use client'
 
import { useState } from 'react'
// Component
import { Button } from "@nextui-org/react";

// Icon
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const SectionTwo = () => {

    const [selectedId, setSelectedId] = useState(1);

      const handleButtonClick = (id) => {
        setSelectedId(id);
      };


    const list = [
        {
          title: "Undangan Digital",
          id: 1
        },
        {
          title: "Undangan 3D",
          id: 2
        },
        {
          title: "Filter Instagram",
          id: 3
        },
      ];


      const listCard = [];

      if (selectedId === 1) {
      listCard.push(
          {
            title: "Tema 1",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 1,
          },
          {
            title: "Tema 2",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 2,
          },
          {
            title: "Tema 3",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 3,
          },
          {
            title: "Tema 4",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 4,
          },
          {
            title: "Tema 5",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 5,
          },
          {
            title: "Tema 6",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 6,
          },
          {
            title: "Tema 7",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 7,
          },
      );
      } else if(selectedId === 2) {
      listCard.push(
        {
            title: "Tema 1",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 1,
          },
          {
            title: "Tema 2",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 2,
          },
          {
            title: "Tema 3",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 3,
          },
          {
            title: "Tema 4",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
            url: "test/coba",
            id: 4,
          },
      );
      } else if (selectedId === 3){
        listCard.push(
            {
                title: "Tema 1",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
                url: "test/coba",
                id: 1,
              },
              {
                title: "Tema 2",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
                url: "test/coba",
                id: 2,
              },
              {
                title: "Tema 3",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg",
                url: "test/coba",
                id: 3,
              },
          );
      }

    return (
        <div className="p-10">
            <h1 className="xl:mt-10 lg:mt-10 mt-3 text-center xl:text-4xl lg:text-4xl text-2xl font-bold">Pilih Paket Terbaikmu</h1>
            <div className="flex gap-2 items-center flex justify-center mt-[2.5rem]">
                {list.map((item, index) => (
                    <Button size="lg" radius="sm"  className={selectedId === item.id ? "bg-[#035B7D] text-white" : "bg-white text-[#035B7D]"} onClick={() => handleButtonClick(item.id)}>
                        {item.title}
                    </Button> 
                ))}
            </div>

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 pt-16">
                <div>
                    <h1 className="text-lg font-semibold">Pilihlah Design Terbaikmu !</h1>
                </div>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-5 xl:pt-10 lg:pt-10 pt-6">
                {listCard.map((item, index) => (
                <div>
                    <div>
                        <img className="rounded-t-lg" src={item.image} />
                        <div className="p-3 px-5 bg-[#E7F0FF] rounded-b-lg">
                            <h1 className="font-semibold text-lg">{item.title}</h1>
                            <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-2">
                                <div>
                                <Button className="w-full bg-[#035B7D] text-white my-2 mt-5" radius='xl:sm lg:full' size="xl:md lg:sm">Preview Tema <FaArrowRight /></Button>
                                </div>
                                <div>
                                <Button className="w-full bg-transparent text-[#035B7D] xl:mt-5 lg:mt-[-9px] border-2 border-[#035B7D] text-center" radius="xl:sm lg:full" size="xl:md lg:sm">Gunakan <MdOutlineShoppingCartCheckout /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default SectionTwo