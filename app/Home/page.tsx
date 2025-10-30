import { MovieBanner } from "../_components/movieBanner";
import { getAllMediaItems } from "../api/movies/route";
import MovieRow from "../_components/movieRow";

export default async function Home() {
  const apiData = await getAllMediaItems({ url: "http://localhost:3333/data" });
  //const allMovies = apiData.movie;
  // const allSeries = apiData.series;
  const movieCategories = apiData.movieCategories;
  const featuredMovies = apiData.featuredMovie[1];

  return (
    <>
      {!apiData ? (
        <main>
          <h3>Erro ao carregar dados.</h3>
        </main>
      ) : (
        <>
          <div>
            {
              <MovieBanner
                title={featuredMovies.title}
                poster={featuredMovies.poster}
                rating={featuredMovies.rating}
                year={featuredMovies.year}
                genres={featuredMovies.genres}
              />
            }
          </div>

            <main>
      
              {movieCategories.map((category) => (
                <MovieRow movies={category.movies} key={category.title} text={category.title} />
              ))}
            {/* <MovieRow text="Em alta" />
            <MovieRow text="Ação" />
            <MovieRow text="Suspense" /> */}
          </main>
        </>
      )}
    </>
  );
}
