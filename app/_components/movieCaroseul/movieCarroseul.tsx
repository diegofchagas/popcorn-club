"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import './swiperCustom.css';
import MovieCard from "../movieCard";

type MovieCaroseulProps = {
  onClick: () => void;
}


export default function MovieCaroseul({onClick}:MovieCaroseulProps) {
  const cards = Array(20).fill(<MovieCard/>)
  return (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}   
          spaceBetween={20}
          loop={cards.length >= 6}
      className="mySwiper"
        >
          {cards.map((_,index)=> <SwiperSlide onClick={onClick} key={index}> <MovieCard /> </SwiperSlide>)}
        </Swiper>
  );
}
