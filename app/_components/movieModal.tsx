"use client";

import { Star } from "lucide-react";
import Image from "next/image";

type MovieModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function MovieModal({ open, onClose }: MovieModalProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center z-50 items-center transition-all duration-300
        ${open ? "visible bg-black/60 opacity-100" : "invisible opacity-0"}
      `}
    >
      <div
        className=" relative w-[500px] h-[500px] bg-black/60 opacity-100 "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-red-300 cursor-pointer"
        >
          X
        </button>
        <Image
          className={`w-full h-full object-cover  duration-300`}
          src={
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200"
          }
          alt="filme"
          width={80}
          height={80}
        />
        <ul className="flex items-center gap-2">
          <li className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/50">
            {" "}
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> 8.7
          </li>
          <li className="text-gray-300">2024</li>
          <li className="text-gray-400 text-sm">Ficção Cientifica</li>
          <li className="text-gray-400 text-sm">Aventura</li>
        </ul>

        <div>
          <h4>Sinopse</h4>
          <p>
            Uma história emocionante que cativa do início ao fim, com atuações
            incríveis e uma cinematografia de tirar o fôlego.
          </p>
        </div>

        <div className="flex gap-2">
          <div>
            <h4>Elenco</h4>
            <p>
              Ricardo Santos, Ana Costa, Miguel Oliveira, Laura Ferreira,Direção
            </p>
          </div>
          <div>
            <h4>Direção</h4>
            <p>Diego Chagas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
