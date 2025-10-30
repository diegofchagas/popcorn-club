
type MediaItem = {
  id?: string;
  title: string;
  poster: string;
  rating: string; 
  type?: "movie" | "series";
  year: string;
  genres?: Array<string>;
}


type MovieCategory = {
  title: string;
  movies: Array<MediaItem>;
}

type featuredMovie = {
  id: string;
  title: string;
  poster: string;
  rating: string;
  year: string;
  genres: Array<string>
}

type ApiResponseData = {
  movie: MediaItem[];
  series: MediaItem[];
  movieCategories: MovieCategory[];
  featuredMovie: featuredMovie[];
}

export async function getAllMediaItems({url}: {url: string}): Promise<ApiResponseData> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Falha ao buscar posts: ${response.statusText}`);
    }

    const data: ApiResponseData[] = await response.json()

    return data[0];
  }
  catch (error) {
    console.log("Error na busca api", error)
    throw new Error('Não foi possível conectar com a API.');
  }
}