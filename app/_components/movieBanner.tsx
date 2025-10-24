import { Info, Play, Star } from "lucide-react";
import React from "react";

export function MovieBanner() {
  return (
    <div className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt="film"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="px-4 md:px-12 lg:px-16 max-w-3xl space-y-6">
          <ul className="flex items-center gap-2">
            <li className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/50">
              {" "}
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> 8.7
            </li>
            <li className="text-gray-300">2024</li>
            <li className="text-gray-400 text-sm">Ficção Cientifica</li>
            <li className="text-gray-400 text-sm">Aventura</li>
          </ul>

          <div className="mt-3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 drop-shadow-lg">
              Batman
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg">
              {" "}
              Eu sou o batman
            </p>
          </div>

          <div className="mt-3 flex gap-2">
            <button className="cursor-pointer flex gap-2 items-center bg-white hover:bg-white/90 text-black rounded-md px-2 py-3">
              <Play className="fill-current" size={18} />
              Assistir Agora
            </button>
            <button className="cursor-pointer flex gap-2 items-center bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm text-white rounded-md px-2 py-3">
              <Info size={18} />
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
