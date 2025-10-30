import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import './swiperCustom.css';
import MovieCard, { MovieCardProps } from "../movieCard";


type MovieCaroseulProps = {
  movieCards: MovieCardProps['movie'][];
  onClick: (movie: MovieCardProps['movie']) => void;
}


export default function MovieCaroseul({onClick, movieCards}:MovieCaroseulProps) {
  return (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}   
          spaceBetween={20}
          loop={movieCards.length >= 6}
          className="mySwiper"
        >
          {movieCards.map((_,index)=> <SwiperSlide onClick={() => onClick(movieCards[index])} key={index}> <MovieCard movie={movieCards[index]} /> </SwiperSlide>)}
        </Swiper>
  );
}
