// import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Section7 = () => {
  const testimonials = [
    {
      text: "“The instructors are incredibly knowledgeable, and the hands-on assignments prepared me well for my job.”",
      name: "Resky Fernanda",
      job: "Product Designer at Tokopedia",
      img: "/img/profile.png", // Pastikan path gambar benar
    },
    {
      text: "“WOC provides a perfect blend of theory and practice, which has helped me in my career growth significantly.”",
      name: "Alex Johnson",
      job: "Software Engineer at Google",
      img: "/img/profile.png", // Pastikan path gambar benar
    },
    {
      text: "“The instructors are incredibly knowledgeable, and the hands-on assignments prepared me well for my job.”",
      name: "Emily Davis",
      job: "UI/UX Designer at Amazon",
      img: "/img/profile.png", // Pastikan path gambar benar
    },
  ];

  return (
    <div className="flex gap-10 p-40">
      <div className="flex flex-col gap-10">
        <img src="img/“.png" alt="" width={70} />
        <p className="font-bold text-4xl max-w-64">what they say about WOC</p>
        <p className="text-xl max-w-96">More than 3000 users have been helped by World Online Course.</p>
      </div>
      <div className="max-w-xl bg-[#eef5f3] rounded-xl p-10">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <p className="max-w-96 text-2xl">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-2 mt-10">
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name} profile`}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">{testimonial.name}</p>
                    <p>{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section7;
