import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="maz-w-[1400px] mx-auto px-20 py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 cursor-pointer hover:bg-gradient-to-b from-orange-400 to-orange-500 hover:text-white">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
        navigation={{nextEl:".custom-next", prevEl:".custom-prev"}} 
        loop={true} modules={[Navigation]} 
        breakpoints={{
          640: {slidesPerView:1, spaceBetween:20},
          768: {slidesPerView:2, spaceBetween:20},
          1024: {slidesPerView:3, spaceBetween:20},
        }}
        className="mySwiper">
          {review.map((item) => {
            return(
              /* Card */
            <SwiperSlide className="bg-zinc-200 rounded-xl p-8 ">
              
              {/* Profile */}
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-offset-4 overflow-hidden">
                  <img src={item.image} className="w-full h-full" />
                </div>

                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span className="flex text-yellow-500 mt-2 text-xl gap-1">
                    {Array.from({length: item.rating},(_, index)=>(
                      <FaStar />
                    ) )}
                  </span>
                </div>
              </div>

              {/* Para */}
              <div className="mt-10 min-h-[15vh]">
                <p className="text-zinc-600"> {item.para} </p>
              </div>
            </SwiperSlide>);

          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Pappu johnson",
    profession: "Food Bolgger",
    rating: 3,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem libero distinctio adipisci similique laboriosam. Accusamus nihil dignissimos quas sunt recusandae ab omnis molestiae. Error repellat dolores laborum quis facere.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem libero distinctio adipisci similique laboriosam. Accusamus nihil dignissimos quas sunt recusandae ab omnis molestiae. Error repellat dolores laborum quis facere.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem libero distinctio adipisci similique laboriosam. Accusamus nihil dignissimos quas sunt recusandae ab omnis molestiae. Error repellat dolores laborum quis facere.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem libero distinctio adipisci similique laboriosam. Accusamus nihil dignissimos quas sunt recusandae ab omnis molestiae. Error repellat dolores laborum quis facere.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem libero distinctio adipisci similique laboriosam. Accusamus nihil dignissimos quas sunt recusandae ab omnis molestiae. Error repellat dolores laborum quis facere.",
    image: Customer5,
  },
];
