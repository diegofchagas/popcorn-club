"use client";
import { useState } from "react";
import MovieCaroseul from "./movieCaroseul/movieCarroseul";
import MovieModalBase from "./movieModalBase";
import { MovieCardProps } from "./movieCard";

type Movie = {
  poster: string;
  title: string;
  description?: string;
  cast?: string[];
  director?: string;
  type?: "movie" | "series";
};

type MovieRowProps = {
  text: string;
  movies: MovieCardProps["movie"][];
};

export default function MovieRow({ text, movies }: MovieRowProps) {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="my-[30px]">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-2 px-4 md:px-8">
        {text}
      </h3>

      <MovieCaroseul movieCards={movies} onClick={(movie) => { setSelectedMovie(movie); setOpen(true);}} />

      {selectedMovie && (<MovieModalBase movie={selectedMovie} open={open} onClose={() => setOpen(false)} />)}
    </div>
  );
}
