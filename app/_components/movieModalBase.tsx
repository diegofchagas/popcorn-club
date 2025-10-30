"use client";
import { Calendar, Clock, Play, Plus, Star, User, X } from "lucide-react";
import Image from "next/image";
import { formatYouTubeUrl } from "../utils/formatYouTubeUrl";

type MovieModalBaseProps = {
  open: boolean;
  onClose: () => void;
  movie: {
    poster: string;
    title: string;
    description?: string;
    cast?: string[];
    director?: string;
    type?: "movie" | "series";
  };
};

export default function MovieModalBase({movie,open,onClose,}: MovieModalBaseProps) {
  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      {/* Conteúdo */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#181818] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="relative h-[50vh] rounded-t-xl overflow-hidden">
            <Image
              width={1500}
              height={800}
              src={movie.poster}
              className="w-full h-full object-cover"
              alt={movie.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title and Actions */}
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {movie.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-1 bg-white text-black rounded-lg p-2 cursor-pointer">
                  {" "}
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Assistir
                </button>
                <button className="flex items-center gap-1 bg-black/60 text-white rounded-lg p-2 cursor-pointer ">
                  {" "}
                  <Plus className="w-5 h-5 mr-2" /> Minha lista
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-6">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {/* {se exister avaliação } */}
                  <div className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded-md">
                    <Star className="w-4 h-4 fill-current text-black" />
                    <span className="font-bold text-black">4.8</span>
                  </div>
                  {/* {se exister avaliação } */}
                  <div className="flex items-center gap-1 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>2018</span>
                  </div>
                  {/* {se exister duração} */}
                  <div className="flex items-center gap-1 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>2horas</span>
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-md text-white font-semibold">
                    Ação
                  </div>
                </div>
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Sinopse</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {movie.description
                      ? movie.description
                      : "Sem descrição disponível."}
                  </p>
                </div>
                {/* Trailer */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Trailer</h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={formatYouTubeUrl(
                        "https://www.youtube.com/watch?v=CyiiEJRZjSU"
                      )}
                      title={`Trailer`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Cast */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Elenco
                  </h3>
                  <div className="space-y-2">
                    <div className="text-gray-400 text-sm">
                      {movie.cast
                        ? movie.cast.join(", ")
                        : "Sem elenco disponível."}
                    </div>
                  </div>
                </div>

                {/* Director */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Direção</h3>
                  <div className="text-gray-400">
                    {movie.director
                      ? movie.director
                      : "Sem diretor disponível."}
                  </div>
                </div>

                {/* Type */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Tipo</h3>
                  <div className="inline-block px-3 py-1 bg-[#e50914] rounded-md text-white font-semibold">
                    {movie.type === "movie" ? "Filme" : "Série"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
