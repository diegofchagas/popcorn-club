import { Film } from "lucide-react";
import { getAllMediaItems } from "../api/movies/route";
import MovieRow from "../_components/movieRow";

export default async function Movies() {
  const apiData = await getAllMediaItems({ url: "http://localhost:3333/data" });
  const movieCategories = apiData.movieCategories;
  
  return (
    <div className="pt-[7rem] p-4 md:p-12 lg:p-16 min-h-scree mt-[100px]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
        <Film className="w-8 h-8 text-red-600" /> <h1 className="text-2xl">Filmes</h1>
        </div>
        <p>Explore nosssa coleção de filmes</p>

                      {movieCategories.map((category) => (
                        <MovieRow movies={category.movies} key={category.title} text={category.title} />
                      ))}
      </div>

    
    </div>
  );
}
