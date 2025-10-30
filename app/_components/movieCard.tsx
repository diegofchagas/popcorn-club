"use client"
import { Play, Star } from "lucide-react";
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from "react";

export type MovieCardProps ={
  movie: {
  poster: string;
  title: string;
  rating: string;
  year: string;
}
}


export default function MovieCard({ movie }: MovieCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const numberOne = 1
  return (
    <motion.div
      className="flex-shrink-0 w-44 md:w-56 cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: numberOne * 0.05 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-700" />
        )}

        <Image
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={movie.poster}
          alt={movie.title}
          width={400}
          height={400}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="flex items-center justify-center mb-2">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-full p-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-6 h-6 text-black fill-current" />
            </motion.div>
          </div>

          <div className="flex justify-between mt-2">
            <h3 className="text-sm md:text-base line-clamp-2 drop-shadow-lg">
              {movie.title}
            </h3>
            <span className="text-sm text-gray-300">{movie.year}</span>
          </div>
        </motion.div>

        {/* Rating Badge (always visible) */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs">{movie.rating}</span>
        </div>
      </div>
    
    </motion.div>

  );
    
} 